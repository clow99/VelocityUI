'use client'
import Link from 'next/link'
import { useState } from 'react'
import {
  Badge,
  Button,
  Input,
  Checkbox,
  Tabs,
  Progress,
  Avatar,
  Dialog,
} from '@velocityuikit/velocityui'
import { Icon } from '@/components/Icon'

function DemoCard({
  title,
  slug,
  children,
  className = '',
}: {
  title: string
  slug: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={'demo-card ' + className}>
      <div className="demo-stage">{children}</div>
      <Link href={'/docs/' + slug} className="demo-card-label">
        <span>{title}</span>
        <Icon name="external" size={15} />
      </Link>
    </div>
  )
}
export function ComponentPreviewGrid() {
  const [saved, setSaved] = useState(false)
  const [email, setEmail] = useState('')
  const [open, setOpen] = useState(false)
  return (
    <div className="component-demo-grid">
      <DemoCard title="Buttons" slug="button">
        <div className="demo-stack">
          <Button
            onClick={() => setSaved(!saved)}
            rightIcon={<Icon name={saved ? 'check' : 'arrow'} size={16} />}
          >
            {saved ? 'Changes saved' : 'Save changes'}
          </Button>
          <div className="demo-row">
            <Button variant="secondary" size="sm" onClick={() => setSaved(false)}>
              Reset
            </Button>
            <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
              Preview
            </Button>
          </div>
        </div>
      </DemoCard>
      <DemoCard title="Inputs & forms" slug="input">
        <div className="demo-stack demo-form">
          <Input
            id="home-email"
            label="Email address"
            placeholder="you@example.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Checkbox id="home-updates" label="Keep me in the loop" defaultChecked />
        </div>
      </DemoCard>
      <DemoCard title="Badges & status" slug="badge">
        <div className="badge-cloud">
          <Badge variant="success" dot>
            Published
          </Badge>
          <Badge variant="info">In progress</Badge>
          <Badge variant="warning" dot>
            In review
          </Badge>
          <Badge>Draft</Badge>
          <Badge variant="danger">Needs attention</Badge>
        </div>
      </DemoCard>
      <DemoCard title="Tabs & navigation" slug="tabs">
        <div className="demo-tabs">
          <Tabs
            variant="boxed"
            items={[
              {
                value: 'overview',
                label: 'Overview',
                children: (
                  <p>
                    Everything in its right place.
                    <br />
                    <span className="muted">A clear view of what matters.</span>
                  </p>
                ),
              },
              {
                value: 'activity',
                label: 'Activity',
                children: (
                  <p>
                    You’re all caught up.
                    <br />
                    <span className="muted">Your latest activity appears here.</span>
                  </p>
                ),
              },
              {
                value: 'settings',
                label: 'Settings',
                children: (
                  <p>
                    A space that feels like you.
                    <br />
                    <span className="muted">Fine-tune every detail.</span>
                  </p>
                ),
              },
            ]}
          />
        </div>
      </DemoCard>
      <DemoCard title="Avatars" slug="avatar">
        <div className="demo-stack">
          <Avatar.Group max={4} size="lg">
            <Avatar name="Alex Morgan" tone="blue" />
            <Avatar name="Jamie Lee" tone="violet" />
            <Avatar name="Sam Rivera" tone="emerald" />
            <Avatar name="Taylor Kim" tone="rose" />
            <Avatar name="Jordan Park" />
            <Avatar name="Maya Chen" />
          </Avatar.Group>
          <Badge appearance="soft" variant="success" dot>6 people, one good idea.</Badge>
        </div>
      </DemoCard>
      <DemoCard title="Progress & feedback" slug="progress">
        <div className="demo-stack demo-form">
          <div className="demo-row spread">
            <span className="text-sm font-medium">Your next big thing</span>
            <Badge variant={saved ? 'success' : 'default'} size="sm">
              {saved ? '100%' : '72%'}
            </Badge>
          </div>
          <Progress value={saved ? 100 : 72} />
          <span className="muted text-xs">
            {saved ? 'Ready for what comes next.' : 'A little closer with every component.'}
          </span>
        </div>
      </DemoCard>
      <Dialog open={open} onClose={() => setOpen(false)} title="Looks good from here">
        <Dialog.Body>
          <p className="muted">
            This is a live VelocityUI dialog. Close it with Escape, the close button, or the action
            below.
          </p>
          <div className="mt-6">
            <Button
              onClick={() => {
                setSaved(true)
                setOpen(false)
              }}
            >
              Save changes
            </Button>
          </div>
        </Dialog.Body>
      </Dialog>
    </div>
  )
}
