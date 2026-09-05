# VelocityUI Docs App

Documentation and demo site for VelocityUI, built with Next.js App Router.

## What This App Contains

- Landing page and component documentation routes
- Live examples for each exported UI component
- Theme and density switching persisted in local storage
- Static assets for favicon and PWA metadata under `public/`

## Local Development

From the workspace root:

```bash
pnpm --filter docs dev
```

Or from this folder:

```bash
pnpm dev
```

The app runs on `http://localhost:3000` by default.

## Build

From the workspace root:

```bash
pnpm --filter docs build
```

Or from this folder:

```bash
pnpm build
```

For production runtime:

```bash
pnpm start
```

## Library Dependency

This app consumes the workspace library package and imports:

- Components from `@velocityuikit/velocityui`
- Styles from `@velocityuikit/velocityui/dist/style.css`

Build the library before building or running the docs app if you are working outside of the workspace dev script:

```bash
pnpm --filter @velocityuikit/velocityui build
```

## Key Paths

- `src/app/` — App Router pages
- `src/app/docs/[component]/page.tsx` — dynamic component docs route
- `src/lib/componentDocs.ts` — component metadata, props tables, and example snippets
- `src/components/docs/previews/` — interactive preview components
- `src/components/ThemeContext.tsx` — docs theme and density state
- `src/components/docs/DocsSidebar.tsx` — sidebar navigation and shared component/example taxonomy

## Updating Component Docs

1. Add or update the component definition in `src/lib/componentDocs.ts`.
2. Update the matching preview component in `src/components/docs/previews/` if needed.
3. Verify the component route at `/docs/<component-slug>`.

## Logo and App Icons

`public/logo.svg` is the shared artwork for the header, footer, and SVG favicon: a vector refinement of the original purple-and-cyan folded mark preserved in `public/new_logo.png`. Keep the wordmark as live text so it inherits the selected theme and stays accessible.

After editing the SVG, run `pnpm --filter docs brand:icons` from the workspace root to regenerate the ICO, PNG favicons, Apple touch icon, and Android icons. The generator uses Next.js's installed Sharp dependency. Update the icon cache version in `src/app/layout.tsx` and `public/site.webmanifest` when replacing published icons.

## Example Gallery Previews

The gallery and example picker use lightweight WebP captures of the actual demo pages, shared with the homepage. Descriptions and feature tags live in `src/lib/examples.ts`; the page inventory remains in `src/lib/navigation.ts`.

To refresh previews after changing a demo, start the local server on port 3000 and run these commands from the workspace root:

```bash
npx --yes --package @playwright/cli playwright-cli -s=example-captures open http://127.0.0.1:3000/examples
npx --yes --package @playwright/cli playwright-cli -s=example-captures run-code --filename apps/docs/scripts/capture-example-previews.js
node apps/docs/scripts/optimize-example-previews.mjs
npx --yes --package @playwright/cli playwright-cli -s=example-captures close
```

Inspect the generated previews before committing them. Raw PNG captures stay in the ignored `output/playwright/example-captures/` folder. WebP files in `public/examples/previews/` are the shipped assets; below-the-fold gallery images load lazily.

## Docker

The workspace `Dockerfile` builds this app in standalone mode when `NEXT_OUTPUT_STANDALONE=1` is set. Static assets are copied from `apps/docs/public`, and the server starts with:

```bash
node apps/docs/server.js
```

## Contributing

See the root [CONTRIBUTING.md](../../CONTRIBUTING.md).
