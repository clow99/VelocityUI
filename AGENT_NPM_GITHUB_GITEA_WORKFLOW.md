# Agent Playbook: npm Package Flow with Gitea + GitHub + npmjs

This document is written for another AI agent to implement the same package release workflow in a different project.

## Goal

Implement this end-to-end flow:

1. **Gitea** auto-bumps package version when files under the package path change.
2. **GitHub Actions** publishes that package to **GitHub Packages**.
3. **GitHub Actions** publishes that package to **npmjs**.
4. Publishing is **idempotent** (skip publish if the version already exists).

---

## Inputs You Must Collect First

Before editing anything, collect these values from the target repo and substitute placeholders in this playbook:

- `PACKAGE_DIR` (example: `packages/my-lib`)
- `PACKAGE_NAME` (from `PACKAGE_DIR/package.json`, example: `@myorg/my-lib`)
- `PACKAGE_BASENAME` (example: `my-lib`)
- `DEFAULT_BRANCH` (example: `main`)
- `NODE_VERSION` (use `20` unless repo requires another version)
- `BUILD_COMMAND` (example: `pnpm build:lib` or repo-specific package build command)
- `PACKAGE_CHANGE_GLOB` (example: `^packages/my-lib/`)

Also verify whether the repository is a monorepo and which package manager is used (`pnpm`, `npm`, or `yarn`).

---

## Required Repository Changes

### 1) Ensure package metadata is publish-ready

Update `PACKAGE_DIR/package.json` to include:

- correct `name`
- correct `version`
- `files` including build output (usually `dist`)
- `publishConfig` for npmjs if needed:

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
name: Auto bump package

on:
  push:
    branches:
      - DEFAULT_BRANCH

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

          if git diff --name-only "$RANGE" | grep -E 'PACKAGE_CHANGE_GLOB' > /dev/null; then
            echo "package_changed=true" >> "$GITHUB_OUTPUT"
          else
            echo "package_changed=false" >> "$GITHUB_OUTPUT"
          fi

      - name: Setup Node
        if: ${{ steps.changes.outputs.package_changed == 'true' }}
        uses: actions/setup-node@v4
        with:
          node-version: NODE_VERSION

      - name: Bump patch version
        if: ${{ steps.changes.outputs.package_changed == 'true' }}
        shell: bash
        run: |
          npm version patch --no-git-tag-version --prefix PACKAGE_DIR
          NEW_VERSION="$(node -p "require('./PACKAGE_DIR/package.json').version")"

          git config user.name "gitea-actions[bot]"
          git config user.email "gitea-actions[bot]@localhost"

          git add PACKAGE_DIR/package.json

          if git diff --cached --quiet; then
            echo "No version change to commit."
            exit 0
          fi

          git commit -m "chore(release): bump PACKAGE_BASENAME to v$NEW_VERSION [skip bump]"
          git push
```

Notes:
- Keep `[skip bump]` in the commit message to avoid infinite CI loops.
- Scope bumps only to package path changes.

---

### 3) Add GitHub workflow: publish to GitHub Packages

Create `.github/workflows/publish-github-packages.yml`:

```yaml
name: Publish package to GitHub Packages

on:
  push:
    branches:
      - DEFAULT_BRANCH

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
          node-version: NODE_VERSION
          registry-url: 'https://npm.pkg.github.com'
          scope: '@${{ github.repository_owner }}'

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
        run: BUILD_COMMAND

      - name: Normalize scope to repository owner
        working-directory: PACKAGE_DIR
        run: |
          OWNER_SCOPE="@${{ github.repository_owner }}"
          PACKAGE_BASENAME=$(node -p "JSON.parse(require('fs').readFileSync('./package.json','utf8')).name.split('/').pop()")
          TARGET_PACKAGE_NAME="${OWNER_SCOPE}/${PACKAGE_BASENAME}"
          npm pkg set name="$TARGET_PACKAGE_NAME"
          echo "Publishing package as $TARGET_PACKAGE_NAME"

      - name: Check if version already published
        id: version_check
        working-directory: PACKAGE_DIR
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
        working-directory: PACKAGE_DIR
        run: npm publish --registry https://npm.pkg.github.com
        env:
          NODE_AUTH_TOKEN: ${{ env.GH_PACKAGES_TOKEN }}
```

Why normalize scope:
- GitHub Packages requires package scope to align with the owner (`@owner/package`).

---

### 4) Add GitHub workflow: publish to npmjs

Create `.github/workflows/publish-npmjs.yml`:

```yaml
name: Publish package to npmjs

on:
  push:
    branches:
      - DEFAULT_BRANCH
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
          node-version: NODE_VERSION
          registry-url: 'https://registry.npmjs.org'

      - name: Install package manager
        run: npm install -g pnpm

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build package
        run: BUILD_COMMAND

      - name: Check if version already published
        id: version_check
        working-directory: PACKAGE_DIR
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
        working-directory: PACKAGE_DIR
        run: |
          echo "//registry.npmjs.org/:_authToken=${{ secrets.NPM_TOKEN }}" >> ~/.npmrc
          npm publish --access public --provenance --registry https://registry.npmjs.org
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

---

## Secrets and Settings to Configure

In GitHub repository settings:

- `NPM_TOKEN`: npm automation token with publish permissions.
- `GITHUB_TOKEN`: default Actions token is usually enough for GitHub Packages publish (with `packages: write` permissions).

In npm package settings:

- Ensure package visibility/access matches your intention (`public` vs scoped/private).

Never commit tokens or credentials into repo files.

---

## Validation Checklist (Agent Must Execute)

1. Run local build command successfully.
2. Push a change under `PACKAGE_DIR` and verify Gitea creates a bump commit.
3. Verify bump commit includes `[skip bump]`.
4. Confirm GitHub Actions run:
   - GitHub Packages publish workflow
   - npmjs publish workflow
5. Re-run on same version and confirm publish jobs skip due to `already_published=true`.
6. Confirm resulting package versions on:
   - `https://npmjs.com/package/PACKAGE_NAME`
   - `https://github.com/OWNER/REPO/packages`

---

## Common Pitfalls

- Package name scope mismatch for GitHub Packages (`@owner/package` required).
- Missing `NPM_TOKEN` secret.
- Build command not producing publishable `dist` content.
- Gitea bump workflow triggering recursively (fix with `[skip bump]` guard).
- Version not changed before publish, causing repeated no-op publishes.

---

## Minimal Done Criteria

Implementation is complete only when all are true:

- Gitea auto-bumps package version on package changes.
- GitHub publishes to GitHub Packages successfully.
- GitHub publishes to npmjs successfully.
- Both publish workflows skip safely when the version already exists.
- No secrets are committed in source control.
