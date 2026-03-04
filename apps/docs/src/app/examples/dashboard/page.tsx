'use client'

import { Badge, Button, Card, Dialog, Select, Tabs, Title, Tooltip } from 'velocityui'
import { useState } from 'react'

const stats = [
  { label: 'Total Revenue', value: '$48,295', change: '+12.5%', up: true },
  { label: 'Active Users', value: '3,842', change: '+8.1%', up: true },
  { label: 'New Orders', value: '284', change: '-3.2%', up: false },
  { label: 'Conversion Rate', value: '4.6%', change: '+0.4%', up: true },
]

const recentOrders = [
  { id: '#ORD-001', customer: 'Alice Johnson', status: 'success', amount: '$120.00', date: 'Mar 4, 2026' },
  { id: '#ORD-002', customer: 'Bob Smith', status: 'warning', amount: '$89.50', date: 'Mar 4, 2026' },
  { id: '#ORD-003', customer: 'Carol White', status: 'success', amount: '$345.00', date: 'Mar 3, 2026' },
  { id: '#ORD-004', customer: 'David Brown', status: 'danger', amount: '$210.75', date: 'Mar 3, 2026' },
  { id: '#ORD-005', customer: 'Eva Martinez', status: 'success', amount: '$67.20', date: 'Mar 2, 2026' },
]

const statusLabel: Record<string, string> = {
  success: 'Completed',
  warning: 'Pending',
  danger: 'Cancelled',
}

const ordersContent = (
  <Card variant="bordered">
    <Card.Body>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-vui-border">
              <th className="pb-3 text-left font-medium text-vui-text-muted">Order</th>
              <th className="pb-3 text-left font-medium text-vui-text-muted">Customer</th>
              <th className="pb-3 text-left font-medium text-vui-text-muted">Status</th>
              <th className="pb-3 text-left font-medium text-vui-text-muted">Amount</th>
              <th className="pb-3 text-left font-medium text-vui-text-muted">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-vui-border">
            {recentOrders.map((order) => (
              <tr key={order.id}>
                <td className="py-3 font-medium text-vui-primary">{order.id}</td>
                <td className="py-3 text-vui-text">{order.customer}</td>
                <td className="py-3">
                  <Badge variant={order.status as 'success' | 'warning' | 'danger'} size="sm" dot>
                    {statusLabel[order.status]}
                  </Badge>
                </td>
                <td className="py-3 font-medium text-vui-text">{order.amount}</td>
                <td className="py-3 text-vui-text-muted">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card.Body>
  </Card>
)

const activityContent = (
  <Card variant="bordered">
    <Card.Body>
      <div className="flex flex-col gap-4">
        {[
          { action: 'New user registered', time: '2 minutes ago', color: 'bg-blue-500' },
          { action: 'Order #ORD-003 completed', time: '15 minutes ago', color: 'bg-green-500' },
          { action: 'Server restarted', time: '1 hour ago', color: 'bg-yellow-500' },
          { action: 'Order #ORD-004 cancelled', time: '3 hours ago', color: 'bg-red-500' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className={`h-2 w-2 flex-shrink-0 rounded-full ${item.color}`} />
            <span className="flex-1 text-sm text-vui-text">{item.action}</span>
            <span className="text-xs text-vui-text-muted">{item.time}</span>
          </div>
        ))}
      </div>
    </Card.Body>
  </Card>
)

const teamContent = (
  <Card variant="bordered">
    <Card.Body>
      <div className="flex flex-col gap-3">
        {[
          { name: 'Alice Johnson', role: 'Admin', initials: 'AJ', status: 'success' },
          { name: 'Bob Smith', role: 'Editor', initials: 'BS', status: 'success' },
          { name: 'Carol White', role: 'Viewer', initials: 'CW', status: 'warning' },
        ].map((member) => (
          <div key={member.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-vui-primary text-xs font-bold text-white">
                {member.initials}
              </div>
              <div>
                <p className="text-sm font-medium text-vui-text">{member.name}</p>
                <p className="text-xs text-vui-text-muted">{member.role}</p>
              </div>
            </div>
            <Badge variant={member.status as 'success' | 'warning'} size="sm">
              {member.status === 'success' ? 'Active' : 'Away'}
            </Badge>
          </div>
        ))}
      </div>
    </Card.Body>
  </Card>
)

export default function DashboardExamplePage() {
  const [exportOpen, setExportOpen] = useState(false)
  const [exportFormat, setExportFormat] = useState('csv')
  const [exporting, setExporting] = useState(false)

  const handleExport = () => {
    setExporting(true)
    setTimeout(() => {
      setExporting(false)
      setExportOpen(false)
    }, 1200)
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-start justify-between">
        <div>
          <Title as="h1" size="xl">
            Dashboard
          </Title>
          <p className="mt-2 text-vui-text-muted">
            An overview dashboard built with Card, Badge, Tabs, Tooltip, Dialog, and Button.
          </p>
        </div>
        <Button size="sm" onClick={() => setExportOpen(true)}>Export Report</Button>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} variant="shadow" size="sm">
            <Card.Body>
              <p className="text-xs font-medium text-vui-text-muted">{stat.label}</p>
              <p className="mt-1 text-2xl font-bold text-vui-text">{stat.value}</p>
              <Tooltip content="Compared to the same period last month" placement="bottom">
                <p className={`mt-1 inline-block cursor-default text-xs font-medium ${stat.up ? 'text-green-600' : 'text-red-500'}`}>
                  {stat.change} vs last month
                </p>
              </Tooltip>
            </Card.Body>
          </Card>
        ))}
      </div>

      <Tabs
        defaultValue="orders"
        items={[
          { value: 'orders', label: 'Recent Orders', children: ordersContent },
          { value: 'activity', label: 'Activity', children: activityContent },
          { value: 'team', label: 'Team', children: teamContent },
        ]}
      />

      <Dialog
        open={exportOpen}
        onClose={() => setExportOpen(false)}
        title="Export Report"
        description="Choose a format to export the current dashboard data."
        size="sm"
      >
        <Dialog.Body>
          <Select
            label="Export format"
            fullWidth
            value={exportFormat}
            onChange={(e) => setExportFormat(e.target.value)}
          >
            <option value="csv">CSV (.csv)</option>
            <option value="xlsx">Excel (.xlsx)</option>
            <option value="json">JSON (.json)</option>
            <option value="pdf">PDF (.pdf)</option>
          </Select>
        </Dialog.Body>
        <Dialog.Footer>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setExportOpen(false)}>
              Cancel
            </Button>
            <Button loading={exporting} onClick={handleExport}>
              {exporting ? 'Exporting...' : 'Export'}
            </Button>
          </div>
        </Dialog.Footer>
      </Dialog>
    </div>
  )
}
