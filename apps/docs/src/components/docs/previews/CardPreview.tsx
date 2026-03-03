'use client'

import { Card, Button, Badge } from 'velocityui'

export function CardPreview() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Bordered (default)</p>
        <Card variant="bordered">
          <Card.Header>
            <div className="flex items-center justify-between">
              <span style={{ fontWeight: 600, fontSize: '0.9375rem' }}>Project Alpha</span>
              <Badge variant="success" dot size="sm">Active</Badge>
            </div>
            <span style={{ fontSize: '0.8125rem', color: '#6b7280' }}>Last updated 2 hours ago</span>
          </Card.Header>
          <Card.Body>
            <p style={{ fontSize: '0.875rem', color: '#374151', lineHeight: 1.6 }}>
              A full-stack application with real-time collaboration features and advanced analytics.
            </p>
          </Card.Body>
          <Card.Footer>
            <Button size="sm">Open</Button>
            <Button size="sm" variant="ghost">Archive</Button>
          </Card.Footer>
        </Card>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Elevated + Hoverable</p>
        <Card variant="elevated" hoverable>
          <Card.Body>
            <p style={{ fontSize: '0.875rem', color: '#374151' }}>Hover over this card to see the lift effect.</p>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
