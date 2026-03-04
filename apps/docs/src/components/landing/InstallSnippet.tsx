'use client'

import { useState } from 'react'

const managers = [
  { label: 'npm', command: 'npm install https://git.cameronlow.com/cam/VelocityUI/packages' },
  { label: 'pnpm', command: 'pnpm add https://git.cameronlow.com/cam/VelocityUI/packages' },
  { label: 'yarn', command: 'yarn add https://git.cameronlow.com/cam/VelocityUI/packages' },
]

export function InstallSnippet() {
  const [active, setActive] = useState(0)
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(managers[active].command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mt-10 inline-flex w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gray-950 text-left shadow-xl">
      {/* Tabs */}
      <div className="flex items-center border-b border-gray-800 px-4 pt-3">
        <div className="flex gap-1.5 pb-0">
          {managers.map((m, i) => (
            <button
              key={m.label}
              onClick={() => setActive(i)}
              className={`rounded-t px-3 py-1.5 text-xs font-medium transition-colors ${
                i === active
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Command */}
      <div className="flex items-center justify-between px-5 py-4">
        <code className="font-mono text-sm text-green-400">
          <span className="text-gray-500 select-none">$ </span>
          {managers[active].command}
        </code>
        <button
          onClick={copy}
          aria-label="Copy to clipboard"
          className="ml-4 flex-shrink-0 rounded-md p-1.5 text-gray-500 transition-colors hover:bg-gray-800 hover:text-gray-300"
        >
          {copied ? (
            <svg className="h-4 w-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

