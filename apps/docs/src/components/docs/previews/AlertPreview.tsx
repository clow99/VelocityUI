'use client'

import { Alert } from '@clow99/velocityui'

export function AlertPreview() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <Alert variant="info">Your session will expire in 5 minutes.</Alert>
      <Alert variant="success" title="Payment confirmed">
        Your order has been placed and will ship within 2 business days.
      </Alert>
      <Alert variant="warning">
        Review your details before submitting the form.
      </Alert>
      <Alert variant="danger" title="Error">
        Failed to save changes. Please try again.
      </Alert>
    </div>
  )
}

