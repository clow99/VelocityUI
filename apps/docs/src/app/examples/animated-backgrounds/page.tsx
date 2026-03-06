'use client'

import { motion } from 'framer-motion'
import {
  AnimatedBackground,
  Badge,
  Button,
  Card,
  Divider,
  GradientOrbs,
  GridGlow,
  Title,
} from '@velocityuikit/velocityui'
import { THEMES, useTheme, type ThemeName } from '@/components/ThemeContext'

const featuredThemes: ThemeName[] = ['midnight', 'glass', 'ocean', 'soft']

const presetCards = [
  {
    title: 'Hero Atmosphere',
    description: 'Soft blurred energy for landing pages, sign-in shells, and product launches.',
    accent: 'GradientOrbs',
    background: <GradientOrbs variant="hero" />,
    intensity: 'medium' as const,
    speed: 'slow' as const,
  },
  {
    title: 'Spotlight Reveal',
    description: 'Center-focused attention for feature callouts, pricing, and CTA sections.',
    accent: 'GradientOrbs',
    background: <GradientOrbs variant="spotlight" />,
    intensity: 'vivid' as const,
    speed: 'medium' as const,
  },
  {
    title: 'Structured Surface',
    description: 'Sharper geometry for dashboards, technical marketing, or empty-state containers.',
    accent: 'GridGlow',
    background: <GridGlow variant="spotlight" />,
    intensity: 'subtle' as const,
    speed: 'medium' as const,
  },
]

const systemNotes = [
  'Core package stays CSS-first with no animation runtime added for consumers.',
  'Ambient tokens adapt across existing themes, including glass and high-contrast.',
  'Reduced-motion users get calmer, mostly static surfaces automatically.',
]

const easeCurve = [0.22, 1, 0.36, 1] as const

const containerMotion = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeCurve,
    },
  },
}

export default function AnimatedBackgroundsExamplePage() {
  const { theme, setTheme } = useTheme()

  const themeOptions = THEMES.filter((option) => featuredThemes.includes(option.value))

  return (
    <div className="flex flex-col gap-16">
      <div>
        <Title as="h1" size="xl">
          Animated Backgrounds
        </Title>
        <p className="mt-2 max-w-3xl text-vui-text-muted">
          Reusable ambient components for the npm package, paired with a richer showcase treatment in
          the docs app. The components stay practical and theme-aware, while this page pushes the
          presentation a bit further.
        </p>
      </div>

      <motion.section
        variants={containerMotion}
        initial="hidden"
        animate="visible"
        className="overflow-hidden rounded-[2rem] border border-vui-border bg-vui-surface"
      >
        <AnimatedBackground
          background={<GradientOrbs variant="hero" />}
          intensity="medium"
          speed="slow"
          contentClassName="grid gap-10 px-6 py-8 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-12"
        >
          <div className="max-w-2xl">
            <Badge variant="info" className="mb-4">
              Reusable + docs-only motion
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-vui-text md:text-5xl">
              Ambient motion that feels product-ready, not distracting
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-vui-text-muted">
              Use `AnimatedBackground` as the container, then swap decorative presets like
              `GradientOrbs` and `GridGlow` depending on whether the page needs softness or structure.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button>Use in package demos</Button>
              <Button variant="secondary">Theme-aware by default</Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {themeOptions.map((option) => {
                const active = option.value === theme
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setTheme(option.value)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
                      active
                        ? 'border-vui-primary bg-vui-primary-soft text-vui-primary'
                        : 'border-vui-border bg-vui-surface-translucent text-vui-text-muted hover:border-vui-border-strong hover:text-vui-text'
                    }`}
                  >
                    {option.label}
                  </button>
                )
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: easeCurve }}
            className="grid gap-4"
          >
            <Card variant="elevated" className="bg-vui-surface-translucent">
              <Card.Header>
                <span className="text-sm font-semibold text-vui-text">Ambient System</span>
                <span className="text-xs text-vui-text-subtle">Wrapper + presets + theme tokens</span>
              </Card.Header>
              <Card.Body>
                <div className="grid gap-3 text-sm text-vui-text-muted">
                  {systemNotes.map((note) => (
                    <div key={note} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-vui-primary" />
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>

            <Card variant="shadow" className="bg-vui-surface-translucent">
              <Card.Body>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-vui-text">Recommended defaults</p>
                    <p className="mt-1 text-xs text-vui-text-subtle">
                      `intensity=&quot;medium&quot;` and `speed=&quot;slow&quot;`
                    </p>
                  </div>
                  <div className="rounded-2xl border border-vui-border bg-vui-surface px-3 py-2 text-right">
                    <p className="text-xs uppercase tracking-[0.2em] text-vui-text-subtle">Style</p>
                    <p className="text-sm font-semibold text-vui-text">Restrained default</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </motion.div>
        </AnimatedBackground>
      </motion.section>

      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-vui-text">Preset gallery</h2>
          <p className="mt-2 text-vui-text-muted">
            Each preset stays decorative and composable. The wrapper controls motion intensity and
            timing so consumers do not have to tune raw CSS values.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {presetCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: easeCurve }}
            >
              <AnimatedBackground
                background={card.background}
                intensity={card.intensity}
                speed={card.speed}
                className="min-h-[20rem] rounded-[1.75rem] border border-vui-border bg-vui-surface"
                contentClassName="flex h-full flex-col justify-between p-6"
              >
                <div className="flex items-center justify-between">
                  <Badge variant="default">{card.accent}</Badge>
                  <span className="text-xs text-vui-text-subtle">
                    {card.intensity} / {card.speed}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-vui-text">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-vui-text-muted">{card.description}</p>
                </div>
              </AnimatedBackground>
            </motion.div>
          ))}
        </div>
      </section>

      <Divider />

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: easeCurve }}
        >
          <AnimatedBackground
            background={<GridGlow variant="panel" />}
            intensity="subtle"
            speed="fast"
            className="h-full rounded-[1.75rem] border border-vui-border bg-vui-surface"
            contentClassName="flex h-full flex-col justify-between gap-10 p-6"
          >
            <div>
              <Badge variant="success">Dashboard-friendly</Badge>
              <h2 className="mt-4 text-2xl font-bold text-vui-text">GridGlow adds structure</h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-vui-text-muted">
                This preset works well behind analytics tiles, technical feature callouts, empty
                states, and documentation sections where you want motion but still need crisp edges.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Card variant="bordered" className="bg-vui-surface-translucent">
                <Card.Body>
                  <p className="text-xs uppercase tracking-[0.2em] text-vui-text-subtle">Signal</p>
                  <p className="mt-2 text-3xl font-bold text-vui-text">98.4%</p>
                  <p className="mt-1 text-sm text-vui-text-muted">System uptime</p>
                </Card.Body>
              </Card>
              <Card variant="bordered" className="bg-vui-surface-translucent">
                <Card.Body>
                  <p className="text-xs uppercase tracking-[0.2em] text-vui-text-subtle">Latency</p>
                  <p className="mt-2 text-3xl font-bold text-vui-text">23ms</p>
                  <p className="mt-1 text-sm text-vui-text-muted">Median response time</p>
                </Card.Body>
              </Card>
            </div>
          </AnimatedBackground>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: easeCurve, delay: 0.08 }}
          className="grid gap-5"
        >
          <Card variant="bordered">
            <Card.Header>
              <span className="text-sm font-semibold text-vui-text">When to use each preset</span>
              <span className="text-xs text-vui-text-subtle">Keep the default system predictable</span>
            </Card.Header>
            <Card.Body>
              <div className="grid gap-4 text-sm text-vui-text-muted">
                <div>
                  <p className="font-semibold text-vui-text">GradientOrbs</p>
                  <p className="mt-1">Landing pages, auth screens, product launches, and premium hero sections.</p>
                </div>
                <div>
                  <p className="font-semibold text-vui-text">GridGlow</p>
                  <p className="mt-1">Dashboards, changelogs, feature grids, or more technical visual surfaces.</p>
                </div>
                <div>
                  <p className="font-semibold text-vui-text">AnimatedBackground</p>
                  <p className="mt-1">Any time you need a safe wrapper that manages layering and reduced motion.</p>
                </div>
              </div>
            </Card.Body>
          </Card>

          <AnimatedBackground
            background={<GradientOrbs variant="diagonal" />}
            intensity="medium"
            speed="medium"
            className="rounded-[1.75rem] border border-vui-border bg-vui-surface"
            contentClassName="p-6"
          >
            <div className="max-w-md">
              <Badge variant="warning">Package usage</Badge>
              <h3 className="mt-4 text-xl font-semibold text-vui-text">Composable by design</h3>
              <p className="mt-3 text-sm leading-6 text-vui-text-muted">
                Consumers can mix the wrapper with whichever preset fits the page, without pulling
                in a motion library or hand-authoring their own layered gradients.
              </p>
              <div className="mt-5 flex gap-3">
                <Button size="sm">AnimatedBackground</Button>
                <Button size="sm" variant="ghost">
                  GradientOrbs
                </Button>
              </div>
            </div>
          </AnimatedBackground>
        </motion.div>
      </section>
    </div>
  )
}
