'use client'

import { Checkbox } from 'velocityui'

export function CheckboxPreview() {
  return (
    <div className="flex flex-col gap-4">
      <Checkbox label="Accept terms and conditions" />
      <Checkbox
        label="Email notifications"
        description="Receive updates about your account activity."
        defaultChecked
      />
      <Checkbox label="Disabled option" disabled />
      <div className="flex items-center gap-4">
        <Checkbox size="sm" label="Small" defaultChecked />
        <Checkbox size="md" label="Medium" defaultChecked />
        <Checkbox size="lg" label="Large" defaultChecked />
      </div>
    </div>
  )
}
