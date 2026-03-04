'use client'

import { Slider } from '@clow99/velocityui'
import { useState } from 'react'

export function SliderPreview() {
  const [volume, setVolume] = useState(40)
  const [budget, setBudget] = useState(100)

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">With label and value</p>
        <Slider value={volume} onChange={setVolume} label="Volume" showValue />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Custom range and step</p>
        <Slider value={budget} onChange={setBudget} min={0} max={500} step={25} label="Budget" showValue />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Sizes</p>
        <div className="flex flex-col gap-3">
          <Slider value={60} onChange={() => {}} size="sm" />
          <Slider value={60} onChange={() => {}} size="md" />
          <Slider value={60} onChange={() => {}} size="lg" />
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Disabled</p>
        <Slider value={40} onChange={() => {}} disabled label="Locked" />
      </div>
    </div>
  )
}

