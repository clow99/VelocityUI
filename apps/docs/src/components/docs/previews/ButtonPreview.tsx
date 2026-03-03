'use client'

import { Button } from 'velocityui'
import 'velocityui/dist/style.css'
import { useState } from 'react'

export function ButtonPreview() {
  const [loading, setLoading] = useState(false)

  const handleLoad = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Variants</p>
        <div className="flex flex-wrap gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Sizes</p>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">States</p>
        <div className="flex flex-wrap items-center gap-2">
          <Button loading={loading} onClick={handleLoad}>
            {loading ? 'Saving...' : 'Click to load'}
          </Button>
          <Button disabled>Disabled</Button>
          <Button fullWidth>Full Width</Button>
        </div>
      </div>
    </div>
  )
}
