import { ComponentCatalog } from '@/components/ComponentCatalog'
import { componentDocs } from '@/lib/componentDocs'
export const metadata = {
  title: 'Components — VelocityUI',
  description:
    'Explore the full VelocityUI component library. Find live previews, typed APIs, and ready-to-use examples.',
}
export default function ComponentsPage() {
  return (
    <article className="catalog-page">
      <div className="page-heading">
        <span className="eyebrow">The component library</span>
        <h1>Your building blocks.</h1>
        <p>
          From the first button to the finishing touch. Find the right piece for your next
          interface.
        </p>
      </div>
      <ComponentCatalog
        descriptions={Object.fromEntries(
          Object.entries(componentDocs).map(([slug, doc]) => [slug, doc.description]),
        )}
      />
    </article>
  )
}
