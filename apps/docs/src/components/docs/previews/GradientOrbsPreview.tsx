'use client'

import { AnimatedBackground, GradientOrbs } from '@velocityuikit/velocityui'

const variants: Array<'hero' | 'diagonal' | 'spotlight'> = ['hero', 'diagonal', 'spotlight']

export function GradientOrbsPreview() {
  return (
    <div className="grid w-full gap-4 md:grid-cols-3">
      {variants.map((variant) => (
        <AnimatedBackground
          key={variant}
          background={<GradientOrbs variant={variant} />}
          className="min-h-40 rounded-2xl border border-vui-border bg-vui-surface"
          contentClassName="flex h-full items-end p-4"
          intensity="medium"
          speed="slow"
        >
          <div>
            <p className="text-sm font-semibold text-vui-text">{variant}</p>
            <p className="mt-1 text-xs text-vui-text-subtle">Soft blurred color fields for hero and auth layouts.</p>
          </div>
        </AnimatedBackground>
      ))}
    </div>
  )
}
