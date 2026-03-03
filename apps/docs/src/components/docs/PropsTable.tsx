export interface PropRow {
  name: string
  type: string
  default?: string
  required?: boolean
  description: string
}

interface PropsTableProps {
  rows: PropRow[]
}

export function PropsTable({ rows }: PropsTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-vui-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-vui-border bg-vui-surface-muted">
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">
              Prop
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">
              Type
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">
              Default
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.name}
              className={i % 2 === 0 ? 'bg-vui-surface' : 'bg-vui-surface-muted/50'}
            >
              <td className="px-4 py-3 align-top">
                <span className="font-mono text-xs font-semibold text-vui-text">
                  {row.name}
                  {row.required && (
                    <span className="ml-1 text-vui-danger" title="Required">*</span>
                  )}
                </span>
              </td>
              <td className="px-4 py-3 align-top">
                <code className="rounded bg-vui-surface-muted px-1.5 py-0.5 font-mono text-xs text-vui-primary">
                  {row.type}
                </code>
              </td>
              <td className="px-4 py-3 align-top">
                {row.default ? (
                  <code className="rounded bg-vui-surface-muted px-1.5 py-0.5 font-mono text-xs text-vui-text-muted">
                    {row.default}
                  </code>
                ) : (
                  <span className="text-vui-text-subtle">—</span>
                )}
              </td>
              <td className="px-4 py-3 align-top text-vui-text-muted leading-relaxed">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
