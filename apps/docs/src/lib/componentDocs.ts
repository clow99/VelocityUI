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

  textarea: {
    name: 'Textarea',
    slug: 'textarea',
    description:
      'A multi-line text input with label, hint, error, resize control, and three sizes. Mirrors the Input API with full accessibility wiring and ref forwarding.',
    importLine: "import { Textarea } from 'velocityui'",
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
        code: `import { Textarea } from 'velocityui'

export default function Example() {
  return <Textarea label="Message" placeholder="Write your message here..." rows={4} />
}`,
      },
      {
        title: 'With error',
        code: `import { Textarea } from 'velocityui'

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
        code: `import { Textarea } from 'velocityui'

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
      'A fully styled native select element with custom arrow, label, hint, error, and size variants. Accepts an options array or native <option> children.',
    importLine: "import { Select } from 'velocityui'",
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
        code: `import { Select } from 'velocityui'

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
        code: `import { Select } from 'velocityui'

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
      'A custom-styled accessible checkbox with label, description text, error state, and three sizes. Forwards refs and spreads all native input attributes.',
    importLine: "import { Checkbox } from 'velocityui'",
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
        code: `import { Checkbox } from 'velocityui'

export default function Example() {
  return <Checkbox label="Accept terms and conditions" />
}`,
      },
      {
        title: 'With description',
        code: `import { Checkbox } from 'velocityui'

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
        code: `import { Checkbox } from 'velocityui'

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
      'An accessible radio group rendered as a fieldset with a legend. Accepts an options array supporting labels, descriptions, and disabled states. Supports both vertical and horizontal layouts.',
    importLine: "import { RadioGroup } from 'velocityui'",
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
        code: `import { RadioGroup } from 'velocityui'

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
        code: `import { RadioGroup } from 'velocityui'

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
      'A toggle control rendered as a styled checkbox with role="switch". Accepts label and description text. Forwards refs and spreads native input attributes.',
    importLine: "import { Switch } from 'velocityui'",
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
        code: `import { Switch } from 'velocityui'

export default function Example() {
  return <Switch label="Enable notifications" defaultChecked />
}`,
      },
      {
        title: 'Sizes',
        code: `import { Switch } from 'velocityui'

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
      'A notification banner with four semantic color variants, an automatic icon, an optional title, and an optional dismiss button. Rendered with role="alert" for screen readers.',
    importLine: "import { Alert } from 'velocityui'",
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
        code: `import { Alert } from 'velocityui'

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
import { Alert } from 'velocityui'

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
      'A modal dialog rendered with position:fixed, focus trapping, Escape-key close, and ARIA wiring. Supports compound sub-components Dialog.Header, Dialog.Body, and Dialog.Footer, plus four sizes.',
    importLine: "import { Dialog } from 'velocityui'",
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
import { Button, Dialog } from 'velocityui'

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
import { Button, Dialog, Badge } from 'velocityui'

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
      'An accessible tab component with keyboard navigation (Arrow keys, Home, End), three visual variants, and both controlled and uncontrolled modes.',
    importLine: "import { Tabs } from 'velocityui'",
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
        code: `import { Tabs } from 'velocityui'

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
      'Collapsible content sections with smooth CSS grid animation. Supports single or multiple open items, three visual variants, and both controlled and uncontrolled modes.',
    importLine: "import { Accordion } from 'velocityui'",
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
        code: `import { Accordion } from 'velocityui'

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
        code: `import { Accordion } from 'velocityui'

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
      'A lightweight tooltip that appears on hover and focus using aria-describedby for accessibility. Supports four placement directions and an optional show delay.',
    importLine: "import { Tooltip } from 'velocityui'",
    props: [
      { name: 'content', type: 'ReactNode', description: 'Tooltip body text or node.' },
      { name: 'children', type: 'ReactElement', description: 'The trigger element. Must be a single React element.' },
      { name: 'placement', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Preferred position of the tooltip relative to the trigger.' },
      { name: 'delay', type: 'number', default: '0', description: 'Delay in milliseconds before the tooltip appears.' },
    ],
    examples: [
      {
        title: 'Placements',
        code: `import { Tooltip, Button } from 'velocityui'

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
        code: `import { Tooltip, Button } from 'velocityui'

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
      'A horizontal or vertical separator line using role="separator". Supports an optional centered text label for section delineation.',
    importLine: "import { Divider } from 'velocityui'",
    props: [
      { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Direction of the separator line.' },
      { name: 'label', type: 'string', description: 'Optional centered text that splits the line.' },
    ],
    examples: [
      {
        title: 'Basic',
        code: `import { Divider } from 'velocityui'

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
        code: `import { Divider } from 'velocityui'

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
}
