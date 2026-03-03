'use client'

import { Tooltip, Button } from 'velocityui'

export function TooltipPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-8">
      <Tooltip content="Top tooltip" placement="top">
        <Button variant="outline" size="sm">Top</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" placement="bottom">
        <Button variant="outline" size="sm">Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" placement="left">
        <Button variant="outline" size="sm">Left</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" placement="right">
        <Button variant="outline" size="sm">Right</Button>
      </Tooltip>
    </div>
  )
}
