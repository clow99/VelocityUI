'use client'

import { Table } from 'velocityui'
import { useState } from 'react'
import type { SortDirection } from 'velocityui'

interface Row {
  name: string
  role: string
  status: string
  joined: string
}

const data: Row[] = [
  { name: 'Alice Brown', role: 'Engineer', status: 'Active', joined: '2022-03' },
  { name: 'Bob Chen', role: 'Designer', status: 'Inactive', joined: '2021-07' },
  { name: 'Carol Davis', role: 'Manager', status: 'Active', joined: '2020-11' },
  { name: 'Dan Evans', role: 'Engineer', status: 'Active', joined: '2023-01' },
]

export function TablePreview() {
  const [sortKey, setSortKey] = useState('')
  const [sortDir, setSortDir] = useState<SortDirection>('asc')

  const sorted = [...data].sort((a, b) => {
    if (!sortKey) return 0
    const av = a[sortKey as keyof Row]
    const bv = b[sortKey as keyof Row]
    const cmp = av < bv ? -1 : av > bv ? 1 : 0
    return sortDir === 'asc' ? cmp : -cmp
  })

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Sortable</p>
        <Table
          columns={[
            { key: 'name', header: 'Name', sortable: true },
            { key: 'role', header: 'Role', sortable: true },
            { key: 'status', header: 'Status' },
            { key: 'joined', header: 'Joined', sortable: true },
          ]}
          data={sorted}
          sortKey={sortKey}
          sortDir={sortDir}
          onSort={(key, dir) => { setSortKey(key); setSortDir(dir) }}
        />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Striped and bordered</p>
        <Table
          columns={[
            { key: 'name', header: 'Name' },
            { key: 'role', header: 'Role' },
            { key: 'status', header: 'Status' },
          ]}
          data={data}
          striped
          bordered
          size="sm"
        />
      </div>
    </div>
  )
}
