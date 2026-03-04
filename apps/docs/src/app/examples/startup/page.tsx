'use client'

import { Badge, Button, Card, Divider, Title } from '@clow99/velocityui'
import { useState } from 'react'

const metrics = [
  { value: '10,000+', label: 'Developers' },
  { value: '500+', label: 'Companies' },
  { value: '98%', label: 'Satisfaction' },
  { value: '< 1ms', label: 'Avg. render' },
]

const steps = [
  {
    step: '01',
    title: 'Install the package',
    description: 'Add VelocityUI to your project with a single npm command. No complex setup required.',
    code: 'npm install @clow99/velocityui',
  },
  {
    step: '02',
    title: 'Import what you need',
    description: 'Tree-shakeable exports mean you only ship the components you actually use.',
    code: "import { Button, Card } from '@clow99/velocityui'",
  },
  {
    step: '03',
    title: 'Ship faster',
    description: 'Build polished UIs in minutes, not days. Focus on your product, not your design system.',
    code: '<Button variant="primary">Get started</Button>',
  },
]

const testimonials = [
  {
    quote: 'VelocityUI cut our UI development time in half. The accessibility support alone saved us weeks of work.',
    author: 'Sarah K.',
    role: 'Lead Engineer, Flowbase',
    initials: 'SK',
  },
  {
    quote: "The TypeScript support is incredible. I've never had such a smooth experience working with a component library.",
    author: 'Marcus T.',
    role: 'Frontend Architect, Buildly',
    initials: 'MT',
  },
  {
    quote: "We migrated from three separate UI libraries to VelocityUI in a week. It's now the foundation of our design system.",
    author: 'Priya N.',
    role: 'Staff Engineer, Openloop',
    initials: 'PN',
  },
]

export default function StartupExamplePage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1000)
  }

  return (
    <div className="flex flex-col gap-16">
      <div>
        <Title as="h1" size="xl">Startup Landing</Title>
        <p className="mt-2 text-vui-text-muted">
          A startup-style landing page built with Badge, Button, Card, Divider, and Title.
        </p>
      </div>

      <section className="flex flex-col items-center gap-6 text-center">
        <Badge variant="info">Now in v1.0 — stable release</Badge>
        <Title as="h2" size="xxl" className="max-w-2xl">
          Build beautiful React apps at the speed of thought
        </Title>
        <p className="max-w-xl text-lg text-vui-text-muted">
          VelocityUI is a fast, accessible, and fully-typed React component library. Everything you need to ship a
          polished product — right out of the box.
        </p>
        {submitted ? (
          <div className="flex items-center gap-2 rounded-lg bg-green-50 px-6 py-3 text-sm font-medium text-green-700 ring-1 ring-green-200 dark:bg-green-900/20 dark:text-green-400 dark:ring-green-800">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 13l4 4L19 7" />
            </svg>
            You&apos;re on the list! We&apos;ll be in touch.
          </div>
        ) : (
          <form onSubmit={handleWaitlist} className="flex w-full max-w-sm gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-lg border border-vui-border bg-vui-surface px-4 py-2 text-sm text-vui-text placeholder:text-vui-text-subtle focus:outline-none focus:ring-2 focus:ring-vui-primary"
            />
            <Button type="submit" loading={submitting}>
              {submitting ? 'Joining...' : 'Join waitlist'}
            </Button>
          </form>
        )}
        <p className="text-xs text-vui-text-subtle">No spam. Unsubscribe anytime.</p>
      </section>

      <section>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col items-center gap-1 text-center">
              <span className="text-3xl font-bold text-vui-primary">{m.value}</span>
              <span className="text-sm text-vui-text-muted">{m.label}</span>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      <section className="flex flex-col gap-8">
        <div className="text-center">
          <Title as="h3" size="xl">Get started in 3 steps</Title>
          <p className="mt-2 text-vui-text-muted">Up and running in under 5 minutes.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.step} variant="bordered" size="md">
              <Card.Header>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-vui-primary opacity-30">{step.step}</span>
                  <h4 className="font-semibold text-vui-text">{step.title}</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p className="text-sm text-vui-text-muted">{step.description}</p>
                <div className="mt-3 rounded-md bg-vui-surface-muted px-3 py-2">
                  <code className="font-mono text-xs text-vui-primary">{step.code}</code>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>

      <Divider />

      <section className="flex flex-col gap-8">
        <div className="text-center">
          <Title as="h3" size="xl">Trusted by engineering teams</Title>
          <p className="mt-2 text-vui-text-muted">Here&apos;s what developers are saying.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.author} variant="shadow" size="md">
              <Card.Body>
                <div className="flex flex-col gap-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-vui-primary opacity-40">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-sm italic text-vui-text-muted">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-vui-primary text-xs font-bold text-white">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-vui-text">{t.author}</p>
                      <p className="text-xs text-vui-text-muted">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>

      <Divider />

      <section className="flex flex-col items-center gap-6 text-center">
        <Title as="h3" size="xl">Ready to build faster?</Title>
        <p className="max-w-lg text-vui-text-muted">
          Join thousands of developers who ship polished UIs with VelocityUI every day.
        </p>
        <div className="flex gap-3">
          <Button size="lg">Get started free</Button>
          <Button size="lg" variant="outline">View docs</Button>
        </div>
      </section>
    </div>
  )
}

