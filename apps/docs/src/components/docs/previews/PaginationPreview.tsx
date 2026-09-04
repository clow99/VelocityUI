'use client'

import { Badge, Card, Pagination } from '@velocityuikit/velocityui'
import { Icon } from '@/components/Icon'
import { useState } from 'react'

export function PaginationPreview() {
  const [page1, setPage1] = useState(1)
  const [page2, setPage2] = useState(6)
  const [page3, setPage3] = useState(3)
  const files = [
    'Button.tsx',
    'Card.tsx',
    'Input.tsx',
    'Tabs.tsx',
    'Pagination.tsx',
    'Dialog.tsx',
    'Dropdown.tsx',
    'Select.tsx',
    'Checkbox.tsx',
    'Switch.tsx',
    'Tooltip.tsx',
    'ChatInput.tsx',
  ]

  return (
    <div className="pagination-examples">
      <Card>
        <Card.Header>
          <div className="pagination-card-heading">
            <div>
              <h3>Component files</h3>
              <p>The building blocks of your next project.</p>
            </div>
            <Badge size="sm">12 files</Badge>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="pagination-files">
            {files.slice((page1 - 1) * 3, page1 * 3).map((file) => (
              <div key={file}>
                <span className="pagination-file-icon">
                  <Icon name="code" size={17} />
                </span>
                <span>{file}</span>
                <Badge size="sm" variant="default">
                  TypeScript
                </Badge>
              </div>
            ))}
          </div>
        </Card.Body>
        <Card.Footer>
          <div className="pagination-card-footer">
            <span role="status">
              Showing {(page1 - 1) * 3 + 1}–{page1 * 3} of 12
            </span>
            <Pagination
              aria-label="Component files pagination"
              page={page1}
              totalPages={4}
              onChange={setPage1}
              showFirstLast={false}
            />
          </div>
        </Card.Footer>
      </Card>
      <div>
        <p className="pagination-pattern-label">
          Longer collections <span>Page {page2} of 20</span>
        </p>
        <Pagination page={page2} totalPages={20} onChange={setPage2} siblingCount={2} />
      </div>
      <div>
        <p className="pagination-pattern-label">
          Without boundary controls <span>Page {page3} of 8</span>
        </p>
        <Pagination page={page3} totalPages={8} onChange={setPage3} showFirstLast={false} />
      </div>
    </div>
  )
}
