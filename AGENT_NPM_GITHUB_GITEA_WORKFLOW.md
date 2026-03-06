# Agent Playbook: VelocityUI npm Flow with Gitea + GitHub + npmjs

This document is now tailored to the current `VelocityUI` repo and its package release flow, including the newer animation-related components that ship from the same library package (`AnimatedBackground`, `GradientOrbs`, `GridGlow`, and related UI updates).

## Goal

Implement this end-to-end flow for `@velocityuikit/velocityui`:

1. **Gitea** auto-bumps the package version when files under `packages/velocityui` change.
2. **GitHub Actions** publishes that package to **GitHub Packages**.
3. **GitHub Actions** publishes that package to **npmjs**.
4. Publishing is **idempotent** and safely skips if that version already exists.

---

## Resolved Repo Inputs

Use these concrete values for this repository:

- `PACKAGE_DIR=packages/velocityui`
- `PACKAGE_NAME=@velocityuikit/velocityui`
- `PACKAGE_BASENAME=velocityui`
- `DEFAULT_BRANCH=main`
- `NODE_VERSION=20`
- `BUILD_COMMAND=pnpm build:lib`
- `PACKAGE_CHANGE_GLOB=^packages/velocityui/`
- package manager: `pnpm`
- repo shape: monorepo

Why this matters:

- The new animation components are part of the same publishable package, so any source changes under `packages/velocityui` should trigger the version bump and release flow.
- `@velocityuikit/velocityui` is the npmjs package name, but GitHub Packages still requires publishing under the repository owner scope.

---

## Required Repository Changes

### 1) Ensure package metadata is publish-ready

Verify `packages/velocityui/package.json` includes:

- `name: "@velocityuikit/velocityui"`
- a valid semver `version`
- `files` including the built `dist` output
- npm publish config:

```json
"publishConfig": {
  "registry": "https://registry.npmjs.org",
  "access": "public"
}
```

Do not hardcode secrets or tokens in any file.

---

### 2) Add Gitea workflow for automatic version bump

Create `.gitea/workflows/auto-bump-package.yml`:

```yaml
name: Auto bump velocityui package

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  bump-version:
    if: ${{ !contains(gitea.event.head_commit.message, '[skip bump]') }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Detect package changes
        id: changes
        shell: bash
        run: |
          BEFORE_SHA="${{ gitea.event.before }}"
          AFTER_SHA="${{ gitea.sha }}"

          if [[ "$BEFORE_SHA" == "0000000000000000000000000000000000000000" ]]; then
            RANGE="$AFTER_SHA^..$AFTER_SHA"
          else
            RANGE="$BEFORE_SHA..$AFTER_SHA"
          fi

          if git diff --name-only "$RANGE" | grep -E '^packages/velocityui/' > /dev/null; then
            echo "package_changed=true" >> "$GITHUB_OUTPUT"
          else
            echo "package_changed=false" >> "$GITHUB_OUTPUT"
          fi

      - name: Setup Node
        if: ${{ steps.changes.outputs.package_changed == 'true' }}
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Bump patch version
        if: ${{ steps.changes.outputs.package_changed == 'true' }}
        shell: bash
        run: |
          npm version patch --no-git-tag-version --prefix packages/velocityui
          NEW_VERSION="$(node -p "require('./packages/velocityui/package.json').version")"

          git config user.name "gitea-actions[bot]"
          git config user.email "gitea-actions[bot]@localhost"

          git add packages/velocityui/package.json

          if git diff --cached --quiet; then
            echo "No version change to commit."
            exit 0
          fi

          git commit -m "chore(release): bump velocityui to v$NEW_VERSION [skip bump]"
          git push
```

Notes:

- Keep `[skip bump]` in the commit message to avoid infinite CI loops.
- Scope bumps only to `packages/velocityui/**` changes.
- This automatically covers the newer animation components because they ship from that same package path.

---

### 3) Add GitHub workflow: publish to GitHub Packages

Create `.github/workflows/publish-github-packages.yml`:

```yaml
name: Publish velocityui to GitHub Packages

on:
  push:
    branches:
      - main

jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    env:
      GH_PACKAGES_TOKEN: ${{ secrets.GITHUB_TOKEN }}

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          registry-url: "https://npm.pkg.github.com"
          scope: "@${{ github.repository_owner }}"

      - name: Verify auth token exists
        run: |
          if [ -z "$GH_PACKAGES_TOKEN" ]; then
            echo "No package token available."
            exit 1
          fi

      - name: Verify npm auth
        run: npm whoami --registry https://npm.pkg.github.com
        env:
          NODE_AUTH_TOKEN: ${{ env.GH_PACKAGES_TOKEN }}

      - name: Install package manager
        run: npm install -g pnpm

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build package
        run: pnpm build:lib

      - name: Normalize scope to repository owner
        working-directory: packages/velocityui
        run: |
          OWNER_SCOPE="@${{ github.repository_owner }}"
          PACKAGE_BASENAME=$(node -p "JSON.parse(require('fs').readFileSync('./package.json','utf8')).name.split('/').pop()")
          TARGET_PACKAGE_NAME="${OWNER_SCOPE}/${PACKAGE_BASENAME}"
          npm pkg set name="$TARGET_PACKAGE_NAME"
          echo "Publishing package as $TARGET_PACKAGE_NAME"

      - name: Check if version already published
        id: version_check
        working-directory: packages/velocityui
        run: |
          PACKAGE_NAME=$(node -p "JSON.parse(require('fs').readFileSync('./package.json','utf8')).name")
          VERSION=$(node -p "JSON.parse(require('fs').readFileSync('./package.json','utf8')).version")
          echo "package_name=$PACKAGE_NAME" >> "$GITHUB_OUTPUT"
          echo "version=$VERSION" >> "$GITHUB_OUTPUT"
          if npm view "$PACKAGE_NAME@$VERSION" --registry https://npm.pkg.github.com 2>/dev/null; then
            echo "already_published=true" >> "$GITHUB_OUTPUT"
          else
            echo "already_published=false" >> "$GITHUB_OUTPUT"
          fi
        env:
          NODE_AUTH_TOKEN: ${{ env.GH_PACKAGES_TOKEN }}

      - name: Publish to GitHub Packages
        if: steps.version_check.outputs.already_published == 'false'
        working-directory: packages/velocityui
        run: npm publish --registry https://npm.pkg.github.com
        env:
          NODE_AUTH_TOKEN: ${{ env.GH_PACKAGES_TOKEN }}
```

Why normalize scope:

- GitHub Packages requires the package scope to match the repo owner (`@owner/package`).
- The npmjs package name remains `@velocityuikit/velocityui`, so the GitHub Packages workflow needs this temporary scope rewrite before publish.

---

### 4) Add GitHub workflow: publish to npmjs

Create `.github/workflows/publish-npmjs.yml`:

```yaml
name: Publish velocityui to npmjs

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      id-token: write

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          registry-url: "https://registry.npmjs.org"

      - name: Install package manager
        run: npm install -g pnpm

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build package
        run: pnpm build:lib

      - name: Check if version already published
        id: version_check
        working-directory: packages/velocityui
        run: |
          PACKAGE_NAME=$(node -p "JSON.parse(require('fs').readFileSync('./package.json','utf8')).name")
          VERSION=$(node -p "JSON.parse(require('fs').readFileSync('./package.json','utf8')).version")
          echo "package_name=$PACKAGE_NAME" >> "$GITHUB_OUTPUT"
          echo "version=$VERSION" >> "$GITHUB_OUTPUT"
          if npm view "$PACKAGE_NAME@$VERSION" --registry https://registry.npmjs.org 2>/dev/null; then
            echo "already_published=true" >> "$GITHUB_OUTPUT"
          else
            echo "already_published=false" >> "$GITHUB_OUTPUT"
          fi
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}

      - name: Publish to npmjs
        if: steps.version_check.outputs.already_published == 'false'
        working-directory: packages/velocityui
        run: |
          echo "//registry.npmjs.org/:_authToken=${{ secrets.NPM_TOKEN }}" >> ~/.npmrc
          npm publish --access public --provenance --registry https://registry.npmjs.org
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

---

## Secrets and Settings to Configure

In GitHub repository settings:

- `NPM_TOKEN`: npm automation token with publish permissions for `@velocityuikit/velocityui`.
- `GITHUB_TOKEN`: the default Actions token is usually enough for GitHub Packages publishing when `packages: write` permission is present.

In npm package settings:

- Ensure package visibility/access matches your intention (`public` vs scoped/private).

Never commit tokens or credentials into repo files.

---

## Validation Checklist (Agent Must Execute)

1. Run `pnpm build:lib` successfully.
2. Push a change under `packages/velocityui` and verify Gitea creates a bump commit.
3. Verify the bump commit includes `[skip bump]`.
4. Confirm GitHub Actions run:
   - GitHub Packages publish workflow
   - npmjs publish workflow
5. Re-run on the same version and confirm publish jobs skip because `already_published=true`.
6. Confirm the resulting package versions for the current library release, including animation-related additions, on:
   - `https://npmjs.com/package/@velocityuikit/velocityui`
   - `https://github.com/clow99/VelocityUI/packages`

---

## Common Pitfalls

- Package name scope mismatch for GitHub Packages (`@owner/package` is required there).
- Missing `NPM_TOKEN` secret.
- `pnpm build:lib` not producing publishable `dist` output.
- Gitea bump workflow triggering recursively without the `[skip bump]` guard.
- Version not changing before publish, causing repeated no-op publish attempts.
- Forgetting that the newer animation components are part of the same `velocityui` package, not a separate publish target.

---

## Minimal Done Criteria

Implementation is complete only when all are true:

- Gitea auto-bumps `packages/velocityui` on package changes.
- GitHub publishes `@velocityuikit/velocityui` to GitHub Packages successfully.
- GitHub publishes `@velocityuikit/velocityui` to npmjs successfully.
- Both publish workflows skip safely when the version already exists.
- No secrets are committed in source control.
