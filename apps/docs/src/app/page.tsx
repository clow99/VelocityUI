import Link from 'next/link'
import { ComponentPreviewGrid } from '@/components/landing/ComponentPreviewGrid'
import { FeatureGrid } from '@/components/landing/FeatureGrid'
import { InstallSnippet } from '@/components/landing/InstallSnippet'
import { WorkspacePreview } from '@/components/landing/WorkspacePreview'
import { ThemeShowcase } from '@/components/landing/ThemeShowcase'
import { ExamplesShowcase } from '@/components/landing/ExamplesShowcase'
import { Footer } from '@/components/Footer'
import { Icon } from '@/components/Icon'
import { docsComponents, pageExamples } from '@/lib/navigation'
import { THEMES } from '@/lib/themes'

export default function HomePage() {
  return (
    <>
      <main id="main-content" className="home-page">
        <section className="hero page-container">
          <div className="hero-copy">
            <Link href="/docs/introduction" className="release-note">
              <span className="status-dot" /> Independent by design. Open source by default.
              <Icon name="arrow" size={14} />
            </Link>
            <h1>
              Good interfaces.
              <br />
              Built at <span>velocity.</span>
            </h1>
            <p>
              React components with a considered point of view. Start with beautiful defaults,
              make the theme yours, and get straight to building.
            </p>
            <div className="hero-actions">
              <Link href="/docs" className="button-link">
                Explore components <Icon name="arrow" size={17} />
              </Link>
              <Link href="/examples" className="button-link secondary">
                View examples <Icon name="grid" size={16} />
              </Link>
            </div>
            <InstallSnippet />
            <div className="hero-meta">
              <span>
                <Icon name="check" size={13} /> React 18+
              </span>
              <span>
                <Icon name="check" size={13} /> TypeScript
              </span>
              <span>
                <Icon name="check" size={13} /> MIT licensed
              </span>
            </div>
            <a href="https://cameronlow.com" className="creator-link">A project by <strong>Cameron Low</strong><Icon name="external" size={13} /></a>
          </div>
          <WorkspacePreview />
        </section>
        <section className="library-strip">
          <div className="page-container">
            <p>
              A small dependency.
              <br />
              <strong>A big head start.</strong>
            </p>
            <div>
              <strong>{docsComponents.length}</strong>
              <span>Components</span>
            </div>
            <div>
              <strong>{THEMES.length}</strong>
              <span>Built-in themes</span>
            </div>
            <div>
              <strong>{pageExamples.flatMap((c) => c.pages).length}</strong>
              <span>Page examples</span>
            </div>
            <div>
              <strong>0</strong>
              <span>Extra runtime dependencies</span>
            </div>
          </div>
        </section>
        <section className="page-container home-section" id="components">
          <div className="section-heading">
            <div>
              <span className="eyebrow">The building blocks</span>
              <h2>Small details. Big difference.</h2>
              <p>Real components, ready to explore. Try the states, then take the code.</p>
            </div>
            <Link href="/docs" className="text-link">
              All {docsComponents.length} components <Icon name="arrow" size={17} />
            </Link>
          </div>
          <ComponentPreviewGrid />
        </section>
        <section className="page-container">
          <ThemeShowcase />
        </section>
        <section className="home-section features-section">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Built for the way you work</span>
                <h2>Less setup. More possibility.</h2>
              </div>
              <p>
                The essentials, thoughtfully put together.
                <br />
                So you can focus on what makes your product yours.
              </p>
            </div>
            <FeatureGrid />
          </div>
        </section>
        <section className="page-container home-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">From pieces to possibilities</span>
              <h2>A head start on your next screen.</h2>
              <p>Explore complete layouts built with the same components.</p>
            </div>
            <Link href="/examples" className="text-link">
              All examples <Icon name="arrow" size={17} />
            </Link>
          </div>
          <ExamplesShowcase />
        </section>
        <section className="page-container">
          <div className="closing-cta">
            <span className="eyebrow">Make something good.</span>
            <h2>Your next idea starts here.</h2>
            <p>One install. A whole new starting point.</p>
            <Link href="/docs/installation" className="button-link">
              Start building <Icon name="arrow" size={17} />
            </Link>
            <Link href="/docs/ai-guide" className="text-link">
              Building with AI? Grab the agent guide <Icon name="external" size={14} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
