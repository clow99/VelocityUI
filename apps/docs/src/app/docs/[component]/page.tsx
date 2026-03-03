import { notFound } from 'next/navigation'
import { componentDocs } from '@/lib/componentDocs'
import { PropsTable } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { ButtonPreview } from '@/components/docs/previews/ButtonPreview'
import { InputPreview } from '@/components/docs/previews/InputPreview'
import { TitlePreview } from '@/components/docs/previews/TitlePreview'
import { BadgePreview } from '@/components/docs/previews/BadgePreview'
import { CardPreview } from '@/components/docs/previews/CardPreview'

const previewMap: Record<string, React.ComponentType> = {
  button: ButtonPreview,
  input: InputPreview,
  title: TitlePreview,
  badge: BadgePreview,
  card: CardPreview,
}

export function generateStaticParams() {
  return Object.keys(componentDocs).map((slug) => ({ component: slug }))
}

export function generateMetadata({ params }: { params: { component: string } }) {
  const doc = componentDocs[params.component]
  if (!doc) return {}
  return {
    title: `${doc.name} — VelocityUI`,
    description: doc.description,
  }
}

export default function ComponentPage({ params }: { params: { component: string } }) {
  const doc = componentDocs[params.component]
  if (!doc) notFound()

  const Preview = previewMap[params.component]

  return (
    <article className="max-w-3xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">{doc.name}</h1>
        <p className="mt-3 text-lg text-gray-500 leading-relaxed">{doc.description}</p>
      </div>

      {/* Import */}
      <section className="mb-10">
        <h2 className="mb-3 text-lg font-semibold text-gray-900">Import</h2>
        <CodeBlock code={doc.importLine} language="tsx" />
      </section>

      {/* Live preview */}
      {Preview && (
        <section className="mb-10">
          <h2 className="mb-3 text-lg font-semibold text-gray-900">Preview</h2>
          <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-8">
            <Preview />
          </div>
        </section>
      )}

      {/* Props */}
      <section className="mb-10">
        <h2 className="mb-3 text-lg font-semibold text-gray-900">Props</h2>
        <PropsTable rows={doc.props} />
      </section>

      {/* Examples */}
      <section className="mb-10">
        <h2 className="mb-3 text-lg font-semibold text-gray-900">Examples</h2>
        <div className="flex flex-col gap-8">
          {doc.examples.map((example) => (
            <div key={example.title}>
              <h3 className="mb-1 text-base font-semibold text-gray-800">{example.title}</h3>
              {example.description && (
                <p className="mb-3 text-sm text-gray-500">{example.description}</p>
              )}
              <CodeBlock code={example.code} language="tsx" />
            </div>
          ))}
        </div>
      </section>

      {/* CSS Variables */}
      <section className="mb-10">
        <h2 className="mb-3 text-lg font-semibold text-gray-900">Theming</h2>
        <p className="mb-4 text-sm text-gray-500 leading-relaxed">
          VelocityUI uses CSS custom properties for all colors and tokens. Override them on{' '}
          <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs text-violet-700">:root</code>{' '}
          or any parent element:
        </p>
        <CodeBlock
          language="css"
          code={`:root {
  --vui-color-primary: #6366f1;
  --vui-color-primary-hover: #4f46e5;
  --vui-color-secondary: #f1f5f9;
  --vui-color-danger: #ef4444;
}`}
        />
      </section>
    </article>
  )
}
