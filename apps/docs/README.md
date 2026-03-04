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

- Components from `@clow99/velocityui`
- Styles from `@clow99/velocityui/dist/style.css`

## Key Paths

- `src/app/` - App Router pages
- `src/app/docs/[component]/page.tsx` - dynamic component docs route
- `src/lib/componentDocs.ts` - component metadata, props tables, and example snippets
- `src/components/docs/previews/` - interactive preview components
- `src/components/ThemeContext.tsx` - docs theme and density state

## Updating Component Docs

1. Add or update the component definition in `src/lib/componentDocs.ts`.
2. Update the matching preview component in `src/components/docs/previews/` if needed.
3. Verify the component route at `/docs/<component-slug>`.

## Docker Notes

The workspace `Dockerfile` builds this app in standalone mode when `NEXT_OUTPUT_STANDALONE=1` is set. Static assets are copied from `apps/docs/public`, and the server starts with:

```bash
node apps/docs/server.js
```
