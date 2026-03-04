'use client'

import { NumberInput } from '@clow99/velocityui'
import { useState } from 'react'

export function NumberInputPreview() {
  const [qty, setQty] = useState(1)
  const [age, setAge] = useState(0)

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Basic with bounds</p>
        <NumberInput value={qty} onChange={setQty} min={1} max={99} label="Quantity" hint="Between 1 and 99" />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">With error</p>
        <NumberInput value={age} onChange={setAge} min={1} label="Age" error={age < 1 ? 'Must be at least 1' : undefined} />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Sizes</p>
        <div className="flex flex-col gap-3">
          <NumberInput value={5} onChange={() => {}} size="sm" />
          <NumberInput value={5} onChange={() => {}} size="md" />
          <NumberInput value={5} onChange={() => {}} size="lg" />
        </div>
      </div>
    </div>
  )
}

