'use client'

import { Textarea } from 'velocityui'

export function TextareaPreview() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Textarea label="Message" placeholder="Write your message here..." rows={3} />
      <Textarea
        label="Bio"
        hint="Briefly describe yourself."
        placeholder="I'm a developer who..."
        rows={2}
      />
      <Textarea
        label="Error state"
        error="This field is required."
        defaultValue="x"
        rows={2}
      />
    </div>
  )
}
