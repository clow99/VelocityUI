'use client'

import { Alert, Badge, Button, Card, Progress, Select, Tabs, Title, Tooltip } from '@clow99/velocityui'
import { useState } from 'react'

const stats = [
  { label: 'Revenue', value: '$84,320', change: '+14.2%', up: true },
  { label: 'Orders', value: '1,248', change: '+9.8%', up: true },
  { label: 'Avg. Order Value', value: '$67.57', change: '-2.3%', up: false },
  { label: 'Return Rate', value: '3.2%', change: '-0.8%', up: true },
]

const orders = [
  { id: '#5091', customer: 'Emma Wilson', product: 'Wireless Headphones', status: 'success', amount: '$89.99', date: 'Mar 4' },
  { id: '#5090', customer: 'James Lee', product: 'USB-C Hub', status: 'warning', amount: '$49.00', date: 'Mar 4' },
  { id: '#5089', customer: 'Sophia Chen', product: 'Mechanical Keyboard', status: 'success', amount: '$129.99', date: 'Mar 3' },
  { id: '#5088', customer: 'Liam Patel', product: 'Webcam Pro', status: 'danger', amount: '$79.50', date: 'Mar 3' },
  { id: '#5087', customer: 'Olivia Kim', product: 'Desk Mat XL', status: 'success', amount: '$34.99', date: 'Mar 2' },
]

const statusLabel: Record<string, string> = {
  success: 'Fulfilled',
  warning: 'Processing',
  danger: 'Refunded',
}

const topProducts = [
  { name: 'Wireless Headphones', sold: 312, stock: 84, revenue: '$28,029', pct: 78 },
  { name: 'Mechanical Keyboard', sold: 198, stock: 12, revenue: '$25,758', pct: 59 },
  { name: 'USB-C Hub', sold: 441, stock: 203, revenue: '$21,609', pct: 43 },
  { name: 'Webcam Pro', sold: 167, stock: 55, revenue: '$13,269', pct: 31 },
  { name: 'Desk Mat XL', sold: 524, stock: 310, revenue: '$18,340', pct: 24 },
]

const ordersContent = (
  <Card variant="bordered">
    <Card.Body>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-vui-border">
              <th className="pb-3 text-left font-medium text-vui-text-muted">Order</th>
              <th className="pb-3 text-left font-medium text-vui-text-muted">Customer</th>
              <th className="pb-3 text-left font-medium text-vui-text-muted">Product</th>
              <th className="pb-3 text-left font-medium text-vui-text-muted">Status</th>
              <th className="pb-3 text-right font-medium text-vui-text-muted">Amount</th>
              <th className="pb-3 text-right font-medium text-vui-text-muted">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-vui-border">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="py-3 font-medium text-vui-primary">{order.id}</td>
                <td className="py-3 text-vui-text">{order.customer}</td>
                <td className="py-3 text-vui-text-muted">{order.product}</td>
                <td className="py-3">
                  <Badge variant={order.status as 'success' | 'warning' | 'danger'} size="sm" dot>
                    {statusLabel[order.status]}
                  </Badge>
                </td>
                <td className="py-3 text-right font-medium text-vui-text">{order.amount}</td>
                <td className="py-3 text-right text-vui-text-muted">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card.Body>
  </Card>
)

const productsContent = (
  <div className="flex flex-col gap-4">
    {topProducts.find((p) => p.stock < 20) && (
      <Alert variant="warning">
        Some products are running low on stock. Review inventory soon.
      </Alert>
    )}
    <Card variant="bordered">
      <Card.Body>
        <div className="flex flex-col gap-5">
          {topProducts.map((product) => (
            <div key={product.name} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-vui-text">{product.name}</span>
                  {product.stock < 20 && (
                    <Badge variant="warning" size="sm">Low stock</Badge>
                  )}
                </div>
                <div className="flex items-center gap-4 text-vui-text-muted">
                  <Tooltip content={`${product.sold} units sold`} placement="left">
                    <span className="cursor-default font-medium text-vui-text">{product.revenue}</span>
                  </Tooltip>
                  <span>{product.stock} in stock</span>
                </div>
              </div>
              <Progress value={product.pct} size="sm" variant={product.pct >= 60 ? 'success' : product.pct >= 30 ? 'primary' : 'warning'} />
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  </div>
)

export default function EcommerceExamplePage() {
  const [period, setPeriod] = useState('month')

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-start justify-between">
        <div>
          <Title as="h1" size="xl">
            E-Commerce
          </Title>
          <p className="mt-2 text-vui-text-muted">
            A store dashboard built with Card, Badge, Progress, Alert, Tabs, Tooltip, and Select.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={period} onChange={(e) => setPeriod(e.target.value)} size="sm">
            <option value="week">This week</option>
            <option value="month">This month</option>
            <option value="quarter">This quarter</option>
          </Select>
          <Button size="sm" variant="outline">Export</Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} variant="shadow" size="sm">
            <Card.Body>
              <p className="text-xs font-medium text-vui-text-muted">{stat.label}</p>
              <p className="mt-1 text-2xl font-bold text-vui-text">{stat.value}</p>
              <p className={`mt-1 text-xs font-medium ${stat.up ? 'text-green-600' : 'text-red-500'}`}>
                {stat.change} vs last period
              </p>
            </Card.Body>
          </Card>
        ))}
      </div>

      <Tabs
        defaultValue="orders"
        items={[
          { value: 'orders', label: 'Recent Orders', children: ordersContent },
          { value: 'products', label: 'Top Products', children: productsContent },
        ]}
      />
    </div>
  )
}


