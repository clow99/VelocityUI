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
      'Button with 5 variants, 3 sizes, a loading state with spinner, and left/right icon slots.',
    importLine: "import { Button } from '@velocityuikit/velocityui'",
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
        code: `import { Button } from '@velocityuikit/velocityui'

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
        code: `import { Button } from '@velocityuikit/velocityui'

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
        code: `import { Button } from '@velocityuikit/velocityui'

export default function Example() {
  return <Button loading>Saving...</Button>
}`,
      },
      {
        title: 'With icons',
        code: `import { Button } from '@velocityuikit/velocityui'

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
      'Text input with label, hint text, error message, icon slots, and built-in search-icon helpers.',
    importLine: "import { Input } from '@velocityuikit/velocityui'",
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
        name: 'search',
        type: 'boolean',
        default: 'false',
        description:
          'Renders a built-in search icon when no icon is provided in the configured searchIconPosition.',
      },
      {
        name: 'searchIcon',
        type: 'ReactNode',
        description:
          'Custom search icon node used when search behaviour is enabled (or standalone).',
      },
      {
        name: 'searchIconPosition',
        type: "'left' | 'right'",
        default: "'left'",
        description: 'Sets which side the search icon prefers to render on.',
      },
      {
        name: 'leftIconClassName',
        type: 'string',
        description: 'Optional className applied to the left icon wrapper for styling overrides.',
      },
      {
        name: 'rightIconClassName',
        type: 'string',
        description: 'Optional className applied to the right icon wrapper for styling overrides.',
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
        code: `import { Input } from '@velocityuikit/velocityui'

export default function Example() {
  return <Input label="Email address" placeholder="you@example.com" type="email" />
}`,
      },
      {
        title: 'With error',
        code: `import { Input } from '@velocityuikit/velocityui'

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
        code: `import { Input } from '@velocityuikit/velocityui'

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
        code: `import { Input } from '@velocityuikit/velocityui'

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
      {
        title: 'Search style inputs',
        code: `import { Input } from '@velocityuikit/velocityui'

const SearchIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

export default function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <Input search placeholder="Search users..." />
      <Input search searchIconPosition="right" placeholder="Search products..." />
      <Input
        searchIcon={<SearchIcon />}
        leftIconClassName="text-vui-primary"
        placeholder="Custom search icon"
      />
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
      'Heading component that decouples visual size from semantic level. Renders any h1–h6 with independent size scale, font weight, alignment, and color variants including a gradient.',
    importLine: "import { Title } from '@velocityuikit/velocityui'",
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
        code: `import { Title } from '@velocityuikit/velocityui'

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
        code: `import { Title } from '@velocityuikit/velocityui'

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
        code: `import { Title } from '@velocityuikit/velocityui'

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
      'Inline status label with 6 semantic color variants, an optional dot indicator, and a left icon slot.',
    importLine: "import { Badge } from '@velocityuikit/velocityui'",
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
        code: `import { Badge } from '@velocityuikit/velocityui'

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
        code: `import { Badge } from '@velocityuikit/velocityui'

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
        code: `import { Badge } from '@velocityuikit/velocityui'

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
      'Container component with compound sub-components: Card.Header, Card.Body, and Card.Footer. Supports four visual variants and an optional hover animation.',
    importLine: "import { Card } from '@velocityuikit/velocityui'",
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
        code: `import { Card, Button } from '@velocityuikit/velocityui'

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
        code: `import { Card } from '@velocityuikit/velocityui'

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
        code: `import { Card } from '@velocityuikit/velocityui'

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

  animatedbackground: {
    name: 'AnimatedBackground',
    slug: 'animatedbackground',
    description:
      'A composable wrapper for decorative animated layers. Handles content layering, reduced-motion friendly timing, and ambient intensity controls.',
    importLine:
      "import { AnimatedBackground, GradientOrbs } from '@velocityuikit/velocityui'",
    props: [
      {
        name: 'background',
        type: 'ReactNode',
        description: 'Decorative layer rendered behind the content, such as GradientOrbs or GridGlow.',
      },
      {
        name: 'contentClassName',
        type: 'string',
        description: 'Optional className applied to the foreground content wrapper.',
      },
      {
        name: 'intensity',
        type: "'subtle' | 'medium' | 'vivid'",
        default: "'medium'",
        description: 'Controls blur, scale, and overall ambient presence.',
      },
      {
        name: 'speed',
        type: "'slow' | 'medium' | 'fast'",
        default: "'medium'",
        description: 'Adjusts animation timing for child ambient effects.',
      },
      {
        name: 'interactive',
        type: 'boolean',
        default: 'false',
        description: 'Allows pointer events to pass through to the background layer when needed.',
      },
    ],
    examples: [
      {
        title: 'Hero shell',
        description: 'Wrap content and keep decorative motion isolated behind it.',
        code: `import { AnimatedBackground, Button, GradientOrbs } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <AnimatedBackground
      background={<GradientOrbs variant="hero" />}
      intensity="medium"
      speed="slow"
      style={{ borderRadius: '1.5rem', border: '1px solid var(--vui-border)' }}
      contentClassName="hero-content"
    >
      <div style={{ padding: '2rem', maxWidth: '28rem' }}>
        <h2 style={{ margin: 0 }}>Launch faster</h2>
        <p style={{ marginTop: '0.75rem', color: 'var(--vui-text-muted)' }}>
          Add ambient motion behind marketing or auth content without disturbing layout.
        </p>
        <div style={{ marginTop: '1rem' }}>
          <Button>Get started</Button>
        </div>
      </div>
    </AnimatedBackground>
  )
}`,
      },
      {
        title: 'Low-motion panel',
        code: `import { AnimatedBackground, GridGlow } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <AnimatedBackground
      background={<GridGlow variant="panel" />}
      intensity="subtle"
      speed="slow"
      style={{ borderRadius: '1rem', minHeight: 240 }}
    >
      <div style={{ padding: '1.5rem' }}>Dashboard content</div>
    </AnimatedBackground>
  )
}`,
      },
    ],
  },

  gradientorbs: {
    name: 'GradientOrbs',
    slug: 'gradientorbs',
    description:
      'A soft blurred ambient preset that places animated color fields around the edges of a container.',
    importLine: "import { GradientOrbs } from '@velocityuikit/velocityui'",
    props: [
      {
        name: 'variant',
        type: "'hero' | 'diagonal' | 'spotlight'",
        default: "'hero'",
        description: 'Chooses the orb layout and focal area.',
      },
    ],
    examples: [
      {
        title: 'Hero preset',
        code: `import { AnimatedBackground, GradientOrbs } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <AnimatedBackground
      background={<GradientOrbs variant="hero" />}
      style={{ minHeight: 320, borderRadius: '1.5rem' }}
    />
  )
}`,
      },
      {
        title: 'Centered spotlight',
        code: `import { AnimatedBackground, GradientOrbs } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <AnimatedBackground
      background={<GradientOrbs variant="spotlight" />}
      intensity="vivid"
      style={{ minHeight: 280, borderRadius: '1.5rem' }}
    />
  )
}`,
      },
    ],
  },

  gridglow: {
    name: 'GridGlow',
    slug: 'gridglow',
    description:
      'A structured ambient preset with a subtle grid, glow falloff, and animated beam for dashboard and technical surfaces.',
    importLine: "import { GridGlow } from '@velocityuikit/velocityui'",
    props: [
      {
        name: 'variant',
        type: "'default' | 'spotlight' | 'panel'",
        default: "'default'",
        description: 'Switches between centered, focused, and panel-oriented grid treatments.',
      },
    ],
    examples: [
      {
        title: 'Technical section background',
        code: `import { AnimatedBackground, GridGlow } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <AnimatedBackground
      background={<GridGlow variant="spotlight" />}
      intensity="subtle"
      style={{ minHeight: 320, borderRadius: '1.5rem' }}
    />
  )
}`,
      },
      {
        title: 'Panel treatment',
        code: `import { AnimatedBackground, GridGlow } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <AnimatedBackground
      background={<GridGlow variant="panel" />}
      intensity="subtle"
      speed="fast"
      style={{ minHeight: 220, borderRadius: '1rem' }}
    />
  )
}`,
      },
    ],
  },

  textarea: {
    name: 'Textarea',
    slug: 'textarea',
    description:
      'Multi-line text input matching the Input API — label, hint, error, resize control, and three sizes.',
    importLine: "import { Textarea } from '@velocityuikit/velocityui'",
    props: [
      { name: 'label', type: 'string', description: 'Label rendered above the textarea.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Controls padding and font size.' },
      { name: 'error', type: 'string', description: 'Error message below the field. Sets aria-invalid.' },
      { name: 'hint', type: 'string', description: 'Helper text shown when there is no error.' },
      { name: 'resize', type: "'none' | 'vertical' | 'horizontal' | 'both'", default: "'vertical'", description: 'CSS resize behaviour.' },
      { name: 'required', type: 'boolean', default: 'false', description: 'Marks the field as required with a visual asterisk.' },
      { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Makes the wrapper fill its container.' },
    ],
    examples: [
      {
        title: 'Basic',
        code: `import { Textarea } from '@velocityuikit/velocityui'

export default function Example() {
  return <Textarea label="Message" placeholder="Write your message here..." rows={4} />
}`,
      },
      {
        title: 'With error',
        code: `import { Textarea } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <Textarea
      label="Bio"
      error="Bio must be at least 20 characters."
      defaultValue="Too short"
    />
  )
}`,
      },
      {
        title: 'No resize',
        code: `import { Textarea } from '@velocityuikit/velocityui'

export default function Example() {
  return <Textarea label="Fixed height" resize="none" rows={3} />
}`,
      },
    ],
  },

  select: {
    name: 'Select',
    slug: 'select',
    description:
      'Native select element with custom styling, label, hint, error, and size variants. Accepts an options array or native children.',
    importLine: "import { Select } from '@velocityuikit/velocityui'",
    props: [
      { name: 'label', type: 'string', description: 'Label rendered above the select.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Controls height and font size.' },
      { name: 'options', type: 'SelectOption[]', description: 'Array of { value, label, disabled? } objects.' },
      { name: 'placeholder', type: 'string', description: 'Renders a disabled first option used as a prompt.' },
      { name: 'error', type: 'string', description: 'Error message below the field. Sets aria-invalid.' },
      { name: 'hint', type: 'string', description: 'Helper text shown when there is no error.' },
      { name: 'required', type: 'boolean', default: 'false', description: 'Marks the field as required.' },
      { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Makes the wrapper fill its container.' },
    ],
    examples: [
      {
        title: 'With options array',
        code: `import { Select } from '@velocityuikit/velocityui'

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'gb', label: 'United Kingdom' },
]

export default function Example() {
  return (
    <Select
      label="Country"
      placeholder="Select a country"
      options={countries}
    />
  )
}`,
      },
      {
        title: 'With error',
        code: `import { Select } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <Select
      label="Role"
      error="Please select a role."
      options={[
        { value: 'admin', label: 'Administrator' },
        { value: 'editor', label: 'Editor' },
      ]}
    />
  )
}`,
      },
    ],
  },

  checkbox: {
    name: 'Checkbox',
    slug: 'checkbox',
    description:
      'Checkbox with label, description text, error state, and three sizes.',
    importLine: "import { Checkbox } from '@velocityuikit/velocityui'",
    props: [
      { name: 'label', type: 'string', description: 'Label text rendered beside the checkbox.' },
      { name: 'description', type: 'string', description: 'Helper text rendered below the label.' },
      { name: 'error', type: 'string', description: 'Error message rendered below. Sets aria-invalid.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Controls the checkbox and label size.' },
      { name: 'checked', type: 'boolean', description: 'Controlled checked state.' },
      { name: 'defaultChecked', type: 'boolean', description: 'Uncontrolled default checked state.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the checkbox.' },
    ],
    examples: [
      {
        title: 'Basic',
        code: `import { Checkbox } from '@velocityuikit/velocityui'

export default function Example() {
  return <Checkbox label="Accept terms and conditions" />
}`,
      },
      {
        title: 'With description',
        code: `import { Checkbox } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <Checkbox
      label="Email notifications"
      description="Receive updates about your account activity."
      defaultChecked
    />
  )
}`,
      },
      {
        title: 'Sizes',
        code: `import { Checkbox } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <Checkbox size="sm" label="Small" defaultChecked />
      <Checkbox size="md" label="Medium" defaultChecked />
      <Checkbox size="lg" label="Large" defaultChecked />
    </div>
  )
}`,
      },
    ],
  },

  radiogroup: {
    name: 'RadioGroup',
    slug: 'radiogroup',
    description:
      'Radio group rendered as a fieldset. Accepts an options array with labels, descriptions, and disabled states. Supports vertical and horizontal layouts.',
    importLine: "import { RadioGroup } from '@velocityuikit/velocityui'",
    props: [
      { name: 'name', type: 'string', description: 'Shared name attribute for the radio inputs.' },
      { name: 'label', type: 'string', description: 'Group label rendered as a <legend>.' },
      { name: 'options', type: 'RadioOption[]', description: 'Array of { value, label, description?, disabled? }.' },
      { name: 'value', type: 'string', description: 'Controlled selected value.' },
      { name: 'defaultValue', type: 'string', description: 'Uncontrolled default selected value.' },
      { name: 'onChange', type: '(value: string) => void', description: 'Callback fired when selection changes.' },
      { name: 'orientation', type: "'vertical' | 'horizontal'", default: "'vertical'", description: 'Layout direction of the radio options.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Controls radio and label size.' },
      { name: 'error', type: 'string', description: 'Error message for the entire group.' },
    ],
    examples: [
      {
        title: 'Basic',
        code: `import { RadioGroup } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <RadioGroup
      name="plan"
      label="Select a plan"
      defaultValue="pro"
      options={[
        { value: 'free', label: 'Free', description: 'Up to 3 projects' },
        { value: 'pro', label: 'Pro', description: 'Unlimited projects' },
        { value: 'enterprise', label: 'Enterprise', description: 'Custom pricing' },
      ]}
    />
  )
}`,
      },
      {
        title: 'Horizontal',
        code: `import { RadioGroup } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <RadioGroup
      name="size"
      label="T-shirt size"
      orientation="horizontal"
      options={[
        { value: 's', label: 'S' },
        { value: 'm', label: 'M' },
        { value: 'l', label: 'L' },
        { value: 'xl', label: 'XL' },
      ]}
    />
  )
}`,
      },
    ],
  },

  switch: {
    name: 'Switch',
    slug: 'switch',
    description:
      'Toggle control rendered as a styled checkbox with role="switch". Accepts label and description text.',
    importLine: "import { Switch } from '@velocityuikit/velocityui'",
    props: [
      { name: 'label', type: 'string', description: 'Label text rendered beside the switch.' },
      { name: 'description', type: 'string', description: 'Helper text rendered below.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Controls the switch track and thumb size.' },
      { name: 'checked', type: 'boolean', description: 'Controlled checked state.' },
      { name: 'defaultChecked', type: 'boolean', description: 'Uncontrolled default.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the switch.' },
    ],
    examples: [
      {
        title: 'Basic',
        code: `import { Switch } from '@velocityuikit/velocityui'

export default function Example() {
  return <Switch label="Enable notifications" defaultChecked />
}`,
      },
      {
        title: 'Sizes',
        code: `import { Switch } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch size="sm" label="Small" defaultChecked />
      <Switch size="md" label="Medium" defaultChecked />
      <Switch size="lg" label="Large" defaultChecked />
    </div>
  )
}`,
      },
    ],
  },

  alert: {
    name: 'Alert',
    slug: 'alert',
    description:
      'Notification banner with four semantic color variants, an automatic icon, an optional title, and a dismiss button.',
    importLine: "import { Alert } from '@velocityuikit/velocityui'",
    props: [
      { name: 'variant', type: "'info' | 'success' | 'warning' | 'danger'", default: "'info'", description: 'Color scheme and icon of the alert.' },
      { name: 'title', type: 'string', description: 'Bold title line rendered above the body.' },
      { name: 'icon', type: 'ReactNode', description: 'Overrides the default icon. Pass null to hide.' },
      { name: 'onClose', type: '() => void', description: 'When provided, renders a dismiss button.' },
      { name: 'children', type: 'ReactNode', description: 'Alert body content.' },
    ],
    examples: [
      {
        title: 'Variants',
        code: `import { Alert } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <Alert variant="info">Your session will expire in 5 minutes.</Alert>
      <Alert variant="success" title="Payment confirmed">Your order has been placed.</Alert>
      <Alert variant="warning">Review your details before submitting.</Alert>
      <Alert variant="danger" title="Error">Failed to save changes. Please try again.</Alert>
    </div>
  )
}`,
      },
      {
        title: 'Dismissible',
        code: `import { useState } from 'react'
import { Alert } from '@velocityuikit/velocityui'

export default function Example() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null
  return (
    <Alert variant="info" onClose={() => setVisible(false)}>
      Click the X to dismiss this alert.
    </Alert>
  )
}`,
      },
    ],
  },

  dialog: {
    name: 'Dialog',
    slug: 'dialog',
    description:
      'Modal dialog with focus trapping, Escape-key close, and ARIA attributes. Supports compound sub-components Dialog.Header, Dialog.Body, and Dialog.Footer across four sizes.',
    importLine: "import { Dialog } from '@velocityuikit/velocityui'",
    props: [
      { name: 'open', type: 'boolean', description: 'Controls visibility of the dialog.' },
      { name: 'onClose', type: '() => void', description: 'Called when the user closes the dialog via overlay click or Escape.' },
      { name: 'title', type: 'string', description: 'Renders a built-in header with a title.' },
      { name: 'description', type: 'string', description: 'Subtitle rendered under the title in the built-in header.' },
      { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Maximum width of the dialog panel.' },
      { name: 'closeOnOverlayClick', type: 'boolean', default: 'true', description: 'Whether clicking outside closes the dialog.' },
    ],
    examples: [
      {
        title: 'Basic',
        code: `import { useState } from 'react'
import { Button, Dialog } from '@velocityuikit/velocityui'

export default function Example() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)} title="Confirm action" description="This cannot be undone.">
        <Dialog.Body>
          Are you sure you want to delete this item?
        </Dialog.Body>
        <Dialog.Footer>
          <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="danger" onClick={() => setOpen(false)}>Delete</Button>
        </Dialog.Footer>
      </Dialog>
    </>
  )
}`,
      },
      {
        title: 'Custom header via compound parts',
        code: `import { useState } from 'react'
import { Button, Dialog, Badge } from '@velocityuikit/velocityui'

export default function Example() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Dialog.Header>
          <h2 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 700 }}>Settings</h2>
          <Badge variant="info">Beta</Badge>
        </Dialog.Header>
        <Dialog.Body>Configure your preferences here.</Dialog.Body>
        <Dialog.Footer>
          <Button onClick={() => setOpen(false)}>Save</Button>
        </Dialog.Footer>
      </Dialog>
    </>
  )
}`,
      },
    ],
  },

  tabs: {
    name: 'Tabs',
    slug: 'tabs',
    description:
      'Tab component with keyboard navigation (Arrow keys, Home, End), three visual variants, and controlled/uncontrolled modes.',
    importLine: "import { Tabs } from '@velocityuikit/velocityui'",
    props: [
      { name: 'items', type: 'TabItem[]', description: 'Array of { value, label, children, disabled? } tab definitions.' },
      { name: 'defaultValue', type: 'string', description: 'Initial active tab for uncontrolled mode.' },
      { name: 'value', type: 'string', description: 'Controlled active tab value.' },
      { name: 'onChange', type: '(value: string) => void', description: 'Callback when a tab is selected.' },
      { name: 'variant', type: "'underline' | 'pills' | 'boxed'", default: "'underline'", description: 'Visual style of the tab list.' },
    ],
    examples: [
      {
        title: 'Variants',
        code: `import { Tabs } from '@velocityuikit/velocityui'

const items = [
  { value: 'overview', label: 'Overview', children: <p>Overview content</p> },
  { value: 'analytics', label: 'Analytics', children: <p>Analytics content</p> },
  { value: 'settings', label: 'Settings', children: <p>Settings content</p> },
]

export default function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Tabs items={items} defaultValue="overview" variant="underline" />
      <Tabs items={items} defaultValue="overview" variant="pills" />
      <Tabs items={items} defaultValue="overview" variant="boxed" />
    </div>
  )
}`,
      },
    ],
  },

  accordion: {
    name: 'Accordion',
    slug: 'accordion',
    description:
      'Collapsible sections with CSS grid animation. Supports single or multiple open items, three visual variants, and controlled/uncontrolled modes.',
    importLine: "import { Accordion } from '@velocityuikit/velocityui'",
    props: [
      { name: 'items', type: 'AccordionItem[]', description: 'Array of { value, title, content, disabled? } definitions.' },
      { name: 'defaultValue', type: 'string | string[]', description: 'Initially open item(s) for uncontrolled mode.' },
      { name: 'value', type: 'string | string[]', description: 'Controlled open item(s).' },
      { name: 'onChange', type: '(value: string | string[]) => void', description: 'Callback when open state changes.' },
      { name: 'multiple', type: 'boolean', default: 'false', description: 'Allow multiple sections open simultaneously.' },
      { name: 'variant', type: "'bordered' | 'flush' | 'separated'", default: "'bordered'", description: 'Visual style of the accordion container.' },
    ],
    examples: [
      {
        title: 'Basic',
        code: `import { Accordion } from '@velocityuikit/velocityui'

const items = [
  { value: 'q1', title: 'What is VelocityUI?', content: 'A modern, accessible React component library.' },
  { value: 'q2', title: 'Is it free to use?', content: 'Yes, it is open source under the MIT license.' },
  { value: 'q3', title: 'Does it support theming?', content: 'Yes, via CSS custom properties and named theme classes.' },
]

export default function Example() {
  return <Accordion items={items} defaultValue="q1" />
}`,
      },
      {
        title: 'Multiple open + separated variant',
        code: `import { Accordion } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <Accordion
      variant="separated"
      multiple
      defaultValue={['a', 'b']}
      items={[
        { value: 'a', title: 'Section A', content: 'Content A' },
        { value: 'b', title: 'Section B', content: 'Content B' },
        { value: 'c', title: 'Section C', content: 'Content C' },
      ]}
    />
  )
}`,
      },
    ],
  },

  tooltip: {
    name: 'Tooltip',
    slug: 'tooltip',
    description:
      'Tooltip shown on hover and focus. Supports four placement directions and an optional show delay.',
    importLine: "import { Tooltip } from '@velocityuikit/velocityui'",
    props: [
      { name: 'content', type: 'ReactNode', description: 'Tooltip body text or node.' },
      { name: 'children', type: 'ReactElement', description: 'The trigger element. Must be a single React element.' },
      { name: 'placement', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Preferred position of the tooltip relative to the trigger.' },
      { name: 'delay', type: 'number', default: '0', description: 'Delay in milliseconds before the tooltip appears.' },
    ],
    examples: [
      {
        title: 'Placements',
        code: `import { Tooltip, Button } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', padding: '2rem' }}>
      <Tooltip content="Top tooltip" placement="top">
        <Button variant="outline">Top</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" placement="bottom">
        <Button variant="outline">Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" placement="left">
        <Button variant="outline">Left</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" placement="right">
        <Button variant="outline">Right</Button>
      </Tooltip>
    </div>
  )
}`,
      },
      {
        title: 'With delay',
        code: `import { Tooltip, Button } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <Tooltip content="Appears after 300ms" delay={300}>
      <Button>Hover me</Button>
    </Tooltip>
  )
}`,
      },
    ],
  },

  divider: {
    name: 'Divider',
    slug: 'divider',
    description:
      'Horizontal or vertical separator line. Supports an optional centered text label.',
    importLine: "import { Divider } from '@velocityuikit/velocityui'",
    props: [
      { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Direction of the separator line.' },
      { name: 'label', type: 'string', description: 'Optional centered text that splits the line.' },
    ],
    examples: [
      {
        title: 'Basic',
        code: `import { Divider } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <p>Above the divider</p>
      <Divider />
      <p>Below the divider</p>
    </div>
  )
}`,
      },
      {
        title: 'With label',
        code: `import { Divider } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <p>Section one</p>
      <Divider label="or" />
      <p>Section two</p>
    </div>
  )
}`,
      },
    ],
  },

  spinner: {
    name: 'Spinner',
    slug: 'spinner',
    description:
      'Animated SVG ring for loading states. Supports three sizes and color options.',
    importLine: "import { Spinner } from '@velocityuikit/velocityui'",
    props: [
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Controls the width and height of the spinner.' },
      { name: 'color', type: "'primary' | 'muted' | 'white'", default: "'primary'", description: 'The color of the spinner arc.' },
      { name: 'label', type: 'string', default: "'Loading…'", description: 'Screen-reader label set via aria-label on the container.' },
    ],
    examples: [
      {
        title: 'Sizes',
        code: `import { Spinner } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  )
}`,
      },
      {
        title: 'Colors',
        code: `import { Spinner } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Spinner color="primary" />
      <Spinner color="muted" />
    </div>
  )
}`,
      },
    ],
  },

  skeleton: {
    name: 'Skeleton',
    slug: 'skeleton',
    description:
      'Shimmering placeholder for loading states. Renders a single block or a stack of lines, with configurable width, height, and border radius.',
    importLine: "import { Skeleton } from '@velocityuikit/velocityui'",
    props: [
      { name: 'width', type: 'string | number', description: 'Width of the skeleton block. Defaults to 100% for multi-line stacks.' },
      { name: 'height', type: 'string | number', default: "'1rem'", description: 'Height of each skeleton block.' },
      { name: 'radius', type: 'string | number', description: 'Border radius. Defaults to --vui-radius-sm.' },
      { name: 'lines', type: 'number', description: 'When greater than 1, renders a stacked column of blocks. The last line renders at 75% width.' },
      { name: 'gap', type: 'string | number', default: "'0.5rem'", description: 'Gap between lines when using multi-line mode.' },
    ],
    examples: [
      {
        title: 'Single block',
        code: `import { Skeleton } from '@velocityuikit/velocityui'

export default function Example() {
  return <Skeleton width={200} height={20} />
}`,
      },
      {
        title: 'Multi-line text',
        code: `import { Skeleton } from '@velocityuikit/velocityui'

export default function Example() {
  return <Skeleton lines={4} height={14} />
}`,
      },
      {
        title: 'Card skeleton',
        code: `import { Skeleton } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: 280 }}>
      <Skeleton height={160} radius={12} />
      <Skeleton height={18} width="60%" />
      <Skeleton lines={3} height={13} />
    </div>
  )
}`,
      },
    ],
  },

  progress: {
    name: 'Progress',
    slug: 'progress',
    description:
      'Linear progress bar for values 0–100. Supports four color variants, three sizes, an optional label, and a percentage readout.',
    importLine: "import { Progress } from '@velocityuikit/velocityui'",
    props: [
      { name: 'value', type: 'number', description: 'Current progress value from 0 to 100.' },
      { name: 'variant', type: "'primary' | 'success' | 'warning' | 'danger'", default: "'primary'", description: 'Color of the filled bar.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Track height.' },
      { name: 'label', type: 'string', description: 'Text label shown above the bar.' },
      { name: 'showValue', type: 'boolean', default: 'false', description: 'Displays the numeric percentage to the right of the label.' },
    ],
    examples: [
      {
        title: 'Basic',
        code: `import { Progress } from '@velocityuikit/velocityui'

export default function Example() {
  return <Progress value={65} label="Upload progress" showValue />
}`,
      },
      {
        title: 'Variants',
        code: `import { Progress } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <Progress value={40} variant="primary" />
      <Progress value={72} variant="success" />
      <Progress value={55} variant="warning" />
      <Progress value={20} variant="danger" />
    </div>
  )
}`,
      },
    ],
  },

  toast: {
    name: 'Toast',
    slug: 'toast',
    description:
      'Portal-based notifications rendered in the bottom-right corner. Wrap your app in ToastProvider and call useToast() to fire toasts with variants, durations, and dismiss callbacks.',
    importLine: "import { ToastProvider, useToast } from '@velocityuikit/velocityui'",
    props: [
      { name: 'message', type: 'string', description: 'The notification text to display.' },
      { name: 'variant', type: "'info' | 'success' | 'warning' | 'danger'", default: "'info'", description: 'Controls the color and semantic tone of the toast.' },
      { name: 'duration', type: 'number', default: '4000', description: 'Auto-dismiss delay in milliseconds. Set to 0 to disable auto-dismiss.' },
    ],
    examples: [
      {
        title: 'Setup and usage',
        description: 'Wrap your app with ToastProvider, then call addToast() anywhere inside.',
        code: `import { ToastProvider, useToast, Button } from '@velocityuikit/velocityui'

function Demo() {
  const { addToast } = useToast()
  return (
    <Button onClick={() => addToast({ message: 'Saved successfully!', variant: 'success' })}>
      Save
    </Button>
  )
}

export default function Example() {
  return (
    <ToastProvider>
      <Demo />
    </ToastProvider>
  )
}`,
      },
      {
        title: 'All variants',
        code: `import { ToastProvider, useToast, Button } from '@velocityuikit/velocityui'

function Demo() {
  const { addToast } = useToast()
  return (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Button onClick={() => addToast({ message: 'Info message', variant: 'info' })}>Info</Button>
      <Button variant="secondary" onClick={() => addToast({ message: 'Changes saved', variant: 'success' })}>Success</Button>
      <Button variant="outline" onClick={() => addToast({ message: 'Please review', variant: 'warning' })}>Warning</Button>
      <Button variant="danger" onClick={() => addToast({ message: 'Action failed', variant: 'danger' })}>Danger</Button>
    </div>
  )
}

export default function Example() {
  return (
    <ToastProvider>
      <Demo />
    </ToastProvider>
  )
}`,
      },
    ],
  },

  avatar: {
    name: 'Avatar',
    slug: 'avatar',
    description:
      'Avatar image with automatic initials fallback. Supports five sizes, two shapes, and an optional status indicator dot.',
    importLine: "import { Avatar } from '@velocityuikit/velocityui'",
    props: [
      { name: 'src', type: 'string', description: 'URL of the avatar image.' },
      { name: 'alt', type: 'string', description: 'Alt text for the image.' },
      { name: 'name', type: 'string', description: 'Full name used to generate initials when no image is available.' },
      { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Controls the overall dimensions of the avatar.' },
      { name: 'shape', type: "'circle' | 'square'", default: "'circle'", description: 'Border radius shape.' },
      { name: 'status', type: "'online' | 'away' | 'offline'", description: 'Shows a colored status dot in the bottom-right corner.' },
    ],
    examples: [
      {
        title: 'Sizes',
        code: `import { Avatar } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <Avatar name="Alice Brown" size="xs" />
      <Avatar name="Alice Brown" size="sm" />
      <Avatar name="Alice Brown" size="md" />
      <Avatar name="Alice Brown" size="lg" />
      <Avatar name="Alice Brown" size="xl" />
    </div>
  )
}`,
      },
      {
        title: 'With status',
        code: `import { Avatar } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <Avatar name="Sam Lee" status="online" />
      <Avatar name="Jordan Kim" status="away" />
      <Avatar name="Alex Ng" status="offline" />
    </div>
  )
}`,
      },
    ],
  },

  tag: {
    name: 'Tag',
    slug: 'tag',
    description:
      'Interactive chip extending Badge with a removable close button. Use for filters, selections, and user-generated labels.',
    importLine: "import { Tag } from '@velocityuikit/velocityui'",
    props: [
      { name: 'variant', type: "'default' | 'info' | 'success' | 'warning' | 'danger' | 'primary'", default: "'default'", description: 'Color variant of the tag.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Controls padding and font size.' },
      { name: 'onClose', type: '() => void', description: 'When provided, renders an × close button inside the tag.' },
      { name: 'leftIcon', type: 'ReactNode', description: 'Icon rendered to the left of the label.' },
    ],
    examples: [
      {
        title: 'Removable tags',
        code: `import { Tag } from '@velocityuikit/velocityui'
import { useState } from 'react'

export default function Example() {
  const [tags, setTags] = useState(['React', 'TypeScript', 'Tailwind'])
  return (
    <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
      {tags.map((t) => (
        <Tag key={t} variant="primary" onClose={() => setTags(tags.filter((x) => x !== t))}>
          {t}
        </Tag>
      ))}
    </div>
  )
}`,
      },
      {
        title: 'Variants',
        code: `import { Tag } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
      <Tag>Default</Tag>
      <Tag variant="info">Info</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="danger">Danger</Tag>
      <Tag variant="primary">Primary</Tag>
    </div>
  )
}`,
      },
    ],
  },

  emptystate: {
    name: 'EmptyState',
    slug: 'emptystate',
    description:
      'Zero-data placeholder with an icon, title, description, and optional call-to-action. Use to fill tables, lists, or panels that have no content.',
    importLine: "import { EmptyState } from '@velocityuikit/velocityui'",
    props: [
      { name: 'title', type: 'string', description: 'Main heading of the empty state.' },
      { name: 'description', type: 'string', description: 'Supporting text below the title.' },
      { name: 'icon', type: 'ReactNode', description: 'Icon or illustration rendered inside a circular background above the title.' },
      { name: 'action', type: 'ReactNode', description: 'Call-to-action element (e.g. a Button) rendered below the description.' },
    ],
    examples: [
      {
        title: 'Basic',
        code: `import { EmptyState, Button } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <EmptyState
      title="No results found"
      description="Try adjusting your search or filters to find what you're looking for."
      action={<Button variant="outline">Clear filters</Button>}
    />
  )
}`,
      },
      {
        title: 'With icon',
        code: `import { EmptyState, Button } from '@velocityuikit/velocityui'

const FolderIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
  </svg>
)

export default function Example() {
  return (
    <EmptyState
      icon={<FolderIcon />}
      title="No files yet"
      description="Upload your first file to get started."
      action={<Button>Upload file</Button>}
    />
  )
}`,
      },
    ],
  },

  breadcrumb: {
    name: 'Breadcrumb',
    slug: 'breadcrumb',
    description:
      'Navigation trail showing the current page location within a hierarchy. Marks the last item with aria-current="page".',
    importLine: "import { Breadcrumb } from '@velocityuikit/velocityui'",
    props: [
      { name: 'items', type: "{ label: string; href?: string }[]", description: 'Array of breadcrumb entries. The last item is rendered as static text (current page).' },
      { name: 'separator', type: 'ReactNode', description: 'Custom separator element. Defaults to a chevron-right icon.' },
    ],
    examples: [
      {
        title: 'Basic',
        code: `import { Breadcrumb } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <Breadcrumb
      items={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Running Shoes' },
      ]}
    />
  )
}`,
      },
      {
        title: 'Custom separator',
        code: `import { Breadcrumb } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <Breadcrumb
      separator={<span style={{ color: '#94a3b8' }}>/</span>}
      items={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Settings', href: '/settings' },
        { label: 'Profile' },
      ]}
    />
  )
}`,
      },
    ],
  },

  pagination: {
    name: 'Pagination',
    slug: 'pagination',
    description:
      'Page navigation with previous/next buttons, numbered pages, ellipsis truncation, and optional first/last shortcuts.',
    importLine: "import { Pagination } from '@velocityuikit/velocityui'",
    props: [
      { name: 'page', type: 'number', description: 'The currently active page (1-indexed).' },
      { name: 'totalPages', type: 'number', description: 'The total number of pages.' },
      { name: 'onChange', type: '(page: number) => void', description: 'Callback fired when the user selects a new page.' },
      { name: 'siblingCount', type: 'number', default: '1', description: 'Number of page buttons shown on each side of the current page.' },
      { name: 'showFirstLast', type: 'boolean', default: 'true', description: 'Toggles the first-page and last-page shortcut buttons.' },
    ],
    examples: [
      {
        title: 'Basic',
        code: `import { Pagination } from '@velocityuikit/velocityui'
import { useState } from 'react'

export default function Example() {
  const [page, setPage] = useState(1)
  return <Pagination page={page} totalPages={12} onChange={setPage} />
}`,
      },
      {
        title: 'More siblings',
        code: `import { Pagination } from '@velocityuikit/velocityui'
import { useState } from 'react'

export default function Example() {
  const [page, setPage] = useState(5)
  return <Pagination page={page} totalPages={20} onChange={setPage} siblingCount={2} />
}`,
      },
    ],
  },

  stepper: {
    name: 'Stepper',
    slug: 'stepper',
    description:
      'Multi-step progress indicator showing completed, active, and pending steps. Supports horizontal, vertical, and compact (icon-only) orientations.',
    importLine: "import { Stepper } from '@velocityuikit/velocityui'",
    props: [
      { name: 'steps', type: "{ label: string; description?: string }[]", description: 'Array of step definitions.' },
      { name: 'currentStep', type: 'number', description: 'The 1-indexed step that is currently active.' },
      { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Layout direction of the stepper.' },
      { name: 'variant', type: "'default' | 'compact'", default: "'default'", description: 'Compact hides the label and description text.' },
    ],
    examples: [
      {
        title: 'Horizontal',
        code: `import { Stepper } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <Stepper
      currentStep={2}
      steps={[
        { label: 'Account', description: 'Create your account' },
        { label: 'Profile', description: 'Set up your profile' },
        { label: 'Review', description: 'Confirm details' },
      ]}
    />
  )
}`,
      },
      {
        title: 'Vertical',
        code: `import { Stepper } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <Stepper
      orientation="vertical"
      currentStep={3}
      steps={[
        { label: 'Cart', description: 'Review your items' },
        { label: 'Shipping', description: 'Enter your address' },
        { label: 'Payment', description: 'Complete your purchase' },
        { label: 'Confirmation' },
      ]}
    />
  )
}`,
      },
    ],
  },

  popover: {
    name: 'Popover',
    slug: 'popover',
    description:
      'Overlay anchored to a trigger, capable of holding any rich content. Unlike Tooltip, it persists on click. Supports four placements, portal rendering, click-outside and Escape dismissal, and controlled/uncontrolled modes.',
    importLine: "import { Popover } from '@velocityuikit/velocityui'",
    props: [
      { name: 'trigger', type: 'ReactNode', description: 'The element that opens the popover when clicked.' },
      { name: 'content', type: 'ReactNode', description: 'Content rendered inside the popover panel.' },
      { name: 'placement', type: "'top' | 'bottom' | 'left' | 'right'", default: "'bottom'", description: 'Preferred placement relative to the trigger.' },
      { name: 'open', type: 'boolean', description: 'Controls open state externally (controlled mode).' },
      { name: 'onOpenChange', type: '(open: boolean) => void', description: 'Callback when open state changes (controlled mode).' },
    ],
    examples: [
      {
        title: 'Basic',
        code: `import { Popover, Button } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <Popover
      trigger={<Button variant="outline">Open popover</Button>}
      content={
        <div>
          <strong>Popover title</strong>
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.875rem', color: '#64748b' }}>
            This is some popover content. Click outside to dismiss.
          </p>
        </div>
      }
    />
  )
}`,
      },
      {
        title: 'Top placement',
        code: `import { Popover, Button } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <div style={{ padding: '4rem 0 0' }}>
      <Popover
        placement="top"
        trigger={<Button variant="secondary">Popover above</Button>}
        content={<p style={{ margin: 0 }}>Placed above the trigger</p>}
      />
    </div>
  )
}`,
      },
    ],
  },

  dropdown: {
    name: 'Dropdown',
    slug: 'dropdown',
    description:
      'Action menu anchored to a trigger. Items support icons, disabled states, and separators. Portal-rendered to avoid overflow clipping.',
    importLine: "import { Dropdown } from '@velocityuikit/velocityui'",
    props: [
      { name: 'trigger', type: 'ReactNode', description: 'The element that opens the menu when clicked.' },
      { name: 'items', type: "{ label: string; icon?: ReactNode; onClick?: () => void; disabled?: boolean; separator?: boolean }[]", description: 'Array of menu items. An item with separator: true renders a horizontal divider instead of a button.' },
      { name: 'placement', type: "'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'", default: "'bottom-start'", description: 'Menu placement relative to the trigger.' },
    ],
    examples: [
      {
        title: 'Basic menu',
        code: `import { Dropdown, Button } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <Dropdown
      trigger={<Button variant="outline">Actions ▾</Button>}
      items={[
        { label: 'Edit' },
        { label: 'Duplicate' },
        { separator: true },
        { label: 'Delete', onClick: () => alert('Deleted') },
      ]}
    />
  )
}`,
      },
      {
        title: 'With disabled item',
        code: `import { Dropdown, Button } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <Dropdown
      trigger={<Button>Options</Button>}
      items={[
        { label: 'View details' },
        { label: 'Export', disabled: true },
        { label: 'Archive' },
      ]}
    />
  )
}`,
      },
    ],
  },

  slider: {
    name: 'Slider',
    slug: 'slider',
    description:
      'Range input with a custom track and thumb. Supports a label, live value readout, min/max/step configuration, and disabled state.',
    importLine: "import { Slider } from '@velocityuikit/velocityui'",
    props: [
      { name: 'value', type: 'number', description: 'Controlled value.' },
      { name: 'onChange', type: '(value: number) => void', description: 'Callback fired when the value changes.' },
      { name: 'min', type: 'number', default: '0', description: 'Minimum value.' },
      { name: 'max', type: 'number', default: '100', description: 'Maximum value.' },
      { name: 'step', type: 'number', default: '1', description: 'Step increment.' },
      { name: 'label', type: 'string', description: 'Label displayed above the slider.' },
      { name: 'showValue', type: 'boolean', default: 'false', description: 'Shows the current numeric value to the right of the label.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Height of the track area.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables interaction.' },
    ],
    examples: [
      {
        title: 'Basic',
        code: `import { Slider } from '@velocityuikit/velocityui'
import { useState } from 'react'

export default function Example() {
  const [val, setVal] = useState(40)
  return <Slider value={val} onChange={setVal} label="Volume" showValue />
}`,
      },
      {
        title: 'Stepped',
        code: `import { Slider } from '@velocityuikit/velocityui'
import { useState } from 'react'

export default function Example() {
  const [val, setVal] = useState(50)
  return <Slider value={val} onChange={setVal} min={0} max={200} step={25} label="Budget" showValue />
}`,
      },
    ],
  },

  numberinput: {
    name: 'NumberInput',
    slug: 'numberinput',
    description:
      'Numeric input with increment and decrement buttons. Respects min/max bounds and supports label, error, and hint text.',
    importLine: "import { NumberInput } from '@velocityuikit/velocityui'",
    props: [
      { name: 'value', type: 'number', description: 'Controlled value.' },
      { name: 'onChange', type: '(value: number) => void', description: 'Callback fired when the value changes.' },
      { name: 'min', type: 'number', description: 'Minimum allowed value. Disables the decrement button at the boundary.' },
      { name: 'max', type: 'number', description: 'Maximum allowed value. Disables the increment button at the boundary.' },
      { name: 'step', type: 'number', default: '1', description: 'Amount to increment or decrement per button click.' },
      { name: 'label', type: 'string', description: 'Label rendered above the input.' },
      { name: 'error', type: 'string', description: 'Error message rendered below the input.' },
      { name: 'hint', type: 'string', description: 'Hint text rendered below the input when there is no error.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Height of the input.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the input and buttons.' },
    ],
    examples: [
      {
        title: 'Basic',
        code: `import { NumberInput } from '@velocityuikit/velocityui'
import { useState } from 'react'

export default function Example() {
  const [qty, setQty] = useState(1)
  return <NumberInput value={qty} onChange={setQty} min={1} max={99} label="Quantity" />
}`,
      },
      {
        title: 'With error',
        code: `import { NumberInput } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <NumberInput
      value={0}
      onChange={() => {}}
      min={1}
      label="Age"
      error="Must be at least 1"
    />
  )
}`,
      },
    ],
  },

  fileupload: {
    name: 'FileUpload',
    slug: 'fileupload',
    description:
      'Drag-and-drop file upload zone with click-to-browse fallback. Shows selected files in a removable list and validates against an optional maxSize cap.',
    importLine: "import { FileUpload } from '@velocityuikit/velocityui'",
    props: [
      { name: 'onChange', type: '(files: File[]) => void', description: 'Callback fired when the file selection changes.' },
      { name: 'accept', type: 'string', description: 'MIME types or file extensions to accept, e.g. "image/*" or ".pdf".' },
      { name: 'multiple', type: 'boolean', default: 'false', description: 'Allows selecting multiple files.' },
      { name: 'maxSize', type: 'number', description: 'Maximum file size in bytes. Triggers an error message if exceeded.' },
      { name: 'label', type: 'string', description: 'Label displayed above the drop zone.' },
      { name: 'hint', type: 'string', description: 'Hint text rendered inside the drop zone.' },
      { name: 'error', type: 'string', description: 'Error message rendered below the drop zone.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables interaction.' },
    ],
    examples: [
      {
        title: 'Basic',
        code: `import { FileUpload } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <FileUpload
      label="Attachment"
      hint="PNG, JPG, PDF up to 10 MB"
      onChange={(files) => console.log(files)}
    />
  )
}`,
      },
      {
        title: 'Multiple files with size limit',
        code: `import { FileUpload } from '@velocityuikit/velocityui'

export default function Example() {
  return (
    <FileUpload
      multiple
      accept="image/*"
      maxSize={5 * 1024 * 1024}
      label="Gallery images"
      hint="Up to 5 MB each"
      onChange={(files) => console.log(files)}
    />
  )
}`,
      },
    ],
  },

  table: {
    name: 'Table',
    slug: 'table',
    description:
      'Sortable data table with optional striped rows and bordered cells. Column definitions support a custom cell render function.',
    importLine: "import { Table } from '@velocityuikit/velocityui'",
    props: [
      { name: 'columns', type: "{ key: string; header: string; sortable?: boolean; render?: (value, row, index) => ReactNode }[]", description: 'Column definitions.' },
      { name: 'data', type: 'T[]', description: 'Array of row data objects.' },
      { name: 'sortKey', type: 'string', description: 'The column key currently sorted.' },
      { name: 'sortDir', type: "'asc' | 'desc'", description: 'The current sort direction.' },
      { name: 'onSort', type: '(key: string, dir: SortDirection) => void', description: 'Callback fired when a sortable header is clicked.' },
      { name: 'striped', type: 'boolean', default: 'false', description: 'Alternates row background colors.' },
      { name: 'bordered', type: 'boolean', default: 'false', description: 'Adds borders to individual cells.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Controls cell padding and font size.' },
    ],
    examples: [
      {
        title: 'Basic sortable table',
        code: `import { Table } from '@velocityuikit/velocityui'
import { useState } from 'react'

const data = [
  { name: 'Alice', role: 'Engineer', status: 'Active' },
  { name: 'Bob', role: 'Designer', status: 'Inactive' },
  { name: 'Carol', role: 'Manager', status: 'Active' },
]

export default function Example() {
  const [sortKey, setSortKey] = useState('')
  const [sortDir, setSortDir] = useState('asc')

  const sorted = [...data].sort((a, b) => {
    if (!sortKey) return 0
    const cmp = a[sortKey] < b[sortKey] ? -1 : a[sortKey] > b[sortKey] ? 1 : 0
    return sortDir === 'asc' ? cmp : -cmp
  })

  return (
    <Table
      columns={[
        { key: 'name', header: 'Name', sortable: true },
        { key: 'role', header: 'Role', sortable: true },
        { key: 'status', header: 'Status' },
      ]}
      data={sorted}
      sortKey={sortKey}
      sortDir={sortDir}
      onSort={(key, dir) => { setSortKey(key); setSortDir(dir) }}
    />
  )
}`,
      },
      {
        title: 'Striped and bordered',
        code: `import { Table } from '@velocityuikit/velocityui'

const data = [
  { id: 1, product: 'Widget A', price: '$12.00' },
  { id: 2, product: 'Widget B', price: '$8.50' },
  { id: 3, product: 'Widget C', price: '$24.99' },
]

export default function Example() {
  return (
    <Table
      columns={[
        { key: 'id', header: '#' },
        { key: 'product', header: 'Product' },
        { key: 'price', header: 'Price' },
      ]}
      data={data}
      striped
      bordered
    />
  )
}`,
      },
    ],
  },
}

