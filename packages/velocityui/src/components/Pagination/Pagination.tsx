import React from 'react'
import styles from './Pagination.module.css'

export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  page: number
  totalPages: number
  onChange: (page: number) => void
  siblingCount?: number
  showFirstLast?: boolean
}

function getRange(start: number, end: number): number[] {
  const length = end - start + 1
  return Array.from({ length }, (_, i) => start + i)
}

function buildPages(page: number, totalPages: number, siblingCount: number): (number | '...')[] {
  const totalNumbers = siblingCount * 2 + 5
  if (totalPages <= totalNumbers) {
    return getRange(1, totalPages)
  }

  const leftSibling = Math.max(page - siblingCount, 1)
  const rightSibling = Math.min(page + siblingCount, totalPages)

  const showLeftDots = leftSibling > 2
  const showRightDots = rightSibling < totalPages - 1

  if (!showLeftDots && showRightDots) {
    const leftRange = getRange(1, 3 + siblingCount * 2)
    return [...leftRange, '...', totalPages]
  }

  if (showLeftDots && !showRightDots) {
    const rightRange = getRange(totalPages - (2 + siblingCount * 2), totalPages)
    return [1, '...', ...rightRange]
  }

  return [1, '...', ...getRange(leftSibling, rightSibling), '...', totalPages]
}

const ChevronLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 18l-6-6 6-6" />
  </svg>
)

const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 18l6-6-6-6" />
  </svg>
)

const ChevronsLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
  </svg>
)

const ChevronsRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17l5-5-5-5M6 17l5-5-5-5" />
  </svg>
)

export const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onChange,
  siblingCount = 1,
  showFirstLast = true,
  className,
  ...props
}) => {
  const pages = buildPages(page, totalPages, siblingCount)

  const goTo = (p: number) => {
    if (p < 1 || p > totalPages || p === page) return
    onChange(p)
  }

  return (
    <nav
      aria-label="Pagination"
      className={[styles.nav, className ?? ''].filter(Boolean).join(' ')}
      {...props}
    >
      <ul className={styles.list}>
        {showFirstLast && (
          <li>
            <button
              className={[styles.btn, page === 1 ? styles.disabled : ''].filter(Boolean).join(' ')}
              onClick={() => goTo(1)}
              disabled={page === 1}
              aria-label="First page"
            >
              <ChevronsLeft />
            </button>
          </li>
        )}
        <li>
          <button
            className={[styles.btn, page === 1 ? styles.disabled : ''].filter(Boolean).join(' ')}
            onClick={() => goTo(page - 1)}
            disabled={page === 1}
            aria-label="Previous page"
          >
            <ChevronLeft />
          </button>
        </li>

        {pages.map((p, i) =>
          p === '...' ? (
            <li key={`dots-${i}`}>
              <span className={styles.dots}>…</span>
            </li>
          ) : (
            <li key={p}>
              <button
                className={[styles.btn, p === page ? styles.active : ''].filter(Boolean).join(' ')}
                onClick={() => goTo(p)}
                aria-label={`Page ${p}`}
                aria-current={p === page ? 'page' : undefined}
              >
                {p}
              </button>
            </li>
          )
        )}

        <li>
          <button
            className={[styles.btn, page === totalPages ? styles.disabled : ''].filter(Boolean).join(' ')}
            onClick={() => goTo(page + 1)}
            disabled={page === totalPages}
            aria-label="Next page"
          >
            <ChevronRight />
          </button>
        </li>
        {showFirstLast && (
          <li>
            <button
              className={[styles.btn, page === totalPages ? styles.disabled : ''].filter(Boolean).join(' ')}
              onClick={() => goTo(totalPages)}
              disabled={page === totalPages}
              aria-label="Last page"
            >
              <ChevronsRight />
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}
