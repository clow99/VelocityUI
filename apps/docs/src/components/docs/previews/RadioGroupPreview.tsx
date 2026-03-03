'use client'

import { RadioGroup } from 'velocityui'

export function RadioGroupPreview() {
  return (
    <div className="flex flex-col gap-6">
      <RadioGroup
        name="plan-preview"
        label="Select a plan"
        defaultValue="pro"
        options={[
          { value: 'free', label: 'Free', description: 'Up to 3 projects' },
          { value: 'pro', label: 'Pro', description: 'Unlimited projects' },
          { value: 'enterprise', label: 'Enterprise', description: 'Custom pricing' },
        ]}
      />
      <RadioGroup
        name="size-preview"
        label="T-shirt size"
        orientation="horizontal"
        defaultValue="m"
        options={[
          { value: 's', label: 'S' },
          { value: 'm', label: 'M' },
          { value: 'l', label: 'L' },
          { value: 'xl', label: 'XL' },
        ]}
      />
    </div>
  )
}
