'use client'
import Link from 'next/link'
import { useState } from 'react'
import { componentCategories } from '@/lib/navigation'
import { Icon } from './Icon'

const categoryIcons = {
  Forms: 'code',
  Display: 'grid',
  Layout: 'layers',
  Feedback: 'bolt',
  Navigation: 'arrow',
  Overlays: 'layers',
  Chat: 'chat',
} as const
export function ComponentCatalog({ descriptions }: { descriptions: Record<string, string> }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const results = componentCategories
    .flatMap((c) => c.items.map((i) => ({ ...i, category: c.label })))
    .filter(
      (i) =>
        (category === 'All' || category === i.category) &&
        (i.name + ' ' + descriptions[i.slug]).toLowerCase().includes(query.trim().toLowerCase()),
    )
  return (
    <>
      <div className="catalog-controls">
        <label className="search-field">
          <Icon name="search" />
          <input
            type="search"
            aria-label="Search components"
            placeholder="Search components…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <div className="filter-options" role="group" aria-label="Component category">
          {['All', ...componentCategories.map((c) => c.label)].map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <p className="result-count" role="status">
        {results.length} component{results.length === 1 ? '' : 's'}
        {category !== 'All' ? ' in ' + category.toLowerCase() : ''}
      </p>
      <div className="catalog-grid">
        {results.map((item) => (
          <Link href={'/docs/' + item.slug} className="catalog-card" key={item.slug}>
            <div className="catalog-card-top">
              <span className="catalog-icon">
                <Icon name={categoryIcons[item.category as keyof typeof categoryIcons]} size={21} />
              </span>
              <Icon name="external" size={16} />
            </div>
            <h2>{item.name}</h2>
            <p>{descriptions[item.slug]}</p>
            <span className="catalog-category">{item.category}</span>
          </Link>
        ))}
      </div>
      {!results.length && (
        <div className="catalog-empty">
          <Icon name="search" size={28} />
          <h2>No components found</h2>
          <p>Try a different name or category.</p>
          <button
            type="button"
            className="button-link secondary"
            onClick={() => {
              setQuery('')
              setCategory('All')
            }}
          >
            Reset filters
          </button>
        </div>
      )}
    </>
  )
}
