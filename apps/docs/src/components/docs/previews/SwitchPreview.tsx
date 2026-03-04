'use client'

import { Switch } from '@clow99/velocityui'

export function SwitchPreview() {
  return (
    <div className="flex flex-col gap-5">
      <Switch label="Enable notifications" defaultChecked />
      <Switch
        label="Dark mode"
        description="Switch the interface to a dark color scheme."
      />
      <Switch label="Disabled" disabled />
      <div className="flex items-center gap-6">
        <Switch size="sm" label="Small" defaultChecked />
        <Switch size="md" label="Medium" defaultChecked />
        <Switch size="lg" label="Large" defaultChecked />
      </div>
    </div>
  )
}

