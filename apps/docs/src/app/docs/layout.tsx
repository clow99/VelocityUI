import { DocsSidebar } from '@/components/docs/DocsSidebar'
export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="docs-layout">
      <DocsSidebar />
      <main id="main-content" className="docs-main">
        {children}
      </main>
    </div>
  )
}
