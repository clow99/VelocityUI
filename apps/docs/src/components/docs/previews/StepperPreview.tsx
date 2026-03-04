'use client'

import { Stepper, Button } from '@velocityuikit/velocityui'
import { useState } from 'react'

const steps = [
  { label: 'Account', description: 'Create your account' },
  { label: 'Profile', description: 'Set up your profile' },
  { label: 'Billing', description: 'Enter payment info' },
  { label: 'Confirm', description: 'Review and submit' },
]

export function StepperPreview() {
  const [current, setCurrent] = useState(2)

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Horizontal</p>
        <Stepper steps={steps} currentStep={current} />
        <div className="mt-4 flex gap-2">
          <Button size="sm" variant="outline" onClick={() => setCurrent((v) => Math.max(1, v - 1))} disabled={current === 1}>
            Back
          </Button>
          <Button size="sm" onClick={() => setCurrent((v) => Math.min(steps.length, v + 1))} disabled={current === steps.length}>
            Next
          </Button>
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Vertical</p>
        <Stepper steps={steps} currentStep={current} orientation="vertical" />
      </div>
    </div>
  )
}

