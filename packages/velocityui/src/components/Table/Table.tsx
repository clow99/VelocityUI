'use client'

import React from 'react'
import styles from './Table.module.css'

export type TableSize = 'sm' | 'md' | 'lg'
export type SortDirection = 'asc' | 'desc'

export interface TableColumn<T = Record<string, unknown>> {
  key: string
  header: string
  sortable?: boolean
  render?: (value: unknown, row: T, index: number) => React.ReactNode
}

export interface TableProps<T = Record<string, unknown>> extends React.HTMLAttributes<HTMLDivElement> {
  columns: TableColumn<T>[]
  data: T[]
  sortKey?: string
  sortDir?: SortDirection
  onSort?: (key: string, dir: SortDirection) => void
  striped?: boolean
  bordered?: boolean
  size?: TableSize
}

const SortAscIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
)

const SortDescIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

const SortNeutralIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4M16 15l-4 4-4-4" />
  </svg>
)

export function Table<T = Record<string, unknown>>({
  columns,
  data,
  sortKey,
  sortDir,
  onSort,
  striped = false,
  bordered = false,
  size = 'md',
  className,
  ...props
}: TableProps<T>) {
  const handleHeaderClick = (col: TableColumn<T>) => {
    if (!col.sortable || !onSort) return
    const newDir: SortDirection =
      sortKey === col.key && sortDir === 'asc' ? 'desc' : 'asc'
    onSort(col.key, newDir)
  }

  const tableClasses = [
    styles.table,
    styles[size],
    striped ? styles.striped : '',
    bordered ? styles.bordered : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={[styles.wrapper, className ?? ''].filter(Boolean).join(' ')}
      {...props}
    >
      <table className={tableClasses}>
        <thead>
          <tr>
            {columns.map((col) => {
              const isActive = sortKey === col.key
              const thClasses = [
                styles.th,
                col.sortable ? styles.sortable : '',
                isActive ? styles.sortActive : '',
              ]
                .filter(Boolean)
                .join(' ')
              return (
                <th
                  key={col.key}
                  className={thClasses}
                  onClick={() => handleHeaderClick(col)}
                  aria-sort={
                    isActive
                      ? sortDir === 'asc'
                        ? 'ascending'
                        : 'descending'
                      : col.sortable
                      ? 'none'
                      : undefined
                  }
                >
                  <span className={styles.thContent}>
                    {col.header}
                    {col.sortable && (
                      <span className={styles.sortIcon}>
                        {isActive ? (
                          sortDir === 'asc' ? <SortAscIcon /> : <SortDescIcon />
                        ) : (
                          <SortNeutralIcon />
                        )}
                      </span>
                    )}
                  </span>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className={styles.empty}>
                No data available.
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className={styles.tr}>
                {columns.map((col) => {
                  const raw = (row as Record<string, unknown>)[col.key]
                  const cell = col.render ? col.render(raw, row, rowIndex) : (raw as React.ReactNode)
                  return (
                    <td key={col.key} className={styles.td}>
                      {cell}
                    </td>
                  )
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
