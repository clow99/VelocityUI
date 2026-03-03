'use client'

import { Title } from 'velocityui'
import 'velocityui/dist/style.css'

export function TitlePreview() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Sizes</p>
        <div className="flex flex-col gap-2">
          <Title level="h1" size="xxl">Display — xxl</Title>
          <Title level="h2" size="xl">Heading — xl</Title>
          <Title level="h3" size="lg">Section — lg</Title>
          <Title level="h4" size="md">Subsection — md</Title>
          <Title level="h5" size="sm">Label — sm</Title>
          <Title level="h6" size="xs">Caption — xs</Title>
        </div>
      </div>
      <div>
        <p className="mb-3 mt-2 text-xs font-semibold uppercase tracking-wide text-gray-400">Color variants</p>
        <div className="flex flex-col gap-2">
          <Title level="h3" color="default">Default color</Title>
          <Title level="h3" color="muted">Muted color</Title>
          <Title level="h3" color="primary">Primary color</Title>
          <Title level="h3" color="gradient">Gradient color</Title>
        </div>
      </div>
    </div>
  )
}
