# VelocityUI refresh — September 3, 2026

## Delivered

- Rebuilt the home page with a light evergreen design, interactive component previews, theme exploration, installation commands, and example navigation.
- Removed SnapForge and StatusForge showcase entries as requested.
- Added searchable component and example indexes at /docs and /examples.
- Centralized the inventory: 46 components, 10 themes, and 19 examples.
- Reworked navigation, documentation previews, code panels, footer, and mobile layouts.
- Replaced the fixed example sidebar with a compact example selector and previous/next navigation.
- Fixed narrow-screen chat layouts, added a mobile conversation picker and member panel, and contained overflowing tab lists.
- Refreshed the library's default theme, borders, and shadows; explicit default-theme scopes now reset inherited theme tokens.
- Fixed duplicate control/tab IDs, stale accessible descriptions, dialog focus resets, toast hydration, and the AI chat's initial timestamp mismatch.
- Added clipboard failure feedback and reduced-motion support for the site's animation example.
- Corrected stale counts, theme tokens, theme instructions, and package build commands in documentation and the downloadable AI guide.
- Updated compatible dependencies, including Next.js 16.3.4, Vite 7.3.6, and Vitest 4.1.11.
- Removed duplicate declaration-generation tooling, preserved emitted TypeScript declarations, added the bundled client directive, pinned pnpm, and refreshed the Docker build setup.

## Verification

- Production build passed: all 74 generated routes.
- Type checking passed during the production build.
- 38 component and regression tests passed.
- All 46 component pages and 19 examples checked in the browser at desktop and mobile widths.
- Rechecked repaired layouts: no page-width overflow on the affected inputs, settings, analytics, or animated-background pages.
- Verified search, empty results, package-manager switching/copy feedback, theme/density switching and persistence, mobile navigation, dialog open/close, conversation switching/sending, member panel, and toast dismissal.
- All 10 theme presets fit the desktop viewport. The three density modes produced distinct control heights.
- Rechecked the toast and AI chat production routes after hydration repairs; no new browser errors.
- git diff --check passed.

## Dependency audit limitation

The initial audit reported 86 findings. After compatible dependency updates and removing the redundant declaration plugin, the next completed audit reported two high-severity Browserslist advisories. The lockfile now resolves Browserslist 4.28.8, beyond their required patch version of 4.28.7.

Subsequent complete registry audit requests timed out, including a bounded direct request to the public npm audit endpoint. A final clean audit result is therefore **not confirmed**. Run pnpm audit again when the registry responds.

## Delivery state

The production preview is running at http://127.0.0.1:3003. The temporary development server was stopped.

Changes are local and uncommitted. No source push, npm publication, website deployment, or Docker deployment was performed. The Docker configuration was updated, but a container build was not run.

Next.js generated apps/docs/AGENTS.md and apps/docs/CLAUDE.md during development. Existing tracked distribution files were rebuilt; generated coverage changes were restored to avoid unrelated report churn.

---

# Adoption and design review — September 4, 2026

## Review findings and improvements

The evergreen direction is retained. The follow-up addresses small navigation/demo typography, missing global discovery, limited theme configuration, plain code samples, misleading installation guidance, and keyboard/form integration defects.

- Increased small site typography, improved mobile action layouts, and added Cameron Low attribution with links to cameronlow.com. Added package author and MIT license metadata.
- Added global documentation/example search with Ctrl/Cmd+K, aliases such as "modal", keyboard navigation, focus containment/restoration, empty results, scroll locking, and a bounded layout for short mobile viewports.
- Replaced the swatch-only theme section with an interactive workspace: ten palettes, three density settings, a real component form, saved browser preferences, and copyable React configuration.
- Added a Button playground with variant, size, loading and disabled controls, reset, click feedback, and matching copyable code.
- Added server-rendered Shiki syntax highlighting and component source links. Shiki belongs to the documentation app; it adds no runtime dependency to the library package.
- Corrected Next.js client-boundary instructions, compound-component examples, stylesheet setup, ToastProvider requirements, and the previously incomplete browser CDN instructions. Updated the library README and downloadable agent guide.
- Repaired Dropdown arrow/Home/End navigation, typeahead, disabled-item handling, trigger semantics and focus restoration.
- Repaired Select instance IDs, visible-control labeling/descriptions, active-option announcements, placeholder preservation, Home/End/Tab behavior, native form reset and forwarded focus.
- Isolated RadioGroup IDs across forms and repaired Tooltip Escape dismissal, description composition and timer cleanup.

## Verification

- 45 library tests pass, including seven new keyboard, labeling, form and focus regression tests.
- Library build and docs production build pass; Next.js generates all 74 routes.
- Type checking passes for both packages. `git diff --check` passes with the checkout's normal line-ending configuration.
- All 72 public routes rendered at 1440px and 390px widths: 144 page visits with no page-level horizontal overflow, duplicate IDs or JavaScript runtime errors. This is route/layout coverage, not a claim that every example action was exhaustively tested.
- 38 focused browser assertions cover search, focus, empty results, alias navigation, Button states, clipboard contents, ten themes, persistence, mobile navigation and reduced motion. Additional short-viewport search check: results scroll internally and the dialog stays inside a 390 × 480 viewport.
- Density controls produce actual input heights of 36px, 40px and 44px.
- Packed the local library and installed it into a separate Vite application using React 19.2.8. Production build and browser checks for forms, selects, toasts, dropdowns and CSS pass. CommonJS loads 47 runtime exports. Vite reports its expected ignored `use client` directive warning in this client-only build; the consumer fixture's missing favicon is unrelated to library behavior.
- The completed pnpm dependency audit reports zero vulnerabilities, resolving the earlier audit uncertainty.
- Browser evidence and review scripts are under `output/playwright/` (ignored), including desktop/mobile views and the separate consumer app screenshot. Temporary consumer files and server logs are under `%TEMP%/velocityui-review`.

## Review and release state

Development preview: http://127.0.0.1:3000. The server uses this exact checkout and is bound to loopback.

All improvements are local and uncommitted. Existing refresh work is preserved. No npm release, source push, production deployment, or change to the cameronlow.com repository was made. The registry currently exposes version 0.1.19; these local changes are not in that published package. Publishing the refreshed package and documentation, and linking the project from the portfolio, remain separate delivery steps after design review. Browser verification here used Chromium; a full screen-reader and cross-browser acceptance pass remains appropriate before claiming accessibility certification.

Design/developer-experience references: [Radix Themes setup](https://www.radix-ui.com/themes/docs/overview/getting-started), [Base UI quick start](https://base-ui.com/react/overview/quick-start), [shadcn/ui introduction](https://ui.shadcn.com/docs). These informed the focus on clear setup, discoverability and live customization; VelocityUI retains its own design and package API.

---

# Component style refinement — September 4, 2026

Cameron selected [Beautiful UI](https://www.beautifului.dev/) as the preferred visual reference. This pass supersedes the evergreen default described above with neutral surfaces, restrained blue accents, softer depth, pill controls, and compact component compositions. No reference copy or assets were copied.

- Refined the library's Default and Midnight tokens, with off-white and charcoal surfaces respectively. Updated theme swatches, descriptions, README examples, and the downloadable guide to match.
- Refined buttons, tabs, pagination, cards, fields, select menus, overlays, and chat composers. Removed the select's hardcoded lavender styling so it follows each theme consistently.
- Added an interactive homepage workspace built from library components, with task completion, filtered tabs, and a composer that creates tasks.
- Replaced the pagination preview with a working component-file browser. All pagination examples now respond to navigation. Added explicit button types so pagination inside a form does not submit it.
- Updated documentation preview surfaces and responsive layouts to carry the same visual direction.

## Verification

- 46 library tests pass, including a new pagination-in-form regression test. Both package type checks and the complete production build pass.
- All 72 public routes checked again at 1440px and 390px: 144 page visits with no page-level horizontal overflow, duplicate IDs, or JavaScript runtime errors. The avatar fallback demo deliberately requests a broken image; that expected resource error is separate from runtime errors.
- 48 focused route/theme/viewport checks cover 12 representative pages in Default and Midnight at desktop and mobile widths. Workspace task creation, completion, and pagination interactions pass.
- Browser evidence is saved under the ignored `output/playwright/` directory.

The local development preview remains at http://127.0.0.1:3000, with the updated pagination at http://127.0.0.1:3000/docs/pagination. Changes remain uncommitted and unpublished.

## Unified SVG identity

The final identity refines the original purple-and-cyan folded mark in `apps/docs/public/new_logo.png`. Cameron preferred its character to the proposed monochrome V. The SVG redraw preserves the swept wings, curved folds, and dimensional gradients, with clean scalable edges and a transparent background. The original raster artwork remains preserved.

`apps/docs/public/logo.svg` supplies the header, footer, and SVG favicon directly. Regenerated the ICO, PNG, Apple, and Android icons from that file and added `pnpm --filter docs brand:icons` to keep them synchronized. Filled in the web manifest's app identity and versioned existing icon URLs to refresh browser caches. The header and footer use a 36px mark so the folded details remain clear.

The docs type check and production build pass. Verified both logo placements at desktop/mobile widths in Default and Midnight, checked all eight asset/manifest URLs, and confirmed the ICO's 16px and 32px images exactly match their generated PNG counterparts. No browser runtime errors occurred during the focused checks.

---

# Richer components and product patterns — September 4, 2026

Refined nine components and replaced their isolated previews with interactive compositions. The package contains the new capabilities; the docs demonstrate how to combine them.

- Avatar: deterministic identity colors, explicit tones, optional rings, busy presence, an unclipped status indicator, and `Avatar.Group` with accessible overflow names. A changed image source can recover after a previous image fails. Homepage team previews now use the actual grouped component.
- Button: soft emphasis, compact icon-only actions, pressed-state styling, and tactile feedback that respects reduced motion. Icon-only loading replaces the glyph with one spinner while preserving its accessible name.
- Badge: soft, outline, and solid appearances independently of semantic color; refined dot and icon alignment.
- Input: attached prefixes and suffixes with native submitted values, combined accessible descriptions, and consistent focus/error treatment. Added project details and validation previews.
- Select: optional option icons and descriptions, demonstrated with people, roles, priorities, and workspaces. String labels and native select values remain intact.
- RadioGroup and Checkbox: full selectable cards, with descriptions and native keyboard/form behavior. Radio cards also accept icons and metadata.
- Card: responsive footers, consistent theme text, and reduced-motion hover behavior. New project/release-review and profile/follow compositions demonstrate actual state changes.
- Switch: refined track/thumb treatment and a native input covering the visible switch for pointer and accessibility targeting. Added a live preference panel.
- Updated API tables, copyable examples, package README, and the downloadable guide. No runtime dependency was added.
- Fixed a first-load navigation race: the mobile menu now resets only when the route changes, rather than also resetting an early click during initial hydration.

## Verification and review

- All 53 library tests pass, including seven new behavior checks for the richer patterns.
- Package and documentation production builds pass, with all 74 generated routes. `git diff --check` passes.
- All 72 public routes checked at 1440px and 390px: no page-level horizontal overflow, duplicate IDs, or JavaScript runtime errors.
- The shared interaction pass covers 38 assertions for search, keyboard/focus, code copying, all ten themes, three densities, preference persistence, mobile navigation, and reduced motion.
- The final component pass covers 20 focused interactions and 54 route/theme/viewport combinations: nine updated previews in Default and Midnight at 1440px, 900px, and 390px. No layout findings or runtime errors. It also confirms a usable editable region inside input add-ons and visible avatar presence/ring geometry.

Dev review remains at http://127.0.0.1:3000/docs/avatar. Also review `/docs/card`, `/docs/select`, `/docs/radiogroup`, and `/docs/checkbox`. Changes are local, uncommitted, and unpublished.

## Appearance menu refinement — September 4, 2026

Replaced the header's two plain dropdowns with a dedicated appearance popover. Ten miniature theme previews show the actual palette, with readable names, short descriptions, and a selected indicator. Three illustrated density options apply immediately across the site. Preferences remain persistent, with a reset action that retains focus when returning to defaults.

The nonmodal dialog supports native radio arrow keys, visible keyboard focus, Escape and close-button focus restoration, outside-click dismissal, and Tab exit. Mobile navigation and appearance remain mutually exclusive. Short screens scroll the choices while keeping the header and footer available. Removed obsolete menu styles and fixed the homepage grid's minimum-content overflow at 320px.

Verification: 85 browser assertions pass, including all ten themes, real control heights of 36/40/44px for the three densities, persistence, reset, keyboard behavior, reduced motion, and reading-position preservation. Layout checks cover Default, Midnight, and Glass at six viewport sizes from 320px to 1440px, including a 480px-tall screen. No horizontal page overflow or browser runtime errors. The docs type check and production build pass with all 74 routes generated.

The refreshed menu is open in the existing in-app homepage preview at http://127.0.0.1:3000/. Changes remain local, uncommitted, and unpublished.
