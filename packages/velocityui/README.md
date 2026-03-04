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

Use components in your app:

```tsx
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
- **Layout:** `Card`, `Divider`, `Accordion`, `Tabs`
- **Feedback:** `Alert`, `Spinner`, `Progress`, `ToastProvider`, `useToast`
- **Overlays:** `Dialog`, `Dropdown`, `Popover`, `Tooltip`
- **Navigation:** `Breadcrumb`, `Pagination`, `Stepper`

## Local Development

From the workspace root:

```bash
pnpm --filter velocityui build
```

Build output is written to `dist/`:

- `dist/index.js` — ESM bundle
- `dist/index.cjs` — CJS bundle
- `dist/index.d.ts` — TypeScript declarations
- `dist/style.css` — bundled component styles

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

## Contributing

See the root [CONTRIBUTING.md](../../CONTRIBUTING.md) for the full contribution guide.

## License

[MIT](../../LICENSE)
