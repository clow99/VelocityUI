'use client'

import { Accordion } from '@velocityuikit/velocityui'

const items = [
  {
    value: 'q1',
    title: 'What is VelocityUI?',
    content: (
      <p className="text-sm" style={{ color: 'var(--vui-text-muted)' }}>
        VelocityUI is a modern, accessible React component library with CSS Modules scoped styles
        and full TypeScript support.
      </p>
    ),
  },
  {
    value: 'q2',
    title: 'Is it free to use?',
    content: (
      <p className="text-sm" style={{ color: 'var(--vui-text-muted)' }}>
        Yes, VelocityUI is open source and available under the MIT license.
      </p>
    ),
  },
  {
    value: 'q3',
    title: 'Does it support theming?',
    content: (
      <p className="text-sm" style={{ color: 'var(--vui-text-muted)' }}>
        Yes, VelocityUI uses CSS custom properties and named theme classes for comprehensive
        theming support.
      </p>
    ),
  },
]

export function AccordionPreview() {
  return (
    <div className="w-full">
      <Accordion items={items} defaultValue="q1" />
    </div>
  )
}

