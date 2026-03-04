'use client'

import { ToastProvider, useToast, Button } from '@velocityuikit/velocityui'

function ToastButtons() {
  const { addToast } = useToast()
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Variants</p>
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => addToast({ message: 'Changes saved successfully.', variant: 'success' })}>
            Success
          </Button>
          <Button variant="secondary" onClick={() => addToast({ message: 'New update available.', variant: 'info' })}>
            Info
          </Button>
          <Button variant="outline" onClick={() => addToast({ message: 'Session expires in 5 minutes.', variant: 'warning' })}>
            Warning
          </Button>
          <Button variant="danger" onClick={() => addToast({ message: 'Failed to delete item.', variant: 'danger' })}>
            Danger
          </Button>
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Persistent (no auto-dismiss)</p>
        <Button
          variant="ghost"
          onClick={() => addToast({ message: 'This toast stays until dismissed.', variant: 'info', duration: 0 })}
        >
          Show persistent toast
        </Button>
      </div>
    </div>
  )
}

export function ToastPreview() {
  return (
    <ToastProvider>
      <ToastButtons />
    </ToastProvider>
  )
}

