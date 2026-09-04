'use client'
import { useState } from 'react'
import { CopyButton } from '@/components/CopyButton'
const commands = { npm: 'npm install', pnpm: 'pnpm add', yarn: 'yarn add', bun: 'bun add' }
export function PackageManagerTabs() {
  const [manager, setManager] = useState<keyof typeof commands>('npm')
  const command = commands[manager] + ' @velocityuikit/velocityui'
  return (
    <div className="code-panel install-panel">
      <div className="code-toolbar">
        <div className="manager-options" role="group" aria-label="Package manager">
          {(Object.keys(commands) as (keyof typeof commands)[]).map((pm) => (
            <button
              type="button"
              key={pm}
              aria-pressed={manager === pm}
              onClick={() => setManager(pm)}
            >
              {pm}
            </button>
          ))}
        </div>
        <CopyButton text={command} label="Copy install command" />
      </div>
      <pre tabIndex={0} aria-label="Install command">
        <code>
          <span className="terminal-prompt" aria-hidden="true">
            ${' '}
          </span>
          {command}
        </code>
      </pre>
    </div>
  )
}
