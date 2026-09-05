'use client'

import Link from 'next/link'
import { useEffect, useId, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { examples, matchesExample, type Example } from '@/lib/examples'
import { pageExamples } from '@/lib/navigation'
import { Icon } from '@/components/Icon'
import styles from './ExampleSwitcher.module.css'

export function ExampleSwitcher({ current }: { current: Example }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const input = useRef<HTMLInputElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const originalOverflow = useRef<string | null>(null)
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const id = useId()
  const pathname = usePathname()
  const previousPathname = useRef(pathname)
  const results = examples.filter((example) => matchesExample(example, query))

  function restoreScroll() {
    if (originalOverflow.current !== null) {
      document.body.style.overflow = originalOverflow.current
      originalOverflow.current = null
    }
  }
  function show() {
    setQuery('')
    dialog.current?.showModal()
    originalOverflow.current = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    setOpen(true)
    input.current?.focus({ preventScroll: true })
  }
  function close() {
    dialog.current?.close()
  }

  useEffect(() => {
    if (pathname !== previousPathname.current) close()
    previousPathname.current = pathname
  }, [pathname])
  useEffect(() => () => restoreScroll(), [])

  return (
    <div className={styles.root}>
      <button
        ref={trigger}
        className={styles.trigger}
        type="button"
        onClick={show}
        aria-label={`Choose example, current: ${current.name}`}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={id}
      >
        <img src={current.preview} width={42} height={30} alt="" />
        <span>
          <small>{current.category}</small>
          <strong>{current.name}</strong>
        </span>
        <Icon name="chevron" size={14} style={{ transform: 'rotate(90deg)' }} />
      </button>
      <dialog
        id={id}
        ref={dialog}
        className={styles.dialog}
        aria-labelledby={`${id}-title`}
        aria-modal="true"
        onClose={() => {
          setOpen(false)
          restoreScroll()
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close()
        }}
        onKeyDown={(event) => {
          if (event.key === 'Tab') {
            const controls = Array.from(
              dialog.current?.querySelectorAll<HTMLElement>(
                'input, button, a[href]',
              ) ?? [],
            )
            const first = controls[0],
              last = controls[controls.length - 1]
            if (event.shiftKey && document.activeElement === first) {
              event.preventDefault()
              last?.focus()
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault()
              first?.focus()
            }
          }
          if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return
          const links = Array.from(
            dialog.current?.querySelectorAll<HTMLAnchorElement>(
              'a[data-example]',
            ) ?? [],
          )
          if (!links.length) return
          event.preventDefault()
          const index = links.indexOf(
            document.activeElement as HTMLAnchorElement,
          )
          const next =
            index === -1
              ? event.key === 'ArrowDown'
                ? 0
                : links.length - 1
              : (index + (event.key === 'ArrowDown' ? 1 : -1) + links.length) %
                links.length
          links[next].focus({ preventScroll: true })
          links[next].scrollIntoView({ block: 'nearest' })
        }}
      >
        <div className={styles.inner}>
          <div className={styles.heading}>
            <div>
              <h2 id={`${id}-title`}>Explore the examples</h2>
              <p>A different starting point, one click away.</p>
            </div>
            <button
              type="button"
              aria-label="Close example picker"
              onClick={close}
            >
              <Icon name="close" size={18} />
            </button>
          </div>
          <div className={styles.search}>
            <Icon name="search" size={19} />
            <input
              ref={input}
              type="search"
              aria-label="Find an example"
              placeholder="Search pages, features, or categories…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && results[0]) {
                  event.preventDefault()
                  dialog.current
                    ?.querySelector<HTMLAnchorElement>('a[data-example]')
                    ?.click()
                }
              }}
            />
            {query && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => {
                  setQuery('')
                  input.current?.focus()
                }}
              >
                <Icon name="close" size={15} />
              </button>
            )}
          </div>
          <div className={styles.list}>
            <p role="status" className="sr-only">
              {results.length} examples found
            </p>
            {pageExamples.map((group) => {
              const entries = results.filter(
                (example) => example.category === group.label,
              )
              if (!entries.length) return null
              return (
                <section key={group.label} aria-label={group.label}>
                  <h3>
                    {group.label}
                    <span>{entries.length}</span>
                  </h3>
                  <ul>
                    {entries.map((example) => (
                      <li key={example.slug}>
                        <Link
                          href={example.href}
                          data-example={example.slug}
                          onClick={close}
                          className={styles.item}
                          aria-current={
                            example.slug === current.slug ? 'page' : undefined
                          }
                        >
                          <img
                            src={example.preview}
                            alt=""
                            width={64}
                            height={44}
                            loading="lazy"
                          />
                          <span>
                            <strong>{example.name}</strong>
                            <small>{example.features.join(' · ')}</small>
                          </span>
                          <Icon
                            name={
                              example.slug === current.slug ? 'check' : 'arrow'
                            }
                            size={16}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )
            })}
            {!results.length && (
              <div className={styles.empty}>
                <Icon name="search" size={26} />
                <h3>No matching examples</h3>
                <p>Try “chat”, “charts”, or “forms”.</p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery('')
                    input.current?.focus()
                  }}
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
          <div className={styles.footer}>
            <span>
              <kbd>↑</kbd> <kbd>↓</kbd> Browse <kbd>↵</kbd> Open
            </span>
            <Link href="/examples" onClick={close}>
              View collection <Icon name="grid" size={14} />
            </Link>
          </div>
        </div>
      </dialog>
    </div>
  )
}
