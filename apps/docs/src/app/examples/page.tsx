import { ExampleCatalog } from '@/components/ExampleCatalog'
import { Footer } from '@/components/Footer'
import { Suspense } from 'react'
import Link from 'next/link'
import { ExampleCard } from '@/components/ExampleCard'
import { Icon } from '@/components/Icon'
import { examples } from '@/lib/examples'
import { pageExamples } from '@/lib/navigation'
import styles from '@/components/examples/ExampleGallery.module.css'
export const metadata = {
  title: 'Examples — VelocityUI',
  description:
    'Explore complete React layouts for dashboards, authentication, forms, and chat.',
}
export default function ExamplesPage() {
  return (
    <>
      <main id="main-content" className={`page-container ${styles.page}`}>
        <header className={styles.hero}>
          <div>
            <span className={styles.eyebrow}>
              <span className="status-dot" /> The example collection
            </span>
            <h1>
              Skip the blank canvas.
              <br />
              <span>Start with possibility.</span>
            </h1>
            <p>
              From the first sign-in to the busiest workspace. Explore complete
              interfaces, try the details, and make them your own.
            </p>
          </div>
          <div className={styles.heroAside}>
            <div className={styles.stats}>
              <span>
                <strong>{examples.length}</strong>page examples
              </span>
              <span>
                <strong>{pageExamples.length}</strong>categories to explore
              </span>
            </div>
            <a href="#example-library">
              Browse the collection{' '}
              <Icon
                name="arrow"
                size={16}
                style={{ transform: 'rotate(90deg)' }}
              />
            </a>
          </div>
        </header>
        <section className={styles.featured} aria-labelledby="featured-title">
          <div className={styles.sectionHeading}>
            <h2 id="featured-title">A few good places to start</h2>
            <span>Made with the same components you’ll use.</span>
          </div>
          <div className={styles.featuredGrid}>
            <ExampleCard
              slug="dashboard"
              name="Everything in view."
              category="Dashboard"
              featured
            />
            <ExampleCard
              slug="team-chat"
              name="Bring the conversation together."
              category="Chat"
              featured
            />
          </div>
        </section>
        <Suspense
          fallback={<p className={styles.library}>Loading the collection…</p>}
        >
          <ExampleCatalog />
        </Suspense>
        <div className={styles.endnote}>
          <div>
            <Icon name="layers" size={24} />
            <span>
              <strong>Small pieces. Complete experiences.</strong>
              <span>
                Every example uses the same VelocityUI components available in
                the library.
              </span>
            </span>
          </div>
          <Link href="/docs">
            Explore the components <Icon name="arrow" size={16} />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
