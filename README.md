# VelocityUI

A React component library and documentation site with 46 components, 10 themes, 3 density scales, and 19 interactive page examples.

- **Library:** `packages/velocityui` — CSS Modules, TypeScript, ESM and CommonJS.
- **Docs:** `apps/docs` — Next.js, searchable component/example catalogs, live previews, and an AI agent guide.
- **Runtime dependencies:** React and React DOM only.

## Develop

Use Node.js 24+ and the pinned pnpm version (11.17.0).

```sh
pnpm install --frozen-lockfile
pnpm build:lib
pnpm dev
```

The documentation site defaults to http://localhost:3000. For an explicit local port:

```sh
pnpm --filter docs dev --hostname 127.0.0.1 --port 3002
```

Build the library again after library source or theme changes, or run `pnpm --filter @velocityuikit/velocityui dev` in another terminal to watch the library.

## Verify

| Command | Purpose |
| --- | --- |
| `pnpm build` | Build library declarations, JavaScript, CSS, and the production docs site |
| `pnpm build:lib` | Build only the published library |
| `pnpm lint` | Type-check both packages |
| `pnpm test` | Run component and interaction regression tests |
| `pnpm --filter @velocityuikit/velocityui test:coverage` | Generate a coverage report |
| `pnpm audit` | Check the dependency lockfile for known advisories |

Coverage reports are generated artifacts; the repository contains historical tracked reports. Avoid including regenerated reports in source changes.

## Use in your application

```sh
npm install @velocityuikit/velocityui
```

Import the stylesheet once at the application root, then use components in a React client component:

```tsx
'use client'

import '@velocityuikit/velocityui/dist/style.css'
import { Button, Card, Input } from '@velocityuikit/velocityui'

export function Example() {
  return (
    <Card>
      <Card.Body>
        <Input label="Email" type="email" placeholder="you@example.com" />
        <Button>Continue</Button>
      </Card.Body>
    </Card>
  )
}
```

React and React DOM 18 or later are peer dependencies. Toasts require `ToastProvider`; other components need no library provider. See the [library README](packages/velocityui/README.md) for exports.

## Themes

The default theme pairs neutral surfaces with a blue accent, soft shadows, and rounded controls. Midnight uses a charcoal palette with a periwinkle accent. Other presets: Ocean, Dark Cyan, Tangerine, Construction, Glass, Soft, High Contrast, and Monochrome Red.

Apply a theme and an optional density class:

```html
<body class="vui-theme-midnight vui-density-compact">
```

Override tokens after importing the library stylesheet:

```css
:root {
  --vui-primary: #315ddc;
  --vui-primary-hover: #244bc0;
  --vui-radius-md: 0.5rem;
}
```

Use the same selector as an active theme when overriding a token set by that theme.

## Documentation structure

- `src/lib/navigation.ts` — component and example catalog entries.
- `src/lib/themes.ts` — theme names and density options.
- `src/lib/componentDocs.ts` — component API references and code examples.
- `src/components/docs/previews` — interactive component previews.
- `src/components/SiteSearch.tsx` — global keyboard search across guides, components, and examples.
- `src/components/landing/ThemeShowcase.tsx` — interactive theme and density workspace with configuration export.
- `src/components/docs/ButtonPlayground.tsx` — configurable Button preview and copyable code.
- `src/app/refresh.css` — shared site design and responsive layouts.
- `src/app/workspace.css` — search, playgrounds, and documentation refinements.
- `public/downloads/velocityui-ai-guide.md` — downloadable integration guide.

Paths above are relative to `apps/docs`. Keep the catalog, public exports, and documentation in sync when adding components.

## Production

`pnpm build` creates a local production build. Start it with `pnpm --filter docs start`.

The Dockerfile builds the library and standalone docs app using Node.js 24 and the pinned pnpm version. Set `NEXT_OUTPUT_STANDALONE=1` to produce the standalone output outside Docker. Building locally does not publish npm packages or deploy the website.

## Contributing and security

See [CONTRIBUTING.md](CONTRIBUTING.md), [SECURITY.md](SECURITY.md), and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

[MIT](LICENSE).
