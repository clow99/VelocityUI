'use client'

import React, { useId, useRef, useState } from 'react'
import styles from './FileUpload.module.css'

export interface FileUploadProps {
  accept?: string
  multiple?: boolean
  maxSize?: number
  onChange?: (files: File[]) => void
  label?: string
  hint?: string
  error?: string
  disabled?: boolean
  className?: string
  id?: string
}

const UploadIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
  </svg>
)

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export const FileUpload: React.FC<FileUploadProps> = ({
  accept,
  multiple = false,
  maxSize,
  onChange,
  label,
  hint,
  error,
  disabled = false,
  className,
  id: idProp,
}) => {
  const generatedId = useId()
  const id = idProp ?? generatedId
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [sizeError, setSizeError] = useState<string | null>(null)

  const displayError = error ?? sizeError

  const processFiles = (incoming: FileList | null) => {
    if (!incoming) return
    const arr = Array.from(incoming)
    if (maxSize) {
      const tooBig = arr.filter((f) => f.size > maxSize)
      if (tooBig.length > 0) {
        setSizeError(`File exceeds maximum size of ${formatBytes(maxSize)}.`)
        return
      }
    }
    setSizeError(null)
    const selected = multiple ? arr : arr.slice(0, 1)
    setFiles(selected)
    onChange?.(selected)
  }

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    setDragging(false)
    if (!disabled) processFiles(e.dataTransfer.files)
  }

  const removeFile = (index: number) => {
    const next = files.filter((_, i) => i !== index)
    setFiles(next)
    onChange?.(next)
  }

  const zoneClasses = [
    styles.zone,
    dragging ? styles.dragging : '',
    displayError ? styles.zoneError : '',
    disabled ? styles.zoneDisabled : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={[styles.root, className ?? ''].filter(Boolean).join(' ')}>
      {label && (
        <span className={styles.label}>{label}</span>
      )}
      <label
        htmlFor={id}
        className={zoneClasses}
        onDragOver={(e) => { e.preventDefault(); if (!disabled) setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          id={id}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          className={styles.hiddenInput}
          onChange={(e) => processFiles(e.target.files)}
        />
        <span className={styles.uploadIcon}>
          <UploadIcon />
        </span>
        <span className={styles.zoneText}>
          <span className={styles.zoneLink}>Choose files</span>
          {' or drag and drop'}
        </span>
        {hint && <span className={styles.zoneHint}>{hint}</span>}
      </label>

      {displayError && (
        <p className={styles.errorMsg} role="alert">{displayError}</p>
      )}

      {files.length > 0 && (
        <ul className={styles.fileList}>
          {files.map((file, i) => (
            <li key={i} className={styles.fileItem}>
              <span className={styles.fileName}>{file.name}</span>
              <span className={styles.fileSize}>{formatBytes(file.size)}</span>
              <button
                type="button"
                className={styles.removeBtn}
                onClick={() => removeFile(i)}
                aria-label={`Remove ${file.name}`}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
