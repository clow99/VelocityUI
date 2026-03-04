'use client'

import { Pagination } from '@clow99/velocityui'
import { useState } from 'react'

export function PaginationPreview() {
  const [page1, setPage1] = useState(1)
  const [page2, setPage2] = useState(6)

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">
          Basic — page {page1} of 10
        </p>
        <Pagination page={page1} totalPages={10} onChange={setPage1} />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">
          More siblings — page {page2} of 20
        </p>
        <Pagination page={page2} totalPages={20} onChange={setPage2} siblingCount={2} />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">No first/last buttons</p>
        <Pagination page={3} totalPages={8} onChange={() => {}} showFirstLast={false} />
      </div>
    </div>
  )
}

