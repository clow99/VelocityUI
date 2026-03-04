'use client'

import { Accordion, Badge, Button, Card, Divider, Title } from '@velocityuikit/velocityui'

const features = [
  {
    title: 'Accessible by Default',
    description: 'Every component ships with full ARIA support, keyboard navigation, and screen reader compatibility.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    title: 'Fully Typed',
    description: 'Written in TypeScript with complete type definitions. Catch errors before they happen.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Themeable',
    description: 'Use CSS variables to customize colors, radii, and spacing to match your brand.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" />
        <circle cx="17.5" cy="10.5" r=".5" />
        <circle cx="8.5" cy="7.5" r=".5" />
        <circle cx="6.5" cy="12.5" r=".5" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
  },
  {
    title: 'Zero Runtime',
    description: 'No JavaScript bundle overhead for static components. CSS Modules keep things lean.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
]

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for side projects and learning.',
    features: ['16 components', 'MIT license', 'Community support'],
    cta: 'Get started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/mo',
    description: 'For professional teams shipping fast.',
    features: ['All free components', 'Premium templates', 'Priority support', 'Design tokens'],
    cta: 'Start free trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored for large organizations.',
    features: ['Everything in Pro', 'Custom components', 'SLA guarantee', 'Dedicated engineer'],
    cta: 'Contact us',
    highlight: false,
  },
]

export default function LandingExamplePage() {
  return (
    <div className="flex flex-col gap-16">
      <div>
        <Title as="h1" size="xl">
          Landing Page
        </Title>
        <p className="mt-2 text-vui-text-muted">
          A marketing landing page built with Badge, Button, Card, Accordion, Divider, and Title.
        </p>
      </div>

      <section className="rounded-2xl bg-vui-surface-muted px-6 py-16 text-center">
        <Badge variant="primary" className="mb-4">
          Now in v1.0
        </Badge>
        <h2 className="mx-auto max-w-2xl text-4xl font-bold leading-tight text-vui-text">
          Build beautiful UIs at velocity
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-vui-text-muted">
          VelocityUI is a React component library designed for speed without sacrificing
          accessibility or design quality.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button size="lg">Get started</Button>
          <Button size="lg" variant="outline">
            View components
          </Button>
        </div>
      </section>

      <section>
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-vui-text">Why VelocityUI?</h2>
          <p className="mt-2 text-vui-text-muted">
            Everything you need to ship production-quality interfaces.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card key={f.title} variant="bordered" hoverable>
              <Card.Body>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-vui-primary-soft text-vui-primary">
                  {f.icon}
                </div>
                <h3 className="mb-1 text-sm font-semibold text-vui-text">{f.title}</h3>
                <p className="text-sm text-vui-text-muted">{f.description}</p>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>

      <Divider />

      <section>
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-vui-text">Simple pricing</h2>
          <p className="mt-2 text-vui-text-muted">Start free, scale when you&apos;re ready.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              variant={plan.highlight ? 'elevated' : 'bordered'}
              className={plan.highlight ? 'ring-2 ring-vui-primary' : ''}
            >
              <Card.Header>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-vui-text">{plan.name}</span>
                  {plan.highlight && (
                    <Badge variant="primary" size="sm">
                      Popular
                    </Badge>
                  )}
                </div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-vui-text">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-vui-text-muted">{plan.period}</span>
                  )}
                </div>
                <p className="mt-1 text-sm text-vui-text-muted">{plan.description}</p>
              </Card.Header>
              <Card.Body>
                <ul className="flex flex-col gap-2">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-vui-text-muted">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </Card.Body>
              <Card.Footer>
                <Button variant={plan.highlight ? 'primary' : 'outline'} fullWidth>
                  {plan.cta}
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </section>
      <Divider />

      <section>
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-vui-text">Frequently asked questions</h2>
          <p className="mt-2 text-vui-text-muted">Everything you need to know before getting started.</p>
        </div>
        <Accordion
          multiple
          variant="separated"
          items={[
            {
              value: 'free',
              title: 'Is VelocityUI really free?',
              content: (
                <p className="text-sm text-vui-text-muted">
                  Yes. VelocityUI is MIT-licensed and completely free for personal and commercial use.
                  The Pro plan adds premium templates and priority support, but all 16 core
                  components are free forever.
                </p>
              ),
            },
            {
              value: 'framework',
              title: 'Which frameworks are supported?',
              content: (
                <p className="text-sm text-vui-text-muted">
                  VelocityUI is built for React 18+. It works with Next.js, Vite, Remix, and any
                  other React-based framework. Server Components are supported for non-interactive
                  components.
                </p>
              ),
            },
            {
              value: 'theming',
              title: 'How does theming work?',
              content: (
                <p className="text-sm text-vui-text-muted">
                  All design tokens are CSS custom properties. Apply a theme class (e.g.{' '}
                  <code className="rounded bg-vui-surface-muted px-1 text-xs font-mono text-vui-primary">vui-theme-midnight</code>)
                  to the <code className="rounded bg-vui-surface-muted px-1 text-xs font-mono text-vui-primary">&lt;html&gt;</code> element
                  and every component inherits the new palette instantly.
                </p>
              ),
            },
            {
              value: 'typescript',
              title: 'Do I need TypeScript?',
              content: (
                <p className="text-sm text-vui-text-muted">
                  No. VelocityUI ships type definitions but works equally well in plain JavaScript
                  projects. TypeScript is recommended for the best developer experience and
                  auto-complete support.
                </p>
              ),
            },
          ]}
        />
      </section>
    </div>
  )
}

