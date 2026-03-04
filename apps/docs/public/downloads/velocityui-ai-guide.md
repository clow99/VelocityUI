# VelocityUI — AI Agent Usage Guide

> This document is written for AI coding agents (Copilot, Cursor, Claude, GPT, etc.) that are asked to build, modify, or extend React applications using the **VelocityUI** component library.

Package name: `@velocityuikit/velocityui`
Version: `0.1.x`
Source: https://github.com/clow99/VelocityUI

---

## 1. Setup Baseline

### Install

```bash
npm install @velocityuikit/velocityui
# or
pnpm add @velocityuikit/velocityui
```

### Required CSS Import

Import the stylesheet **once** at your application root (e.g. `_app.tsx`, `layout.tsx`, `main.tsx`). Without it, components render with no styling.

```tsx
import '@velocityuikit/velocityui/dist/style.css';
```

### Typical Root Setup

```tsx
// app/layout.tsx (Next.js App Router)
import '@velocityuikit/velocityui/dist/style.css';
import { ToastProvider } from '@velocityuikit/velocityui';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
```

> **Rule:** Always add `ToastProvider` at the root if the application uses the `Toast` / `useToast()` API anywhere in the tree. Calling `useToast()` outside a provider will throw.

---

## 2. Component Reference

All components are exported from a single entry point:

```tsx
import { Button, Input, Card, Badge, ... } from '@velocityuikit/velocityui';
```

### Forms

| Component | Import | Key Props |
|---|---|---|
| `Button` | `{ Button }` | `variant`, `size`, `loading`, `fullWidth`, `leftIcon`, `rightIcon`, `disabled` |
| `Input` | `{ Input }` | `label`, `size`, `error`, `hint`, `leftIcon`, `rightIcon`, `search`, `required`, `fullWidth` |
| `Textarea` | `{ Textarea }` | `label`, `size`, `error`, `hint`, `resize`, `required`, `fullWidth` |
| `Select` | `{ Select }` | `label`, `options`, `placeholder`, `error`, `hint`, `size`, `required`, `fullWidth` |
| `Checkbox` | `{ Checkbox }` | `label`, `description`, `error`, `size`, `checked`, `defaultChecked`, `disabled` |
| `RadioGroup` | `{ RadioGroup }` | `name`, `label`, `options`, `value`, `defaultValue`, `onChange`, `orientation`, `size`, `error` |
| `Switch` | `{ Switch }` | `label`, `description`, `size`, `checked`, `defaultChecked`, `disabled` |
| `Slider` | `{ Slider }` | `value`, `onChange`, `min`, `max`, `step`, `label`, `showValue`, `size`, `disabled` |
| `NumberInput` | `{ NumberInput }` | `value`, `onChange`, `min`, `max`, `step`, `label`, `error`, `hint`, `size`, `disabled` |
| `FileUpload` | `{ FileUpload }` | `onChange`, `accept`, `multiple`, `maxSize`, `label`, `hint`, `error`, `disabled` |

### Display

| Component | Import | Key Props |
|---|---|---|
| `Avatar` | `{ Avatar }` | `src`, `alt`, `name` (initials fallback), `size`, `shape`, `status` |
| `Badge` | `{ Badge }` | `variant`, `size`, `dot`, `leftIcon` |
| `EmptyState` | `{ EmptyState }` | `title`, `description`, `icon`, `action` |
| `Skeleton` | `{ Skeleton }` | `width`, `height`, `radius`, `lines`, `gap` |
| `Table` | `{ Table }` | `columns`, `data`, `sortKey`, `sortDir`, `onSort`, `striped`, `bordered`, `size` |
| `Tag` | `{ Tag }` | `variant`, `size`, `onClose`, `leftIcon` |
| `Title` | `{ Title }` | `level` (`h1`–`h6`), `size`, `weight`, `align`, `color` |

### Layout

| Component | Import | Key Props |
|---|---|---|
| `Card` | `{ Card }` | `variant`, `size`, `hoverable` — compound: `Card.Header`, `Card.Body`, `Card.Footer` |
| `Divider` | `{ Divider }` | `orientation`, `label` |

### Feedback

| Component | Import | Key Props |
|---|---|---|
| `Alert` | `{ Alert }` | `variant`, `title`, `icon`, `onClose`, `children` |
| `Progress` | `{ Progress }` | `value` (0–100), `variant`, `size`, `label`, `showValue` |
| `Spinner` | `{ Spinner }` | `size`, `color`, `label` |
| `Toast` | `{ ToastProvider, useToast }` | `addToast({ message, variant, duration })` |

### Navigation

| Component | Import | Key Props |
|---|---|---|
| `Accordion` | `{ Accordion }` | `items`, `defaultValue`, `value`, `onChange`, `multiple`, `variant` |
| `Breadcrumb` | `{ Breadcrumb }` | `items` (`{ label, href? }[]`), `separator` |
| `Pagination` | `{ Pagination }` | `page`, `totalPages`, `onChange`, `siblingCount`, `showFirstLast` |
| `Stepper` | `{ Stepper }` | `steps`, `currentStep`, `orientation`, `variant` |
| `Tabs` | `{ Tabs }` | `items`, `defaultValue`, `value`, `onChange`, `variant` |

### Overlays

| Component | Import | Key Props |
|---|---|---|
| `Dialog` | `{ Dialog }` | `open`, `onClose`, `title`, `description`, `size`, `closeOnOverlayClick` — compound: `Dialog.Header`, `Dialog.Body`, `Dialog.Footer` |
| `Dropdown` | `{ Dropdown }` | `trigger`, `items`, `placement` |
| `Popover` | `{ Popover }` | `trigger`, `content`, `placement`, `open`, `onOpenChange` |
| `Tooltip` | `{ Tooltip }` | `content`, `children`, `placement`, `delay` |

---

## 3. Variant & Size Reference

Most components share a consistent size scale and variant system.

### Sizes (consistent across components)
- `"sm"` — compact, tight padding
- `"md"` — default
- `"lg"` — spacious, larger text

### Button Variants
`"primary"` | `"secondary"` | `"outline"` | `"ghost"` | `"danger"`

### Badge / Tag Variants
`"default"` | `"info"` | `"success"` | `"warning"` | `"danger"` | `"primary"`

### Alert Variants
`"info"` | `"success"` | `"warning"` | `"danger"`

### Card Variants
`"bordered"` | `"shadow"` | `"elevated"` | `"ghost"`

### Tabs Variants
`"underline"` | `"pills"` | `"boxed"`

### Accordion Variants
`"bordered"` | `"flush"` | `"separated"`

### Title Colors
`"default"` | `"muted"` | `"primary"` | `"gradient"`

---

## 4. Compound Component Patterns

Some components use a compound (dot-notation) API. Always use the sub-components — do not pass children directly expecting layout to work.

### Card

```tsx
import { Card, Button } from '@velocityuikit/velocityui';

<Card variant="shadow" size="md" hoverable>
  <Card.Header>
    <h3>Title</h3>
    <p>Subtitle</p>
  </Card.Header>
  <Card.Body>
    Main content area.
  </Card.Body>
  <Card.Footer>
    <Button size="sm" variant="primary">Save</Button>
    <Button size="sm" variant="ghost">Cancel</Button>
  </Card.Footer>
</Card>
```

### Dialog

```tsx
import { useState } from 'react';
import { Button, Dialog } from '@velocityuikit/velocityui';

function ConfirmDialog() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Delete item</Button>
      <Dialog open={open} onClose={() => setOpen(false)} size="sm">
        <Dialog.Header>
          <h2>Confirm delete</h2>
        </Dialog.Header>
        <Dialog.Body>This action cannot be undone.</Dialog.Body>
        <Dialog.Footer>
          <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="danger" onClick={() => setOpen(false)}>Delete</Button>
        </Dialog.Footer>
      </Dialog>
    </>
  );
}
```

Alternatively, use the shorthand `title` + `description` props on `Dialog` to auto-render the header without `Dialog.Header`:

```tsx
<Dialog open={open} onClose={() => setOpen(false)} title="Confirm delete" description="This cannot be undone.">
  <Dialog.Body>...</Dialog.Body>
</Dialog>
```

---

## 5. Controlled vs. Uncontrolled Props

Several components support both modes. Prefer **uncontrolled** when you only need a default starting value; prefer **controlled** when the parent needs to drive or read state.

| Component | Controlled props | Uncontrolled props |
|---|---|---|
| `Checkbox` | `checked`, `onChange` | `defaultChecked` |
| `Switch` | `checked`, `onChange` | `defaultChecked` |
| `RadioGroup` | `value`, `onChange` | `defaultValue` |
| `Tabs` | `value`, `onChange` | `defaultValue` |
| `Accordion` | `value`, `onChange` | `defaultValue` |
| `Slider` | `value`, `onChange` | — (always controlled) |
| `NumberInput` | `value`, `onChange` | — (always controlled) |
| `Pagination` | `page`, `onChange` | — (always controlled) |

**Rule:** Never mix controlled and uncontrolled for the same instance. Pick one pattern per component mount.

---

## 6. Accessibility — What to Preserve

VelocityUI ships components with accessibility built in. When modifying or composing them, preserve the following:

- **Do not remove `label` props** from `Input`, `Textarea`, `Select`, `Checkbox`, `Switch`, `RadioGroup`, `Slider`, `NumberInput`, or `FileUpload`. These wire `htmlFor`/`aria-labelledby` automatically.
- **Do not suppress `role` attributes** (e.g. `role="alert"` on `Alert`, `role="status"` on `Spinner`, `role="progressbar"` on `Progress`).
- **Tooltip** requires its `children` to be a single focusable React element so focus-based reveal works. Do not wrap children in an extra non-focusable `<div>`.
- **Dialog** manages focus trapping and Escape-key close internally. Do not add a second `onKeyDown` that calls `e.stopPropagation()` on Escape.
- **RadioGroup** renders a `<fieldset>` with `<legend>`. The `label` prop maps to the legend. Always supply it for screen-reader context.
- **Breadcrumb** uses `aria-label="Breadcrumb"` and `aria-current="page"` on the last item automatically — keep `items` in logical order.

---

## 7. Theming

VelocityUI uses CSS custom properties (design tokens) on `:root`. Override them in your global CSS file:

```css
/* No rebuild required — these take effect at runtime */
:root {
  --vui-color-primary: #6366f1;       /* primary brand color */
  --vui-color-primary-hover: #4f46e5;
  --vui-color-danger: #ef4444;
  --vui-color-success: #22c55e;
  --vui-color-warning: #f59e0b;
  --vui-radius-md: 0.5rem;            /* default border radius */
}
```

Named themes (e.g. `data-theme="dark"`) are supported — apply the attribute to your `<html>` element and override the same tokens inside the matching selector.

**Rule:** Never hardcode color values when a VelocityUI token exists. Always use `var(--vui-*)` tokens when writing custom CSS that sits alongside library components.

---

## 8. Safe Edit Patterns

When asked to edit an existing file that uses VelocityUI:

### Adding a new prop

```tsx
// Before
<Button>Save</Button>

// After — add prop, preserve existing ones
<Button variant="primary" loading={isSaving}>Save</Button>
```

### Composing multiple components

```tsx
import { Card, Input, Button, Alert } from '@velocityuikit/velocityui';

function LoginForm({ error }: { error?: string }) {
  return (
    <Card variant="shadow" size="md">
      <Card.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        <Input label="Email" type="email" placeholder="you@example.com" fullWidth />
        <Input label="Password" type="password" fullWidth />
        <Button variant="primary" fullWidth>Sign in</Button>
      </Card.Body>
    </Card>
  );
}
```

### Replacing native HTML with VelocityUI equivalents

| Native element | VelocityUI replacement |
|---|---|
| `<button>` | `<Button>` |
| `<input type="text">` | `<Input>` |
| `<textarea>` | `<Textarea>` |
| `<select>` | `<Select>` |
| `<input type="checkbox">` | `<Checkbox>` |
| `<input type="radio">` | `<RadioGroup>` |
| `<input type="range">` | `<Slider>` |
| `<hr>` | `<Divider>` |
| `<h1>`–`<h6>` (styled) | `<Title level="h1">` |

---

## 9. Common Pitfalls

| Pitfall | Fix |
|---|---|
| Components render unstyled / plain HTML | Add `import '@velocityuikit/velocityui/dist/style.css'` at app root |
| `useToast()` throws "must be used within ToastProvider" | Wrap your app (or page) in `<ToastProvider>` |
| `Tooltip` does not show on focus | Ensure the direct child is a focusable element (e.g. `<Button>`, not `<div>`) |
| `Dialog` does not close on overlay click | Check that `closeOnOverlayClick` is not explicitly set to `false` |
| `RadioGroup` onChange not firing | Pass `name` prop — without it, the native radio group may not form correctly |
| `Select` shows no options | Use the `options` prop (array of `{ value, label }`) instead of `<option>` children, or pass native `<option>` children without the `options` prop — not both |
| `Accordion` only one item opens | Default behavior is single-open; pass `multiple` prop to allow many open at once |
| `Table` sort does not work | `onSort` fires but the consumer must sort `data` externally — the component is display-only for sorting |
| `FileUpload` onChange never fires with drag-and-drop | Verify the drop zone is not covered by another element with `pointer-events: none` removed |
| `Skeleton` last line always shorter | This is intentional — the last line in multi-line mode renders at 75% width to mimic real text |

---

## 10. Commands for This Repo

If you are working inside the VelocityUI monorepo itself:

```bash
# Install dependencies
pnpm install

# Run docs site (http://localhost:3000)
pnpm dev

# Type-check all packages
pnpm lint

# Build the component library
pnpm build:lib

# Build everything (library then docs)
pnpm build

# Run library unit tests
pnpm --filter @velocityuikit/velocityui test

# Run tests once with coverage
pnpm --filter @velocityuikit/velocityui test:run
```

---

## 11. Agent Prompt Template

Use this template when starting a new task involving VelocityUI:

```
You are working in a React/TypeScript project that uses the VelocityUI component library
(@velocityuikit/velocityui). The stylesheet is already imported at the app root.

Rules:
- Import all UI components from '@velocityuikit/velocityui'.
- Never install or import components from other UI libraries (e.g. shadcn, MUI, Chakra).
- Preserve label/accessibility props on all form components.
- Use ToastProvider at the root if adding toast notifications.
- Match existing variant/size values in the file you are editing.
- Do not hardcode color hex values — use var(--vui-*) tokens in custom CSS.

Task: [describe the UI feature or change here]
```

---

## 12. Full Component API Summary

### Button
```tsx
<Button
  variant="primary"       // "primary" | "secondary" | "outline" | "ghost" | "danger"
  size="md"               // "sm" | "md" | "lg"
  loading={false}         // shows spinner, disables interaction
  fullWidth={false}       // fills container width
  leftIcon={<Icon />}     // ReactNode
  rightIcon={<Icon />}    // ReactNode
  disabled={false}
  onClick={handler}
>
  Label
</Button>
```

### Input
```tsx
<Input
  label="Field label"
  placeholder="..."
  type="text"             // any native input type
  size="md"               // "sm" | "md" | "lg"
  error="Error message"   // shows red error state
  hint="Helper text"      // shown when no error
  leftIcon={<Icon />}
  rightIcon={<Icon />}
  search={false}          // shows built-in search icon
  searchIconPosition="left" // "left" | "right"
  required={false}        // adds visual asterisk
  fullWidth={false}
  ref={inputRef}          // forwarded ref
/>
```

### Select
```tsx
<Select
  label="Country"
  placeholder="Select..."
  options={[
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada', disabled: true },
  ]}
  size="md"
  error="Required"
  hint="Helper"
  required={false}
  fullWidth={false}
/>
```

### RadioGroup
```tsx
<RadioGroup
  name="plan"             // required — shared name for radio inputs
  label="Choose plan"
  options={[
    { value: 'free', label: 'Free', description: 'Up to 3 projects' },
    { value: 'pro', label: 'Pro', disabled: false },
  ]}
  defaultValue="free"     // or value + onChange for controlled mode
  orientation="vertical"  // "vertical" | "horizontal"
  size="md"
  error="Pick one"
/>
```

### Toast / useToast
```tsx
// 1. Wrap app root
<ToastProvider>
  <App />
</ToastProvider>

// 2. Use anywhere inside the tree
import { useToast } from '@velocityuikit/velocityui';

function SaveButton() {
  const { addToast } = useToast();
  return (
    <Button onClick={() => addToast({ message: 'Saved!', variant: 'success', duration: 3000 })}>
      Save
    </Button>
  );
}
```

### Table
```tsx
import { Table } from '@velocityuikit/velocityui';
import { useState } from 'react';

const raw = [
  { id: 1, name: 'Alice', role: 'Admin' },
  { id: 2, name: 'Bob',   role: 'Editor' },
];

function UserTable() {
  const [sortKey, setSortKey] = useState('');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const sorted = [...raw].sort((a, b) => {
    if (!sortKey) return 0;
    const cmp = String(a[sortKey]) < String(b[sortKey]) ? -1 : 1;
    return sortDir === 'asc' ? cmp : -cmp;
  });

  return (
    <Table
      columns={[
        { key: 'id',   header: '#' },
        { key: 'name', header: 'Name', sortable: true },
        { key: 'role', header: 'Role', sortable: true },
      ]}
      data={sorted}
      sortKey={sortKey}
      sortDir={sortDir}
      onSort={(key, dir) => { setSortKey(key); setSortDir(dir); }}
      striped
    />
  );
}
```

---

*This guide was auto-generated from the VelocityUI component library source. For the interactive component playground see the docs site.*
