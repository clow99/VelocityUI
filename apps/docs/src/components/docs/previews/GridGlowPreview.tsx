'use client'

import { AnimatedBackground, GridGlow } from '@velocityuikit/velocityui'

const variants: Array<'default' | 'spotlight' | 'panel'> = ['default', 'spotlight', 'panel']

export function GridGlowPreview() {
  return (
    <div className="grid w-full gap-4 md:grid-cols-3">
      {variants.map((variant) => (
        <AnimatedBackground
          key={variant}
          background={<GridGlow variant={variant} />}
          className="min-h-40 rounded-2xl border border-vui-border bg-vui-surface"
          contentClassName="flex h-full flex-col justify-between p-4"
          intensity="subtle"
          speed="medium"
        >
          <div className="inline-flex w-fit rounded-full border border-vui-border bg-vui-surface-translucent px-2.5 py-1 text-[11px] font-medium text-vui-text-muted">
            Structured glow
          </div>
          <div>
            <p className="text-sm font-semibold text-vui-text">{variant}</p>
            <p className="mt-1 text-xs text-vui-text-subtle">Crisper geometry for dashboards, panels, and technical sections.</p>
          </div>
        </AnimatedBackground>
      ))}
    </div>
  )
}
