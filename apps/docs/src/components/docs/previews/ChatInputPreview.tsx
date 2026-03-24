'use client'

import { useState } from 'react'
import { ChatInput } from '@velocityuikit/velocityui'

export function ChatInputPreview() {
  const [value, setValue] = useState('')
  const [messages, setMessages] = useState<string[]>([])

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Default</p>
        <ChatInput
          value={value}
          onChange={setValue}
          onSend={(msg) => {
            setMessages((prev) => [...prev, msg])
            setValue('')
          }}
          placeholder="Type a message…"
        />
        {messages.length > 0 && (
          <div className="mt-3 flex flex-col gap-1">
            <p className="text-xs text-vui-text-subtle">Sent messages:</p>
            {messages.map((msg, i) => (
              <p key={i} className="text-sm text-vui-text">{msg}</p>
            ))}
          </div>
        )}
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Disabled</p>
        <ChatInput disabled placeholder="Chat is disabled" />
      </div>
    </div>
  )
}
