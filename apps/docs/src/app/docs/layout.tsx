import { DocsSidebar } from '@/components/docs/DocsSidebar'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:px-8">
      <DocsSidebar />
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  )
}
