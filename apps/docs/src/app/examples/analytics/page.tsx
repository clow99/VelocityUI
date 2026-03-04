'use client'

import { Badge, Button, Card, Progress, Select, Tabs, Title, Tooltip } from '@clow99/velocityui'
import { useState } from 'react'

const kpis = [
  { label: 'Total Visitors', value: '124,530', change: '+18.2%', up: true, tooltip: 'Unique visitors this month' },
  { label: 'Page Views', value: '398,210', change: '+22.7%', up: true, tooltip: 'Total page views this month' },
  { label: 'Bounce Rate', value: '42.3%', change: '-4.1%', up: true, tooltip: 'Lower is better' },
  { label: 'Avg. Session', value: '3m 28s', change: '+0:12', up: true, tooltip: 'Average time on site' },
]

const topPages = [
  { path: '/home', views: 48210, change: '+12%', up: true },
  { path: '/pricing', views: 22140, change: '+31%', up: true },
  { path: '/docs/button', views: 18930, change: '+8%', up: true },
  { path: '/blog/release-v1', views: 14520, change: '+54%', up: true },
  { path: '/examples/dashboard', views: 9840, change: '-3%', up: false },
  { path: '/login', views: 7760, change: '+2%', up: true },
]

const trafficSources = [
  { source: 'Organic Search', visits: 54200, pct: 43 },
  { source: 'Direct', visits: 31800, pct: 25 },
  { source: 'Referral', visits: 22600, pct: 18 },
  { source: 'Social', visits: 11400, pct: 9 },
  { source: 'Email', visits: 4530, pct: 4 },
  { source: 'Other', visits: 0, pct: 1 },
]

const weeklyData = [
  { day: 'Mon', visitors: 14200, views: 38100 },
  { day: 'Tue', visitors: 16800, views: 44900 },
  { day: 'Wed', visitors: 19100, views: 51300 },
  { day: 'Thu', visitors: 17600, views: 47200 },
  { day: 'Fri', visitors: 21400, views: 59800 },
  { day: 'Sat', visitors: 18900, views: 52400 },
  { day: 'Sun', visitors: 16530, views: 44510 },
]

const maxVisitors = Math.max(...weeklyData.map((d) => d.visitors))

const chartContent = (
  <Card variant="bordered">
    <Card.Body>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 text-xs text-vui-text-muted">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-vui-primary" />
            Visitors
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-vui-primary opacity-30" />
            Page Views
          </span>
        </div>
        <div className="flex items-end gap-2 overflow-x-auto pb-2" style={{ height: 160 }}>
          {weeklyData.map((d) => (
            <div key={d.day} className="flex flex-1 flex-col items-center gap-1 min-w-[36px]">
              <div className="flex w-full items-end gap-0.5" style={{ height: 120 }}>
                <div
                  className="flex-1 rounded-t-sm bg-vui-primary opacity-30"
                  style={{ height: `${(d.views / (maxVisitors * 4)) * 100}%` }}
                />
                <div
                  className="flex-1 rounded-t-sm bg-vui-primary"
                  style={{ height: `${(d.visitors / maxVisitors) * 100}%` }}
                />
              </div>
              <span className="text-xs text-vui-text-muted">{d.day}</span>
            </div>
          ))}
        </div>
      </div>
    </Card.Body>
  </Card>
)

const topPagesContent = (
  <Card variant="bordered">
    <Card.Body>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-vui-border">
              <th className="pb-3 text-left font-medium text-vui-text-muted">Page</th>
              <th className="pb-3 text-right font-medium text-vui-text-muted">Views</th>
              <th className="pb-3 text-right font-medium text-vui-text-muted">Change</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-vui-border">
            {topPages.map((page) => (
              <tr key={page.path}>
                <td className="py-3 font-mono text-vui-primary">{page.path}</td>
                <td className="py-3 text-right font-medium text-vui-text">
                  {page.views.toLocaleString()}
                </td>
                <td className="py-3 text-right">
                  <Badge
                    variant={page.up ? 'success' : 'danger'}
                    size="sm"
                  >
                    {page.change}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card.Body>
  </Card>
)

const sourcesContent = (
  <Card variant="bordered">
    <Card.Body>
      <div className="flex flex-col gap-4">
        {trafficSources.map((src) => (
          <div key={src.source} className="flex flex-col gap-1">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-vui-text">{src.source}</span>
              <span className="text-vui-text-muted">
                {src.visits > 0 ? src.visits.toLocaleString() : '—'}{' '}
                <span className="text-xs">({src.pct}%)</span>
              </span>
            </div>
            <Progress value={src.pct} size="sm" variant="primary" />
          </div>
        ))}
      </div>
    </Card.Body>
  </Card>
)

export default function AnalyticsExamplePage() {
  const [range, setRange] = useState('7d')

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-start justify-between">
        <div>
          <Title as="h1" size="xl">
            Analytics
          </Title>
          <p className="mt-2 text-vui-text-muted">
            A site analytics dashboard built with Card, Badge, Progress, Tabs, Tooltip, and Select.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={range} onChange={(e) => setRange(e.target.value)} size="sm">
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </Select>
          <Button size="sm" variant="outline">Export</Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {kpis.map((kpi) => (
          <Card key={kpi.label} variant="shadow" size="sm">
            <Card.Body>
              <p className="text-xs font-medium text-vui-text-muted">{kpi.label}</p>
              <p className="mt-1 text-2xl font-bold text-vui-text">{kpi.value}</p>
              <Tooltip content={kpi.tooltip} placement="bottom">
                <p className={`mt-1 inline-block cursor-default text-xs font-medium ${kpi.up ? 'text-green-600' : 'text-red-500'}`}>
                  {kpi.change} vs prev period
                </p>
              </Tooltip>
            </Card.Body>
          </Card>
        ))}
      </div>

      <Tabs
        defaultValue="chart"
        items={[
          { value: 'chart', label: 'Visitors & Views', children: chartContent },
          { value: 'pages', label: 'Top Pages', children: topPagesContent },
          { value: 'sources', label: 'Traffic Sources', children: sourcesContent },
        ]}
      />
    </div>
  )
}

