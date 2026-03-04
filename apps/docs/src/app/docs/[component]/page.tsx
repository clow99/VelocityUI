import { notFound } from 'next/navigation'
import { componentDocs } from '@/lib/componentDocs'
import { PropsTable } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { ButtonPreview } from '@/components/docs/previews/ButtonPreview'
import { InputPreview } from '@/components/docs/previews/InputPreview'
import { TitlePreview } from '@/components/docs/previews/TitlePreview'
import { BadgePreview } from '@/components/docs/previews/BadgePreview'
import { CardPreview } from '@/components/docs/previews/CardPreview'
import { TextareaPreview } from '@/components/docs/previews/TextareaPreview'
import { SelectPreview } from '@/components/docs/previews/SelectPreview'
import { CheckboxPreview } from '@/components/docs/previews/CheckboxPreview'
import { RadioGroupPreview } from '@/components/docs/previews/RadioGroupPreview'
import { SwitchPreview } from '@/components/docs/previews/SwitchPreview'
import { AlertPreview } from '@/components/docs/previews/AlertPreview'
import { DialogPreview } from '@/components/docs/previews/DialogPreview'
import { TabsPreview } from '@/components/docs/previews/TabsPreview'
import { AccordionPreview } from '@/components/docs/previews/AccordionPreview'
import { TooltipPreview } from '@/components/docs/previews/TooltipPreview'
import { DividerPreview } from '@/components/docs/previews/DividerPreview'
import { SpinnerPreview } from '@/components/docs/previews/SpinnerPreview'
import { SkeletonPreview } from '@/components/docs/previews/SkeletonPreview'
import { ProgressPreview } from '@/components/docs/previews/ProgressPreview'
import { ToastPreview } from '@/components/docs/previews/ToastPreview'
import { AvatarPreview } from '@/components/docs/previews/AvatarPreview'
import { TagPreview } from '@/components/docs/previews/TagPreview'
import { EmptyStatePreview } from '@/components/docs/previews/EmptyStatePreview'
import { BreadcrumbPreview } from '@/components/docs/previews/BreadcrumbPreview'
import { PaginationPreview } from '@/components/docs/previews/PaginationPreview'
import { StepperPreview } from '@/components/docs/previews/StepperPreview'
import { PopoverPreview } from '@/components/docs/previews/PopoverPreview'
import { DropdownPreview } from '@/components/docs/previews/DropdownPreview'
import { SliderPreview } from '@/components/docs/previews/SliderPreview'
import { NumberInputPreview } from '@/components/docs/previews/NumberInputPreview'
import { FileUploadPreview } from '@/components/docs/previews/FileUploadPreview'
import { TablePreview } from '@/components/docs/previews/TablePreview'

const NPM_PACKAGE = '@clow99/velocityui'
const GITEA_PACKAGE = 'https://git.cameronlow.com/cam/VelocityUI/packages'

const formatSnippet = (code: string) => code.replaceAll(NPM_PACKAGE, GITEA_PACKAGE)

const previewMap: Record<string, React.ComponentType> = {
  button: ButtonPreview,
  input: InputPreview,
  title: TitlePreview,
  badge: BadgePreview,
  card: CardPreview,
  textarea: TextareaPreview,
  select: SelectPreview,
  checkbox: CheckboxPreview,
  radiogroup: RadioGroupPreview,
  switch: SwitchPreview,
  alert: AlertPreview,
  dialog: DialogPreview,
  tabs: TabsPreview,
  accordion: AccordionPreview,
  tooltip: TooltipPreview,
  divider: DividerPreview,
  spinner: SpinnerPreview,
  skeleton: SkeletonPreview,
  progress: ProgressPreview,
  toast: ToastPreview,
  avatar: AvatarPreview,
  tag: TagPreview,
  emptystate: EmptyStatePreview,
  breadcrumb: BreadcrumbPreview,
  pagination: PaginationPreview,
  stepper: StepperPreview,
  popover: PopoverPreview,
  dropdown: DropdownPreview,
  slider: SliderPreview,
  numberinput: NumberInputPreview,
  fileupload: FileUploadPreview,
  table: TablePreview,
}

export function generateStaticParams() {
  return Object.keys(componentDocs).map((slug) => ({ component: slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ component: string }> }) {
  const { component } = await params
  const doc = componentDocs[component]
  if (!doc) return {}
  return {
    title: `${doc.name} — VelocityUI`,
    description: doc.description,
  }
}

export default async function ComponentPage({ params }: { params: Promise<{ component: string }> }) {
  const { component } = await params
  const doc = componentDocs[component]
  if (!doc) notFound()

  const Preview = previewMap[component]

  return (
    <article className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-vui-text">{doc.name}</h1>
        <p className="mt-3 text-lg text-vui-text-subtle leading-relaxed">{doc.description}</p>
      </div>

      <section className="mb-10">
        <h2 className="mb-3 text-lg font-semibold text-vui-text">Import</h2>
        <CodeBlock code={formatSnippet(doc.importLine)} language="tsx" />
      </section>

      {Preview && (
        <section className="mb-10">
          <h2 className="mb-3 text-lg font-semibold text-vui-text">Preview</h2>
          <div className="rounded-xl border border-vui-border bg-vui-surface-muted p-8">
            <Preview />
          </div>
        </section>
      )}

      <section className="mb-10">
        <h2 className="mb-3 text-lg font-semibold text-vui-text">Props</h2>
        <PropsTable rows={doc.props} />
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-lg font-semibold text-vui-text">Examples</h2>
        <div className="flex flex-col gap-8">
          {doc.examples.map((example) => (
            <div key={example.title}>
              <h3 className="mb-1 text-base font-semibold text-vui-text">{example.title}</h3>
              {example.description && (
                <p className="mb-3 text-sm text-vui-text-subtle">{example.description}</p>
              )}
              <CodeBlock code={formatSnippet(example.code)} language="tsx" />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-lg font-semibold text-vui-text">Theming</h2>
        <p className="mb-4 text-sm text-vui-text-subtle leading-relaxed">
          Apply a named theme class to{' '}
          <code className="rounded bg-vui-surface-muted px-1.5 py-0.5 font-mono text-xs text-vui-primary">
            {'<body>'}
          </code>{' '}
          or any parent element. All VelocityUI components inside that element will automatically
          adopt its colors, shadows, and effects. Combine with a density modifier for complete control:
        </p>
        <CodeBlock
          language="css"
          code={`/* Pick any named theme */
<body class="vui-theme-ocean">

/* Add a density modifier (optional) */
<body class="vui-theme-midnight vui-density-compact">
<body class="vui-theme-sunset vui-density-spacious">

/* Available themes */
/* default  midnight  ocean  sunset */
/* construction  glass  soft  high-contrast  monochrome-red */

/* Available densities */
/* vui-density-compact  vui-density-comfortable  vui-density-spacious */`}
        />
      </section>
    </article>
  )
}
