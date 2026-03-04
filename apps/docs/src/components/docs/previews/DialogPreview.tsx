'use client'

import { useState } from 'react'
import { Button, Dialog } from '@clow99/velocityui'

export function DialogPreview() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="Confirm deletion"
        description="This action cannot be undone."
      >
        <Dialog.Body>
          <p className="text-sm" style={{ color: 'var(--vui-text-muted)' }}>
            Are you sure you want to permanently delete this item? All associated data will be
            removed from our servers.
          </p>
        </Dialog.Body>
        <Dialog.Footer>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => setOpen(false)}>
            Delete
          </Button>
        </Dialog.Footer>
      </Dialog>
    </div>
  )
}

