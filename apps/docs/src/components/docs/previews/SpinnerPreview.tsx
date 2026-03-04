'use client'

import { Spinner } from 'velocityui'

export function SpinnerPreview() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Sizes</p>
        <div className="flex flex-wrap items-center gap-4">
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Colors</p>
        <div className="flex flex-wrap items-center gap-4">
          <Spinner color="primary" />
          <Spinner color="muted" />
          <span className="flex items-center justify-center rounded-lg bg-vui-primary p-3">
            <Spinner color="white" />
          </span>
        </div>
      </div>
    </div>
  )
}
