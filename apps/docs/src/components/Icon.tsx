import type { CSSProperties } from 'react'

const paths = {
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  external: 'M7 17 17 7M7 7h10v10',
  check: 'm5 12 4 4L19 6',
  copy: 'M9 9h11v11H9zM5 15H3V3h12v2',
  search: 'm21 21-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0',
  grid: 'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z',
  code: 'm8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18',
  layers: 'm12 3 10 5-10 5L2 8l10-5ZM2 12l10 5 10-5M2 16l10 5 10-5',
  palette:
    'M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 0-4h-1a2 2 0 0 1 0-4h4a5 5 0 0 0 0-10h-4ZM7 8h.01M11 6h.01M16 7h.01M5 12h.01',
  menu: 'M4 6h16M4 12h16M4 18h16',
  close: 'm6 6 12 12M6 18 18 6',
  chevron: 'm9 5 7 7-7 7',
  sun: 'M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
  bolt: 'm13 2-9 12h7l-1 8 10-12h-7l1-8Z',
  book: 'M12 6v15M3 3h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5v16h-5a4 4 0 0 0-4 2 4 4 0 0 0-4-2H3V3Z',
  shield: 'm12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Zm-4 9 3 3 5-6',
  chat: 'M21 11a8 8 0 0 1-8 8H7l-5 3V11a9 9 0 0 1 19 0ZM7 10h10M7 14h6',
  plus: 'M12 5v14M5 12h14',
} as const

export function Icon({
  name,
  size = 18,
  className,
  style,
}: {
  name: keyof typeof paths
  size?: number
  className?: string
  style?: CSSProperties
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <path d={paths[name]} />
    </svg>
  )
}

export function BrandMark() {
  return (
    <img
      src="/logo.svg?v=3"
      className="brand-mark"
      width={36}
      height={36}
      alt=""
      aria-hidden="true"
      draggable={false}
    />
  )
}
