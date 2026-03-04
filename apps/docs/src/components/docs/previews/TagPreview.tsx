'use client'

import { Tag } from '@velocityuikit/velocityui'
import { useState } from 'react'

export function TagPreview() {
  const [tags, setTags] = useState(['React', 'TypeScript', 'Tailwind', 'Next.js'])

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Variants</p>
        <div className="flex flex-wrap gap-2">
          <Tag>Default</Tag>
          <Tag variant="info">Info</Tag>
          <Tag variant="success">Success</Tag>
          <Tag variant="warning">Warning</Tag>
          <Tag variant="danger">Danger</Tag>
          <Tag variant="primary">Primary</Tag>
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Removable</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <Tag
              key={t}
              variant="primary"
              onClose={() => setTags(tags.filter((x) => x !== t))}
            >
              {t}
            </Tag>
          ))}
          {tags.length === 0 && (
            <button
              onClick={() => setTags(['React', 'TypeScript', 'Tailwind', 'Next.js'])}
              className="text-sm text-vui-text-subtle underline"
            >
              Reset
            </button>
          )}
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Sizes</p>
        <div className="flex flex-wrap items-center gap-2">
          <Tag size="sm" variant="primary">Small</Tag>
          <Tag size="md" variant="primary">Medium</Tag>
          <Tag size="lg" variant="primary">Large</Tag>
        </div>
      </div>
    </div>
  )
}

