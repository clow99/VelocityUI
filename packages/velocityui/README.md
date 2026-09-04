# @velocityuikit/velocityui

Accessible React UI components with scoped CSS Modules styles and TypeScript support.

## Install

```bash
npm install @velocityuikit/velocityui
```

Peer dependencies:

- `react` >= 18
- `react-dom` >= 18

## Usage

Import the stylesheet once at your app root:

```tsx
import '@velocityuikit/velocityui/dist/style.css'
```

Use components in your app. In Next.js App Router, add a client boundary to components using state, event handlers, or compound APIs such as `Card.Body`:

```tsx
'use client'

import { Button, Card, Input, Title } from '@velocityuikit/velocityui'

export function Example() {
  return (
    <Card variant="shadow">
      <Card.Header>
        <Title as="h2">Welcome</Title>
      </Card.Header>
      <Card.Body>
        <Input label="Email" placeholder="you@example.com" />
        <Button>Continue</Button>
      </Card.Body>
    </Card>
  )
}
```

## Available Exports

- **Forms:** `Button`, `Input`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`, `NumberInput`, `FileUpload`
- **Display:** `Title`, `Badge`, `Avatar`, `Tag`, `EmptyState`, `Skeleton`, `Table`
- **Layout:** `Card`, `Divider`, `AnimatedBackground`, `GradientOrbs`, `GridGlow`
- **Feedback:** `Alert`, `Spinner`, `Progress`, `ToastProvider`, `useToast`
- **Overlays:** `Dialog`, `Dropdown`, `Popover`, `Tooltip`
- **Navigation:** `Breadcrumb`, `Pagination`, `Stepper`, `Accordion`, `Tabs`
- **Chat:** `ChatBubble`, `ChatInput`, `ChatList`, `ChatWindow`, `ChatHeader`, `TypingIndicator`, `ChatTimestamp`, `ChatReaction`, `ChatAttachment`, `ChatStatus`, `ChatThread`

## Local Development

From the workspace root:

```bash
pnpm --filter @velocityuikit/velocityui build
```

Build output is written to `dist/`:

- `dist/index.js` — ESM bundle
- `dist/index.cjs` — CJS bundle
- `dist/index.d.ts` — TypeScript declarations
- `dist/style.css` — bundled component styles

Watch mode:

```bash
pnpm --filter @velocityuikit/velocityui dev
```

Typecheck:

```bash
pnpm --filter @velocityuikit/velocityui lint
```

Run tests:

```bash
pnpm --filter @velocityuikit/velocityui test
pnpm --filter @velocityuikit/velocityui test:run
```

## Component patterns

The same primitives also support richer compositions:

- `Avatar` supplies stable colors from names (`tone="auto"`), explicit color tones, an optional `ring`, and online/away/busy/offline presence. `Avatar.Group` overlaps its Avatar children, accepts `size` and `max`, and gives hidden members an accessible overflow label.
- `Button` includes a quieter `variant="soft"` and square-footprint `iconOnly` actions. Always provide `aria-label` for an icon-only button; native `aria-pressed` communicates toggle state.
- `Badge` separates semantic `variant` from `appearance="soft" | "outline" | "solid"`.
- `Input` supports `leadingAddon` and `trailingAddon` for prefixes, currencies, and units. Add-ons are described to assistive technology and excluded from the submitted value.
- `SelectOption` accepts optional `icon` and `description` alongside its string label and value.
- `RadioGroup variant="cards"` supports descriptions, icons, and metadata while retaining native radio behavior. `Checkbox variant="card"` offers the corresponding multiple-selection treatment.

```tsx
<Avatar.Group max={3} size="sm" aria-label="Project contributors">
  <Avatar name="Maya Chen" tone="violet" />
  <Avatar name="Alex Morgan" tone="blue" />
  <Avatar name="Sam Rivera" tone="emerald" />
  <Avatar name="Jamie Parker" />
</Avatar.Group>

<Input label="Website" name="slug" leadingAddon="https://" trailingAddon=".design" />
```

## Contributing

See the root [CONTRIBUTING.md](../../CONTRIBUTING.md) for the full contribution guide.

## License

[MIT](../../LICENSE)
