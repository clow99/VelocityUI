'use client'

import { Select } from 'velocityui'

const options = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'gb', label: 'United Kingdom' },
  { value: 'au', label: 'Australia' },
]

export function SelectPreview() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Select label="Country" placeholder="Select a country" options={options} />
      <Select
        label="Size"
        hint="Pick your preferred option."
        options={[
          { value: 's', label: 'Small' },
          { value: 'm', label: 'Medium' },
          { value: 'l', label: 'Large' },
        ]}
        defaultValue="m"
      />
      <Select
        label="Role"
        error="Please select a role."
        options={[
          { value: 'admin', label: 'Administrator' },
          { value: 'editor', label: 'Editor' },
        ]}
      />
    </div>
  )
}
