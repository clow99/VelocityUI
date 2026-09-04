'use client'

import { useState, useRef, useEffect } from 'react'
import {
  ChatWindow,
  ChatHeader,
  ChatBubble,
  ChatInput,
  ChatTimestamp,
  TypingIndicator,
  Button,
  Title,
  Badge,
} from '@velocityuikit/velocityui'

interface Message {
  id: number
  variant: 'sent' | 'ai' | 'system'
  text: string
  timestamp: string
  isStreaming?: boolean
}

const suggestions = [
  'Explain how React hooks work',
  'Write a Python function to sort a list',
  'What is the difference between REST and GraphQL?',
  'Help me debug a CSS layout issue',
]

const aiResponses = [
  "That's a great question! React hooks are functions that let you use state and other React features in functional components. The most commonly used hooks are `useState` for managing state, `useEffect` for side effects, and `useContext` for accessing context values. They were introduced in React 16.8 and have become the standard way to write React components.",
  "Here's a comprehensive approach: First, check your element's `display` property — flexbox and grid solve most layout challenges. Use browser DevTools to inspect the box model (margin, border, padding, content). Common pitfalls include forgetting that margins collapse vertically, that percentage heights need a defined parent height, and that `overflow: hidden` can clip positioned children.",
  'REST and GraphQL take fundamentally different approaches to API design. REST uses multiple endpoints with fixed data structures, while GraphQL provides a single endpoint where clients specify exactly what data they need. GraphQL reduces over-fetching and under-fetching but adds complexity with schema management. Choose REST for simple CRUD APIs and GraphQL for complex, interconnected data models.',
  "Absolutely! I'd be happy to help. Could you share the specific code or error you're working with? In the meantime, here are some common debugging strategies: check the console for errors, verify your data flow with logging, use React DevTools to inspect component state, and try isolating the problem in a minimal reproduction.",
]

function BotAvatar() {
  return (
    <div
      style={{
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.875rem',
        fontWeight: 700,
      }}
      className="bg-vui-primary text-white"
    >
      AI
    </div>
  )
}

export default function AiChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, variant: 'system', text: 'Conversation started', timestamp: '' },
    {
      id: 1,
      variant: 'ai',
      text: "Hello! I'm your AI assistant. I can help you with coding questions, explain concepts, debug issues, and more. What would you like to work on today?",
      timestamp: 'Just now',
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const responseIndex = useRef(0)

  const handleSend = (text: string) => {
    const userMsg: Message = {
      id: Date.now(),
      variant: 'sent',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
    setMessages((prev) => [...prev, userMsg])
    setInputValue('')
    setIsThinking(true)

    const streamingId = Date.now() + 1
    const fullResponse = aiResponses[responseIndex.current % aiResponses.length]
    responseIndex.current++

    setTimeout(() => {
      setIsThinking(false)
      setMessages((prev) => [
        ...prev,
        {
          id: streamingId,
          variant: 'ai',
          text: '',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isStreaming: true,
        },
      ])

      let charIndex = 0
      const interval = setInterval(() => {
        charIndex += 3
        if (charIndex >= fullResponse.length) {
          charIndex = fullResponse.length
          clearInterval(interval)
          setMessages((prev) =>
            prev.map((m) =>
              m.id === streamingId ? { ...m, text: fullResponse, isStreaming: false } : m,
            ),
          )
        } else {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === streamingId ? { ...m, text: fullResponse.slice(0, charIndex) } : m,
            ),
          )
        }
      }, 20)
    }, 1500)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex items-center gap-3">
          <Title as="h1" size="xl">
            AI Assistant
          </Title>
          <Badge variant="primary" size="sm">
            Beta
          </Badge>
        </div>
        <p className="mt-2 text-vui-text-muted">
          An AI chat interface built with ChatWindow, ChatBubble (ai variant), ChatInput, streaming
          animation, and suggestion chips.
        </p>
      </div>

      <div
        className="overflow-hidden rounded-xl border border-vui-border"
        style={{ height: '34rem' }}
      >
        <ChatWindow
          header={
            <ChatHeader
              title="AI Assistant"
              subtitle="Always available"
              avatar={<BotAvatar />}
              status="online"
              actions={
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setMessages([
                      {
                        id: Date.now(),
                        variant: 'system',
                        text: 'Conversation cleared',
                        timestamp: '',
                      },
                      {
                        id: Date.now() + 1,
                        variant: 'ai',
                        text: 'Fresh start! What would you like to explore?',
                        timestamp: new Date().toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        }),
                      },
                    ])
                  }}
                >
                  New Chat
                </Button>
              }
            />
          }
          footer={
            <div className="flex flex-col gap-2">
              {messages.length <= 2 && (
                <div className="flex flex-wrap gap-2 px-1">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => handleSend(s)}
                      className="rounded-lg border border-vui-border bg-vui-surface px-3 py-1.5 text-xs text-vui-text-muted transition-colors hover:border-vui-primary hover:text-vui-primary"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
              <ChatInput
                value={inputValue}
                onChange={setInputValue}
                onSend={handleSend}
                placeholder="Ask anything…"
                disabled={isThinking}
              />
            </div>
          }
        >
          <ChatTimestamp>Today</ChatTimestamp>
          {messages.map((msg) => (
            <ChatBubble
              key={msg.id}
              variant={msg.variant as 'sent' | 'ai' | 'system'}
              timestamp={msg.timestamp || undefined}
              username={msg.variant === 'ai' ? 'Assistant' : undefined}
              avatar={msg.variant === 'ai' ? <BotAvatar /> : undefined}
              isStreaming={msg.isStreaming}
            >
              {msg.text}
            </ChatBubble>
          ))}
          {isThinking && <TypingIndicator users={['Assistant']} />}
        </ChatWindow>
      </div>
    </div>
  )
}
