'use client'

import { useState } from 'react'
import { CodeBlock } from './CodeBlock'

const managers = ['npm', 'yarn', 'pnpm', 'bun'] as const
type Manager = (typeof managers)[number]

const installCommands: Record<Manager, string> = {
  npm: 'npm install @velocityuikit/velocityui',
  yarn: 'yarn add @velocityuikit/velocityui',
  pnpm: 'pnpm add @velocityuikit/velocityui',
  bun: 'bun add @velocityuikit/velocityui',
}

export function PackageManagerTabs() {
  const [active, setActive] = useState<Manager>('npm')

  return (
    <div>
      <div className="mb-0 flex gap-1 rounded-t-xl border border-b-0 border-gray-800 bg-gray-950 px-3 pt-2">
        {managers.map((pm) => (
          <button
            key={pm}
            onClick={() => setActive(pm)}
            className={`rounded-t-md px-3 py-1.5 text-xs font-medium transition-colors ${
              active === pm
                ? 'bg-gray-800 text-gray-200'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {pm}
          </button>
        ))}
      </div>
      <div className="rounded-b-xl rounded-tr-xl border border-gray-800 bg-gray-950">
        <div className="flex items-center justify-between border-b border-gray-800 px-4 py-2">
          <span className="text-xs font-medium text-gray-500">bash</span>
          <CopyButton text={installCommands[active]} />
        </div>
        <pre className="overflow-x-auto p-4">
          <code className="font-mono text-sm leading-relaxed text-gray-300 whitespace-pre">
            {installCommands[active]}
          </code>
        </pre>
      </div>
    </div>
  )
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={copy}
      aria-label="Copy code"
      className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-800 hover:text-gray-300"
    >
      {copied ? (
        <>
          <svg className="h-3.5 w-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-green-400">Copied</span>
        </>
      ) : (
        <>
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy
        </>
      )}
    </button>
  )
}
