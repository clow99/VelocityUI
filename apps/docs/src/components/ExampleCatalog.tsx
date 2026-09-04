'use client'
import { useState } from 'react'
import { pageExamples } from '@/lib/navigation'
import { ExampleCard } from './ExampleCard'
import { Icon } from './Icon'
export function ExampleCatalog() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const pages = pageExamples
    .flatMap((c) => c.pages.map((p) => ({ ...p, category: c.label })))
    .filter(
      (p) =>
        (category === 'All' || category === p.category) &&
        (p.name + ' ' + p.category).toLowerCase().includes(query.trim().toLowerCase()),
    )
  return (
    <>
      <div className="catalog-controls">
        <label className="search-field">
          <Icon name="search" />
          <input
            aria-label="Search examples"
            type="search"
            placeholder="Find your next starting point…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <div className="filter-options" role="group" aria-label="Example category">
          {['All', ...pageExamples.map((c) => c.label)].map((c) => (
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
      <p role="status" className="result-count">
        {pages.length} example{pages.length === 1 ? '' : 's'}
      </p>
      <div className="examples-grid">
        {pages.map((p) => (
          <ExampleCard key={p.slug} {...p} />
        ))}
      </div>
      {!pages.length && (
        <div className="catalog-empty">
          <h2>No matching examples</h2>
          <p>Try another search or browse all categories.</p>
          <button
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
