import { readFile } from 'fs/promises'
import path from 'path'
import { marked } from 'marked'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Agent Guide — VelocityUI',
  description:
    'A practical reference document for AI coding agents building React UIs with the VelocityUI component library.',
}

export default async function AiGuidePage() {
  const filePath = path.join(process.cwd(), 'public', 'downloads', 'velocityui-ai-guide.md')
  const raw = await readFile(filePath, 'utf-8')
  const html = await marked(raw)

  return (
    <article className="max-w-3xl">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-vui-text">AI Agent Guide</h1>
          <p className="mt-3 text-lg text-vui-text-subtle leading-relaxed">
            A practical reference for AI coding agents building React UIs with VelocityUI. Covers
            setup, all components, accessibility rules, theming, common pitfalls, and ready-to-use
            prompt templates.
          </p>
        </div>
        <a
          href="/downloads/velocityui-ai-guide.md"
          download="VelocityUI-AI-Guide.md"
          className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-vui-border bg-vui-surface px-5 py-2.5 text-sm font-semibold text-vui-text-muted transition-all hover:border-vui-border-strong hover:bg-vui-surface-muted hover:-translate-y-0.5"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download .md
        </a>
      </div>

      <div
        className="vui-prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  )
}
