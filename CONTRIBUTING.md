# Contributing to VelocityUI

Thank you for your interest in contributing. This document covers how to get your environment set up and how the contribution process works.

## Prerequisites

- [Node.js](https://nodejs.org/) v20+
- [pnpm](https://pnpm.io/) v8+

## Local Setup

```bash
git clone https://github.com/clow99/VelocityUI.git
cd VelocityUI
pnpm install
pnpm dev         # Start the docs site at http://localhost:3000
```

To build and watch the component library:

```bash
pnpm --filter velocityui dev
```

## Repository Structure

```
VelocityUI/
├── apps/docs/          # Next.js documentation and demo site
└── packages/velocityui/ # Published component library
```

## Making Changes

### Fixing a bug or adding a component

1. Open an issue describing the problem or feature before starting significant work.
2. Fork the repository and create a branch off `main` (`fix/my-bug` or `feat/my-component`).
3. Make your changes. If you are adding a new component, also add an entry in `apps/docs/src/lib/componentDocs.ts` and a preview component under `apps/docs/src/components/docs/previews/`.
4. Run the type checker before submitting:

   ```bash
   pnpm lint
   ```

5. Run the test suite:

   ```bash
   pnpm --filter velocityui test:run
   ```

6. Open a pull request against `main`. Fill in the template and link the related issue.

### Pull request requirements

- The PR description should explain *why* the change is needed, not just what changed.
- Keep each PR focused on a single concern. Split unrelated changes into separate PRs.
- All CI checks must pass before a PR can be merged.

## Code Style

- TypeScript strict mode is enforced across all packages. Do not disable rules to satisfy the checker.
- CSS uses CSS Modules. Add or modify only the file(s) for the component you are touching.
- Components must forward refs and spread remaining native HTML attributes (see existing components for the pattern).
- Avoid adding runtime dependencies unless there is a strong reason. The library ships zero dependencies beyond React.

## Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(button): add icon-only variant
fix(select): correct keyboard navigation wrap-around
docs: update Table component examples
chore: bump vitest to 4.x
```

## Reporting Issues

Use [GitHub Issues](https://github.com/clow99/VelocityUI/issues). Check whether your issue has already been reported before opening a new one.

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md). By participating you agree to abide by its terms.
