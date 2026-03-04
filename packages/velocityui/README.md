# @velocityuikit/velocityui

Modern, accessible React UI components with scoped styles and TypeScript support.

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

Use components in your app:

```tsx
import { Button, Card, Input, Title } from '@velocityuikit/velocityui'

export function Example() {
  return (
    <Card variant="shadow">
      <Card.Header>
        <Title level="h2">Welcome</Title>
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

The library exports all components from `src/index.ts`, including:

- Form/input: `Input`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`, `NumberInput`, `FileUpload`
- Layout/content: `Card`, `Title`, `Badge`, `Alert`, `Divider`, `Accordion`, `Tabs`, `Table`
- Feedback/overlay: `Tooltip`, `Dialog`, `Popover`, `Dropdown`, `Spinner`, `Skeleton`, `Progress`, `ToastProvider`, `useToast`
- Navigation/misc: `Avatar`, `Tag`, `EmptyState`, `Breadcrumb`, `Pagination`, `Stepper`

## Local Development

From the workspace root:

```bash
pnpm --filter velocityui build
```

Build output is written to `dist/`:

- `dist/index.js` (ESM)
- `dist/index.cjs` (CJS)
- `dist/index.d.ts` (types)
- `dist/style.css` (bundled styles)

Watch mode:

```bash
pnpm --filter velocityui dev
```

Typecheck:

```bash
pnpm --filter velocityui lint
```

Run tests:

```bash
pnpm --filter velocityui test
pnpm --filter velocityui test:run
```
