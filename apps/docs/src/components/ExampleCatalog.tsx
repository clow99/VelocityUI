'use client'
import { useSearchParams } from 'next/navigation'
import { examples, matchesExample } from '@/lib/examples'
import { pageExamples } from '@/lib/navigation'
import { ExampleCard } from './ExampleCard'
import { Icon } from './Icon'
import styles from './examples/ExampleGallery.module.css'

export function ExampleCatalog() {
  const params = useSearchParams()
  const query = params.get('q') || ''
  const category = pageExamples.some(
    (group) => group.label === params.get('category'),
  )
    ? params.get('category')!
    : 'All'
  const pages = examples.filter(
    (page) =>
      (category === 'All' || category === page.category) &&
      matchesExample(page, query),
  )
  function update(nextQuery: string, nextCategory: string) {
    const next = new URLSearchParams()
    if (nextQuery) next.set('q', nextQuery)
    if (nextCategory !== 'All') next.set('category', nextCategory)
    window.history.replaceState(
      null,
      '',
      `/examples${next.size ? `?${next}` : ''}#example-library`,
    )
  }
  return (
    <section
      id="example-library"
      className={styles.library}
      aria-labelledby="example-library-title"
    >
      <div className={styles.libraryHeading}>
        <div>
          <span className={styles.eyebrow}>Find your next starting point</span>
          <h2 id="example-library-title">The collection</h2>
        </div>
        <label className={styles.search}>
          <Icon name="search" size={18} />
          <input
            aria-label="Search examples"
            type="search"
            placeholder="Search examples, features…"
            value={query}
            onChange={(e) => update(e.target.value, category)}
          />
          {query && (
            <button
              type="button"
              aria-label="Clear example search"
              onClick={() => update('', category)}
            >
              <Icon name="close" size={15} />
            </button>
          )}
        </label>
      </div>
      <div
        className={styles.filters}
        role="group"
        aria-label="Example category"
      >
        {['All', ...pageExamples.map((group) => group.label)].map((label) => (
          <button
            key={label}
            type="button"
            aria-pressed={category === label}
            onClick={() => update(query, label)}
          >
            {label}
            <span>
              {label === 'All'
                ? examples.length
                : examples.filter((page) => page.category === label).length}
            </span>
          </button>
        ))}
      </div>
      <div className={styles.results}>
        <p role="status">
          {pages.length} {pages.length === 1 ? 'example' : 'examples'}
          {category !== 'All' ? ` in ${category}` : ' to make your own'}
          {query ? ` matching “${query}”` : ''}
        </p>
        {(query || category !== 'All') && (
          <button type="button" onClick={() => update('', 'All')}>
            Clear filters <Icon name="close" size={13} />
          </button>
        )}
      </div>
      <div className={styles.grid}>
        {pages.map((page) => (
          <ExampleCard key={page.slug} {...page} />
        ))}
      </div>
      {!pages.length && (
        <div className={styles.empty}>
          <span>
            <Icon name="search" size={24} />
          </span>
          <h3>No examples found</h3>
          <p>
            Try a feature like “charts” or “validation”, or explore the full
            collection.
          </p>
          <button
            type="button"
            className="button-link secondary"
            onClick={() => update('', 'All')}
          >
            Show all examples <Icon name="arrow" size={16} />
          </button>
        </div>
      )}
    </section>
  )
}
