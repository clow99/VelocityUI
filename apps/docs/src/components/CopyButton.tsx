'use client'
import { useEffect, useRef, useState } from 'react'
import { Icon } from './Icon'

export function CopyButton({ text, label = 'Copy code' }: { text: string; label?: string }) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle')
  const timer = useRef<ReturnType<typeof setTimeout>>()
  useEffect(() => {
    setStatus('idle')
    return () => clearTimeout(timer.current)
  }, [text])
  async function copy() {
    clearTimeout(timer.current)
    try {
      await navigator.clipboard.writeText(text)
      setStatus('copied')
    } catch {
      setStatus('error')
    }
    timer.current = setTimeout(() => setStatus('idle'), 3000)
  }
  return (
    <span className="copy-control">
      <button type="button" onClick={copy} className="copy-button" aria-label={label}>
        <Icon name={status === 'copied' ? 'check' : 'copy'} size={15} />
        <span>{status === 'copied' ? 'Copied' : 'Copy'}</span>
      </button>
      <span className={status === 'error' ? 'copy-error' : 'sr-only'} role="status">
        {status === 'error'
          ? 'Copy unavailable. Select the code to copy it manually.'
          : status === 'copied'
            ? 'Copied to clipboard'
            : ''}
      </span>
    </span>
  )
}
