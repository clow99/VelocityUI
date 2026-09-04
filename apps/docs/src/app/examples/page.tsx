import { ExampleCatalog } from '@/components/ExampleCatalog'
import { Footer } from '@/components/Footer'
export const metadata = {
  title: 'Examples — VelocityUI',
  description: 'Explore complete React layouts for dashboards, authentication, forms, and chat.',
}
export default function ExamplesPage() {
  return (
    <>
      <main id="main-content" className="page-container examples-index">
        <div className="page-heading">
          <span className="eyebrow">A little inspiration. A lot of possibility.</span>
          <h1>Skip the blank canvas.</h1>
          <p>
            Complete interfaces, built with VelocityUI. Explore the interactions, try a different
            theme, and find your next starting point.
          </p>
        </div>
        <ExampleCatalog />
      </main>
      <Footer />
    </>
  )
}
