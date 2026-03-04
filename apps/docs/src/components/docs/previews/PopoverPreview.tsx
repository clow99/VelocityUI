'use client'

import { Popover, Button } from 'velocityui'

export function PopoverPreview() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Placements</p>
        <div className="flex flex-wrap gap-3">
          {(['top', 'bottom', 'left', 'right'] as const).map((placement) => (
            <Popover
              key={placement}
              placement={placement}
              trigger={<Button variant="outline" size="sm">{placement}</Button>}
              content={
                <div>
                  <p style={{ margin: 0, fontWeight: 600, fontSize: '0.875rem' }}>Popover</p>
                  <p style={{ margin: '0.375rem 0 0', fontSize: '0.8125rem', color: '#64748b' }}>
                    Placed {placement} of trigger.
                  </p>
                </div>
              }
            />
          ))}
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Rich content</p>
        <Popover
          trigger={<Button>User details</Button>}
          content={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p style={{ margin: 0, fontWeight: 600, fontSize: '0.9375rem' }}>Alice Brown</p>
              <p style={{ margin: 0, fontSize: '0.8125rem', color: '#64748b' }}>alice@example.com</p>
              <p style={{ margin: 0, fontSize: '0.75rem', color: '#94a3b8' }}>Senior Engineer · Joined Jan 2023</p>
            </div>
          }
        />
      </div>
    </div>
  )
}
