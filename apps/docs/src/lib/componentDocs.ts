import type { PropRow } from '@/components/docs/PropsTable'

export interface ComponentExample {
  title: string
  description?: string
  code: string
}

export interface ComponentDoc {
  name: string
  slug: string
  description: string
  importLine: string
  props: PropRow[]
  examples: ComponentExample[]
}

export const componentDocs: Record<string, ComponentDoc> = {
  button: {
    name: 'Button',
    slug: 'button',
    description:
      'An accessible button element that supports multiple visual variants, sizes, a loading state with spinner, and left/right icon slots. It forwards refs and spreads all native HTML button attributes.',
    importLine: "import { Button } from 'velocityui'",
    props: [
      {
        name: 'variant',
        type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'",
        default: "'primary'",
        description: 'Visual style of the button.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: 'Controls padding and font size.',
      },
      {
        name: 'loading',
        type: 'boolean',
        default: 'false',
        description: 'Replaces content with a spinner and disables interaction.',
      },
      {
        name: 'fullWidth',
        type: 'boolean',
        default: 'false',
        description: 'Makes the button fill its container width.',
      },
      {
        name: 'leftIcon',
        type: 'ReactNode',
        description: 'Icon rendered to the left of the label.',
      },
      {
        name: 'rightIcon',
        type: 'ReactNode',
        description: 'Icon rendered to the right of the label.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Native disabled attribute, also reduces opacity.',
      },
    ],
    examples: [
      {
        title: 'Variants',
        description: 'Five visual styles to match any context.',
        code: `import { Button } from 'velocityui'

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  )
}`,
      },
      {
        title: 'Sizes',
        code: `import { Button } from 'velocityui'

export default function Example() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}`,
      },
      {
        title: 'Loading state',
        code: `import { Button } from 'velocityui'

export default function Example() {
  return <Button loading>Saving...</Button>
}`,
      },
      {
        title: 'With icons',
        code: `import { Button } from 'velocityui'

const ArrowIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

export default function Example() {
  return (
    <Button rightIcon={<ArrowIcon />}>Continue</Button>
  )
}`,
      },
    ],
  },

  input: {
    name: 'Input',
    slug: 'input',
    description:
      'A fully accessible text input with an optional label, hint text, error message, icon slots, and multiple sizes. Forwards refs and spreads all native input attributes.',
    importLine: "import { Input } from 'velocityui'",
    props: [
      {
        name: 'label',
        type: 'string',
        description: 'Label rendered above the input.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: 'Controls padding and font size.',
      },
      {
        name: 'error',
        type: 'string',
        description: 'Error message displayed below the input. Sets aria-invalid.',
      },
      {
        name: 'hint',
        type: 'string',
        description: 'Helper text shown when there is no error.',
      },
      {
        name: 'leftIcon',
        type: 'ReactNode',
        description: 'Icon rendered inside the input on the left.',
      },
      {
        name: 'rightIcon',
        type: 'ReactNode',
        description: 'Icon rendered inside the input on the right.',
      },
      {
        name: 'required',
        type: 'boolean',
        default: 'false',
        description: 'Marks the field as required with a visual asterisk.',
      },
      {
        name: 'fullWidth',
        type: 'boolean',
        default: 'false',
        description: 'Makes the wrapper fill its container.',
      },
    ],
    examples: [
      {
        title: 'Basic',
        code: `import { Input } from 'velocityui'

export default function Example() {
  return <Input label="Email address" placeholder="you@example.com" type="email" />
}`,
      },
      {
        title: 'With error',
        code: `import { Input } from 'velocityui'

export default function Example() {
  return (
    <Input
      label="Password"
      type="password"
      error="Password must be at least 8 characters."
      defaultValue="short"
    />
  )
}`,
      },
      {
        title: 'With hint',
        code: `import { Input } from 'velocityui'

export default function Example() {
  return (
    <Input
      label="Username"
      hint="Only letters, numbers, and underscores."
      placeholder="john_doe"
    />
  )
}`,
      },
      {
        title: 'Sizes',
        code: `import { Input } from 'velocityui'

export default function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
  )
}`,
      },
    ],
  },

  title: {
    name: 'Title',
    slug: 'title',
    description:
      'A polymorphic heading component that renders any h1–h6 element with a visual size scale independent of semantic level, multiple font weights, text alignment, and color variants including a gradient.',
    importLine: "import { Title } from 'velocityui'",
    props: [
      {
        name: 'level',
        type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",
        default: "'h1'",
        description: 'Semantic HTML heading element rendered.',
      },
      {
        name: 'size',
        type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",
        description: 'Visual size. Defaults to match the level (h1→xxl, h2→xl, etc.).',
      },
      {
        name: 'weight',
        type: "'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'",
        default: "'bold'",
        description: 'Font weight of the heading.',
      },
      {
        name: 'align',
        type: "'left' | 'center' | 'right'",
        default: "'left'",
        description: 'Text alignment.',
      },
      {
        name: 'color',
        type: "'default' | 'muted' | 'primary' | 'gradient'",
        default: "'default'",
        description: "Color variant. 'gradient' applies a linear gradient via background-clip.",
      },
    ],
    examples: [
      {
        title: 'Heading levels',
        code: `import { Title } from 'velocityui'

export default function Example() {
  return (
    <div>
      <Title level="h1">Heading 1</Title>
      <Title level="h2">Heading 2</Title>
      <Title level="h3">Heading 3</Title>
    </div>
  )
}`,
      },
      {
        title: 'Color variants',
        code: `import { Title } from 'velocityui'

export default function Example() {
  return (
    <div>
      <Title level="h2" color="default">Default</Title>
      <Title level="h2" color="muted">Muted</Title>
      <Title level="h2" color="primary">Primary</Title>
      <Title level="h2" color="gradient">Gradient</Title>
    </div>
  )
}`,
      },
      {
        title: 'Size independent of level',
        code: `import { Title } from 'velocityui'

// Render an h2 but display it at xs (small body-text size)
export default function Example() {
  return <Title level="h2" size="xs" weight="semibold">Section label</Title>
}`,
      },
    ],
  },

  badge: {
    name: 'Badge',
    slug: 'badge',
    description:
      'Inline status labels with semantic color variants, an optional dot indicator, left icon, and three sizes. Built as a <span> for inline use.',
    importLine: "import { Badge } from 'velocityui'",
    props: [
      {
        name: 'variant',
        type: "'default' | 'info' | 'success' | 'warning' | 'danger' | 'primary'",
        default: "'default'",
        description: 'Color scheme of the badge.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: 'Padding and font size.',
      },
      {
        name: 'dot',
        type: 'boolean',
        default: 'false',
        description: 'Shows a small colored circle before the label.',
      },
      {
        name: 'leftIcon',
        type: 'ReactNode',
        description: 'Icon rendered to the left of the text (ignored when dot is true).',
      },
    ],
    examples: [
      {
        title: 'Variants',
        code: `import { Badge } from 'velocityui'

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="primary">Primary</Badge>
    </div>
  )
}`,
      },
      {
        title: 'With dot',
        code: `import { Badge } from 'velocityui'

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Badge variant="success" dot>Active</Badge>
      <Badge variant="warning" dot>Pending</Badge>
      <Badge variant="danger" dot>Offline</Badge>
    </div>
  )
}`,
      },
      {
        title: 'Sizes',
        code: `import { Badge } from 'velocityui'

export default function Example() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <Badge size="sm" variant="info">Small</Badge>
      <Badge size="md" variant="info">Medium</Badge>
      <Badge size="lg" variant="info">Large</Badge>
    </div>
  )
}`,
      },
    ],
  },

  card: {
    name: 'Card',
    slug: 'card',
    description:
      'A flexible container component with compound sub-components: Card.Header, Card.Body, and Card.Footer. Supports four visual variants and an optional hover animation.',
    importLine: "import { Card } from 'velocityui'",
    props: [
      {
        name: 'variant',
        type: "'bordered' | 'shadow' | 'elevated' | 'ghost'",
        default: "'bordered'",
        description: 'Visual treatment of the card container.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: 'Controls the padding inside Header, Body, and Footer.',
      },
      {
        name: 'hoverable',
        type: 'boolean',
        default: 'false',
        description: 'Adds a lift-and-shadow hover effect.',
      },
    ],
    examples: [
      {
        title: 'Compound usage',
        code: `import { Card, Button } from 'velocityui'

export default function Example() {
  return (
    <Card variant="bordered">
      <Card.Header>
        <h3>Card Title</h3>
        <p>Subtitle or metadata</p>
      </Card.Header>
      <Card.Body>
        Body content goes here. Accepts any children.
      </Card.Body>
      <Card.Footer>
        <Button size="sm">Confirm</Button>
        <Button size="sm" variant="ghost">Cancel</Button>
      </Card.Footer>
    </Card>
  )
}`,
      },
      {
        title: 'Variants',
        code: `import { Card } from 'velocityui'

export default function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Card variant="bordered"><Card.Body>Bordered</Card.Body></Card>
      <Card variant="shadow"><Card.Body>Shadow</Card.Body></Card>
      <Card variant="elevated"><Card.Body>Elevated</Card.Body></Card>
    </div>
  )
}`,
      },
      {
        title: 'Hoverable',
        code: `import { Card } from 'velocityui'

export default function Example() {
  return (
    <Card hoverable variant="shadow">
      <Card.Body>Hover over me!</Card.Body>
    </Card>
  )
}`,
      },
    ],
  },
}
