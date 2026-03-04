'use client'

import { Alert, Badge, Button, Card, Dialog, Divider, Progress, Title } from '@clow99/velocityui'
import { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    features: ['5 projects', '10 team members', '1 GB storage', 'Community support'],
    current: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/mo',
    features: ['Unlimited projects', '50 team members', '50 GB storage', 'Priority support', 'Custom domain'],
    current: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/mo',
    features: ['Everything in Pro', 'Unlimited members', '1 TB storage', 'SLA guarantee', 'Dedicated support'],
    current: false,
  },
]

const invoices = [
  { id: 'INV-2026-03', date: 'Mar 1, 2026', amount: '$29.00', status: 'success' },
  { id: 'INV-2026-02', date: 'Feb 1, 2026', amount: '$29.00', status: 'success' },
  { id: 'INV-2026-01', date: 'Jan 1, 2026', amount: '$29.00', status: 'success' },
  { id: 'INV-2025-12', date: 'Dec 1, 2025', amount: '$29.00', status: 'success' },
  { id: 'INV-2025-11', date: 'Nov 1, 2025', amount: '$29.00', status: 'success' },
]

const usage = [
  { label: 'Projects', used: 12, limit: 50, unit: '' },
  { label: 'Team members', used: 8, limit: 50, unit: '' },
  { label: 'Storage', used: 18.4, limit: 50, unit: ' GB' },
  { label: 'API calls', used: 41200, limit: 100000, unit: '' },
]

export default function BillingExamplePage() {
  const [cancelOpen, setCancelOpen] = useState(false)
  const [upgradeOpen, setUpgradeOpen] = useState(false)
  const [cancelling, setCancelling] = useState(false)
  const [cancelled, setCancelled] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')
  const [upgrading, setUpgrading] = useState(false)

  const handleCancel = () => {
    setCancelling(true)
    setTimeout(() => {
      setCancelling(false)
      setCancelOpen(false)
      setCancelled(true)
    }, 1200)
  }

  const handleUpgrade = () => {
    setUpgrading(true)
    setTimeout(() => {
      setUpgrading(false)
      setUpgradeOpen(false)
    }, 1200)
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Title as="h1" size="xl">Billing</Title>
        <p className="mt-2 text-vui-text-muted">
          A billing settings page built with Card, Badge, Progress, Dialog, Divider, Alert, and Button.
        </p>
      </div>

      {cancelled && (
        <Alert variant="warning">
          Your subscription has been cancelled. You&apos;ll retain access until the end of the billing period.
        </Alert>
      )}

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            variant={plan.current ? 'shadow' : 'bordered'}
            size="md"
            className={plan.current ? 'ring-2 ring-vui-primary' : ''}
          >
            <Card.Header>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-vui-text">{plan.name}</p>
                  <p className="mt-0.5 text-2xl font-bold text-vui-text">
                    {plan.price}
                    <span className="text-sm font-normal text-vui-text-muted">{plan.period}</span>
                  </p>
                </div>
                {plan.current && (
                  <Badge variant="primary" size="sm">Current plan</Badge>
                )}
              </div>
            </Card.Header>
            <Card.Body>
              <ul className="flex flex-col gap-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-vui-text-muted">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-green-500">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </Card.Body>
            <Card.Footer>
              {plan.current ? (
                <Button
                  variant="outline"
                  fullWidth
                  size="sm"
                  onClick={() => setCancelOpen(true)}
                  disabled={cancelled}
                >
                  {cancelled ? 'Cancelled' : 'Cancel plan'}
                </Button>
              ) : (
                <Button
                  fullWidth
                  size="sm"
                  onClick={() => { setSelectedPlan(plan.name); setUpgradeOpen(true) }}
                >
                  {plan.name === 'Starter' ? 'Downgrade' : 'Upgrade'}
                </Button>
              )}
            </Card.Footer>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card variant="bordered">
          <Card.Header>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-vui-text">Usage this period</p>
              <Badge variant="default" size="sm">Resets Apr 1</Badge>
            </div>
          </Card.Header>
          <Card.Body>
            <div className="flex flex-col gap-5">
              {usage.map((item) => {
                const pct = Math.round((item.used / item.limit) * 100)
                const variant = pct >= 80 ? 'danger' : pct >= 60 ? 'warning' : 'primary'
                return (
                  <div key={item.label} className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-vui-text">{item.label}</span>
                      <span className="text-vui-text-muted">
                        {item.used.toLocaleString()}{item.unit} / {item.limit.toLocaleString()}{item.unit}
                      </span>
                    </div>
                    <Progress value={pct} size="sm" variant={variant} />
                  </div>
                )
              })}
            </div>
          </Card.Body>
        </Card>

        <Card variant="bordered">
          <Card.Header>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-vui-text">Payment method</p>
              <Button size="sm" variant="outline">Update</Button>
            </div>
          </Card.Header>
          <Card.Body>
            <div className="flex items-center gap-4 rounded-lg border border-vui-border bg-vui-surface-muted p-4">
              <div className="flex h-10 w-16 items-center justify-center rounded-md border border-vui-border bg-vui-surface text-xs font-bold text-vui-text">
                VISA
              </div>
              <div>
                <p className="text-sm font-medium text-vui-text">Visa ending in 4242</p>
                <p className="text-xs text-vui-text-muted">Expires 08 / 2028</p>
              </div>
              <Badge variant="success" size="sm" className="ml-auto">Default</Badge>
            </div>
            <Divider className="my-4" />
            <button className="flex w-full items-center justify-between rounded-lg border border-dashed border-vui-border px-4 py-3 text-sm text-vui-text-muted transition-colors hover:bg-vui-surface-muted hover:text-vui-text">
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Add payment method
              </span>
            </button>
          </Card.Body>
        </Card>
      </div>

      <Card variant="bordered">
        <Card.Header>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-vui-text">Invoice history</p>
            <Button size="sm" variant="outline">Download all</Button>
          </div>
        </Card.Header>
        <Card.Body>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-vui-border">
                <th className="pb-3 text-left font-medium text-vui-text-muted">Invoice</th>
                <th className="pb-3 text-left font-medium text-vui-text-muted">Date</th>
                <th className="pb-3 text-left font-medium text-vui-text-muted">Amount</th>
                <th className="pb-3 text-left font-medium text-vui-text-muted">Status</th>
                <th className="pb-3 text-right font-medium text-vui-text-muted">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-vui-border">
              {invoices.map((inv) => (
                <tr key={inv.id}>
                  <td className="py-3 font-medium text-vui-primary">{inv.id}</td>
                  <td className="py-3 text-vui-text-muted">{inv.date}</td>
                  <td className="py-3 font-medium text-vui-text">{inv.amount}</td>
                  <td className="py-3">
                    <Badge variant="success" size="sm" dot>Paid</Badge>
                  </td>
                  <td className="py-3 text-right">
                    <Button size="sm" variant="ghost">Download</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card.Body>
      </Card>

      <Dialog
        open={cancelOpen}
        onClose={() => setCancelOpen(false)}
        title="Cancel subscription"
        description="Are you sure you want to cancel your Pro plan? You'll lose access to Pro features at the end of your billing period."
        size="sm"
      >
        <Dialog.Footer>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setCancelOpen(false)}>Keep plan</Button>
            <Button variant="danger" loading={cancelling} onClick={handleCancel}>
              {cancelling ? 'Cancelling...' : 'Yes, cancel'}
            </Button>
          </div>
        </Dialog.Footer>
      </Dialog>

      <Dialog
        open={upgradeOpen}
        onClose={() => setUpgradeOpen(false)}
        title={`Switch to ${selectedPlan}`}
        description={`You're about to change your plan to ${selectedPlan}. The change will take effect immediately and your billing will be adjusted accordingly.`}
        size="sm"
      >
        <Dialog.Footer>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setUpgradeOpen(false)}>Cancel</Button>
            <Button loading={upgrading} onClick={handleUpgrade}>
              {upgrading ? 'Switching...' : 'Confirm switch'}
            </Button>
          </div>
        </Dialog.Footer>
      </Dialog>
    </div>
  )
}

