# VelocityUI

An accessible React component library with scoped CSS Modules styles and full TypeScript support.

## Packages

| Package | Description |
|---|---|
| [`packages/velocityui`](./packages/velocityui) | Component library (published to npm) |
| [`apps/docs`](./apps/docs) | Documentation and demo site (Next.js) |

## Components

| Component | Description |
|---|---|
| `Button` | 5 variants, 3 sizes, loading state, icon slots |
| `Input` | Label, hint, error, icon slots, validation states |
| `Title` | Polymorphic heading (`h1`–`h6`) with independent size scale |
| `Badge` | 6 semantic color variants with optional dot indicator |
| `Card` | Compound container with `Card.Header`, `Card.Body`, `Card.Footer` |

See the [docs site](https://github.com/clow99/VelocityUI) for the full component catalog.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v20+
- [pnpm](https://pnpm.io/) v8+

### Install dependencies

```bash
pnpm install
```

### Run the docs site locally

```bash
pnpm dev
```

The docs site will be available at `http://localhost:3000`.

### Build the library

```bash
pnpm build:lib
```

Produces ESM (`dist/index.js`), CJS (`dist/index.cjs`), a CSS bundle (`dist/style.css`), and TypeScript declarations (`dist/index.d.ts`) in `packages/velocityui/dist/`.

### Build everything

```bash
pnpm build
```

Builds the library first, then the docs site.

## Usage

Install the library in your project:

```bash
npm install @velocityuikit/velocityui
```

Import the stylesheet once at the root of your app:

```tsx
import '@velocityuikit/velocityui/dist/style.css';
```

Then use components:

```tsx
import { Button, Input, Badge, Card, Title } from '@velocityuikit/velocityui';

export default function App() {
  return (
    <Card variant="shadow">
      <Card.Header>
        <Title as="h2">Welcome</Title>
      </Card.Header>
      <Card.Body>
        <Input label="Email" placeholder="you@example.com" />
        <Button variant="primary">Sign in</Button>
      </Card.Body>
    </Card>
  );
}
```

## Theming

VelocityUI uses CSS custom properties for theming. Override any token on `:root` in your global CSS:

```css
:root {
  --vui-color-primary: #6366f1;
  --vui-color-danger: #ef4444;
}
```

No rebuild required.

## Project Structure

```
VelocityUI/
├── apps/
│   └── docs/                  # Next.js documentation site
│       └── src/
│           ├── app/           # App Router pages
│           ├── components/    # Docs-specific UI components
│           └── lib/
│               └── componentDocs.ts  # Props tables and code examples
└── packages/
    └── velocityui/            # Component library
        └── src/
            ├── index.ts       # Public API barrel export
            └── components/
                ├── Button/
                ├── Input/
                ├── Title/
                ├── Badge/
                └── Card/
```

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the docs site in development mode |
| `pnpm build` | Build the library then the docs site |
| `pnpm build:lib` | Build only the component library |
| `pnpm lint` | Run type checking across all packages |

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development setup, code style, and the pull request process.

## Security

Report vulnerabilities privately — see [SECURITY.md](./SECURITY.md).

## License

[MIT](./LICENSE)
