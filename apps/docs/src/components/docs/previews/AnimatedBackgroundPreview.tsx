'use client'

import { AnimatedBackground, Badge, Button, Card, GradientOrbs } from '@velocityuikit/velocityui'

export function AnimatedBackgroundPreview() {
  return (
    <AnimatedBackground
      background={<GradientOrbs variant="hero" />}
      className="w-full overflow-hidden rounded-[1.75rem] border border-vui-border bg-vui-surface"
      contentClassName="p-6"
      intensity="medium"
      speed="medium"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Badge variant="info">Ambient container</Badge>
          <span className="text-xs text-vui-text-subtle">Composes any decorative preset</span>
        </div>
        <Card variant="shadow" className="max-w-sm bg-vui-surface-translucent">
          <Card.Body>
            <h3 className="text-lg font-semibold text-vui-text">Hero section with depth</h3>
            <p className="mt-2 text-sm text-vui-text-muted">
              Use the wrapper to keep content readable while decorative layers animate underneath.
            </p>
            <div className="mt-4 flex gap-3">
              <Button size="sm">Primary action</Button>
              <Button size="sm" variant="ghost">
                Secondary
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </AnimatedBackground>
  )
}
