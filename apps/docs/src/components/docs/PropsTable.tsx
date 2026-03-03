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
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
              Prop
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
              Type
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
              Default
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.name}
              className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
            >
              <td className="px-4 py-3 align-top">
                <span className="font-mono text-xs font-semibold text-gray-900">
                  {row.name}
                  {row.required && (
                    <span className="ml-1 text-red-500" title="Required">*</span>
                  )}
                </span>
              </td>
              <td className="px-4 py-3 align-top">
                <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs text-violet-700">
                  {row.type}
                </code>
              </td>
              <td className="px-4 py-3 align-top">
                {row.default ? (
                  <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs text-gray-600">
                    {row.default}
                  </code>
                ) : (
                  <span className="text-gray-400">—</span>
                )}
              </td>
              <td className="px-4 py-3 align-top text-gray-600 leading-relaxed">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
