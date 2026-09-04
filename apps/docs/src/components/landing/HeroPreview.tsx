'use client'
import { useState } from 'react'
import { Badge, Button, Switch, Slider } from '@velocityuikit/velocityui'
import { Icon } from '@/components/Icon'

export function HeroPreview() {
  const [period, setPeriod] = useState<'Week' | 'Month'>('Week')
  const [notifications, setNotifications] = useState(true)
  const [volume, setVolume] = useState(72)
  const [following, setFollowing] = useState(false)
  const bars =
    period === 'Week'
      ? [30, 49, 41, 68, 56, 83, 70, 92, 76, 100, 86, 112]
      : [48, 31, 62, 50, 85, 63, 77, 94, 83, 110, 101, 126]
  return (
    <div className="hero-preview">
      <div className="preview-caption">
        <span>
          <span className="status-dot" /> Live components
        </span>
        <span>Go ahead. Try them.</span>
      </div>
      <div className="metric-card">
        <div className="metric-heading">
          <span>
            <span className="metric-icon">
              <Icon name="layers" size={17} />
            </span>
            Workspace overview
          </span>
          <div className="mini-segment" role="group" aria-label="Chart period">
            {(['Week', 'Month'] as const).map((p) => (
              <button
                type="button"
                key={p}
                aria-pressed={period === p}
                onClick={() => setPeriod(p)}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
        <div className="metric-value">
          <div>
            <span className="muted">Total interactions</span>
            <strong>{period === 'Week' ? '24,680' : '98,420'}</strong>
          </div>
          <Badge variant="success" size="sm">
            ↗ {period === 'Week' ? '18.6%' : '24.2%'}
          </Badge>
        </div>
        <div className="bar-chart" role="img" aria-label={period + ' interactions trend upward'}>
          {bars.map((height, i) => (
            <span key={i} style={{ height, opacity: 0.24 + i * 0.068 }} />
          ))}
        </div>
        <div className="chart-labels">
          <span>{period === 'Week' ? 'Monday' : 'Week 1'}</span>
          <span>{period === 'Week' ? 'Sunday' : 'Week 4'}</span>
        </div>
      </div>
      <div className="preview-pair">
        <div className="mini-card">
          <span className="mini-card-title">A little more control</span>
          <div className="preference-row">
            <span>Notifications</span>
            <Switch
              id="hero-notifications"
              aria-label="Preview notifications"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              size="sm"
            />
          </div>
          <Slider label="Volume" value={volume} onChange={setVolume} showValue size="sm" />
        </div>
        <div className="mini-card profile-mini">
          <div className="avatar-art">
            JL
            <span />
          </div>
          <strong>Jamie Lee</strong>
          <span className="muted">Product designer</span>
          <Button
            size="sm"
            variant={following ? 'secondary' : 'outline'}
            onClick={() => setFollowing(!following)}
          >
            {following ? 'Following' : 'Follow'}
            <Icon name={following ? 'check' : 'plus'} size={13} />
          </Button>
        </div>
      </div>
      <div className="preview-footnote">
        <Icon name="code" size={14} /> Real React components. No mockup required.
      </div>
    </div>
  )
}
