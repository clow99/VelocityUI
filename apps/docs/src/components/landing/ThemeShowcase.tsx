'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Button, Input, Switch, Badge } from '@velocityuikit/velocityui'
import { useTheme, THEMES, DENSITIES } from '@/components/ThemeContext'
import { CopyButton } from '@/components/CopyButton'
import { Icon } from '@/components/Icon'
const colors = [
  '#315ddc',
  '#9bb6ff',
  '#0891b2',
  '#22d3ee',
  '#ea580c',
  '#eab308',
  '#8b5cf6',
  '#0ea5e9',
  '#fde047',
  '#ef4444',
]
export function ThemeShowcase() {
  const { theme, setTheme, density, setDensity } = useTheme()
  const [notifications, setNotifications] = useState(true)
  const [project, setProject] = useState('Something wonderful')
  const [saved, setSaved] = useState(false)
  const themeName = THEMES.find((option) => option.value === theme)?.label
  const configuration = `import '@velocityuikit/velocityui/dist/style.css'\n\n// Apply to your root layout, or scope to a section.\n<div className="vui-theme-${theme} vui-density-${density}">\n  {/* Your components */}\n</div>`
  return (
    <section
      className="theme-workspace"
      id="theme-playground"
      aria-labelledby="theme-workspace-title"
    >
      <div className="section-heading">
        <div>
          <span className="eyebrow">Your product. Your personality.</span>
          <h2 id="theme-workspace-title">A different feel. The same foundation.</h2>
          <p>Explore ten themes and three densities. Take your favorite into your project.</p>
        </div>
        <Link href="/docs/theming" className="text-link">
          Theming guide <Icon name="arrow" size={16} />
        </Link>
      </div>
      <div className="theme-workspace-grid">
        <div className="theme-workspace-controls">
          <div className="workspace-label">
            <span>01 / Choose your palette</span>
            <span>{themeName}</span>
          </div>
          <div className="theme-palette-grid" role="group" aria-label="Try a theme">
            {THEMES.map((option, index) => (
              <button
                key={option.value}
                type="button"
                aria-pressed={theme === option.value}
                onClick={() => setTheme(option.value)}
              >
                <span className="palette-chip" style={{ background: colors[index] }}>
                  {theme === option.value && <Icon name="check" size={17} />}
                </span>
                <span>{option.label}</span>
              </button>
            ))}
          </div>
          <div className="workspace-label">
            <span>02 / Set your spacing</span>
          </div>
          <div className="density-options" role="group" aria-label="Preview density">
            {DENSITIES.map((option) => (
              <button
                key={option.value}
                type="button"
                aria-pressed={density === option.value}
                onClick={() => setDensity(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
          <p className="workspace-help">
            <Icon name="palette" size={16} /> Your choices apply across the site and stay saved in
            this browser.
          </p>
        </div>
        <div className="theme-workspace-preview">
          <div className="workspace-label">
            <span>
              <span className="status-dot" /> Live preview
            </span>
            <Badge variant="default" size="sm">
              {themeName}
            </Badge>
          </div>
          <form
            className="theme-project-card"
            onSubmit={(event) => {
              event.preventDefault()
              setSaved(true)
            }}
          >
            <div className="project-card-icon">
              <Icon name="layers" size={23} />
            </div>
            <h3>A space for your next idea.</h3>
            <p>Thoughtful defaults. Entirely your own.</p>
            <Input
              label="Project name"
              value={project}
              required
              onChange={(event) => {
                setProject(event.target.value)
                setSaved(false)
              }}
              fullWidth
            />
            <div className="theme-notification-row">
              <div>
                <strong>Keep me in the loop</strong>
                <span>Product news and project updates.</span>
              </div>
              <Switch
                aria-label="Project notifications"
                checked={notifications}
                onChange={(event) => {
                  setNotifications(event.target.checked)
                  setSaved(false)
                }}
              />
            </div>
            <Button type="submit" fullWidth>
              {saved ? 'Preferences saved' : 'Save preferences'}
              <Icon name={saved ? 'check' : 'arrow'} size={16} />
            </Button>
            <p className="preview-save-status" role="status">
              {saved
                ? 'Saved for this preview. Nothing is sent.'
                : 'An interactive preview, built with VelocityUI.'}
            </p>
          </form>
        </div>
      </div>
      <div className="theme-export code-panel">
        <div className="code-toolbar">
          <span>
            <Icon name="code" size={15} />
            Your theme, ready to use
          </span>
          <CopyButton text={configuration} label="Copy theme configuration" />
        </div>
        <pre tabIndex={0} aria-label="Theme configuration">
          <code>{configuration}</code>
        </pre>
      </div>
    </section>
  )
}
