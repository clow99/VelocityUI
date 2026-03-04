'use client'

import { Alert, Button, Card, Input, Title } from '@velocityuikit/velocityui'
import { useState } from 'react'

type Step = 'request' | 'sent' | 'reset' | 'done'

export default function ForgotPasswordExamplePage() {
  const [step, setStep] = useState<Step>('request')
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [resetError, setResetError] = useState('')

  const handleRequest = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setStep('sent')
    }, 1200)
  }

  const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const password = (form.elements.namedItem('password') as HTMLInputElement).value
    const confirm = (form.elements.namedItem('confirm') as HTMLInputElement).value
    if (password !== confirm) {
      setResetError('Passwords do not match.')
      return
    }
    setResetError('')
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setStep('done')
    }, 1200)
  }

  return (
    <div className="flex flex-col gap-10">
      <div>
        <Title as="h1" size="xl">
          Forgot Password
        </Title>
        <p className="mt-2 text-vui-text-muted">
          A two-step password reset flow built with Card, Input, Alert, and Button.
        </p>
      </div>

      <div className="flex justify-center">
        {step === 'request' && (
          <Card variant="shadow" size="lg" className="w-full max-w-sm">
            <Card.Header>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-vui-primary">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-vui-text">Forgot your password?</h2>
                <p className="mt-1 text-sm text-vui-text-muted">
                  Enter your email and we&apos;ll send a reset link.
                </p>
              </div>
            </Card.Header>
            <Card.Body>
              <form onSubmit={handleRequest} className="flex flex-col gap-4">
                <Input
                  label="Email address"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  required
                />
                <Button type="submit" fullWidth loading={loading}>
                  {loading ? 'Sending...' : 'Send reset link'}
                </Button>
              </form>
            </Card.Body>
            <Card.Footer>
              <p className="text-center text-sm text-vui-text-muted">
                Remember your password?{' '}
                <a href="#" className="font-medium text-vui-primary hover:underline">
                  Sign in
                </a>
              </p>
            </Card.Footer>
          </Card>
        )}

        {step === 'sent' && (
          <Card variant="shadow" size="lg" className="w-full max-w-sm">
            <Card.Body>
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-vui-text">Check your email</h2>
                  <p className="mt-2 text-sm text-vui-text-muted">
                    We sent a password reset link to{' '}
                    <span className="font-medium text-vui-text">{email || 'your email'}</span>.
                  </p>
                </div>
                <Alert variant="info">
                  Didn&apos;t receive it? Check your spam folder or{' '}
                  <button
                    className="font-medium underline"
                    onClick={() => setStep('request')}
                  >
                    try again
                  </button>
                  .
                </Alert>
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => setStep('reset')}
                >
                  I have the link — set new password
                </Button>
              </div>
            </Card.Body>
          </Card>
        )}

        {step === 'reset' && (
          <Card variant="shadow" size="lg" className="w-full max-w-sm">
            <Card.Header>
              <div className="text-center">
                <h2 className="text-lg font-semibold text-vui-text">Set new password</h2>
                <p className="mt-1 text-sm text-vui-text-muted">
                  Choose a strong password for your account.
                </p>
              </div>
            </Card.Header>
            <Card.Body>
              {resetError && (
                <div className="mb-4">
                  <Alert variant="danger">{resetError}</Alert>
                </div>
              )}
              <form onSubmit={handleReset} className="flex flex-col gap-4">
                <Input
                  label="New password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  hint="At least 8 characters"
                  fullWidth
                  required
                />
                <Input
                  label="Confirm new password"
                  name="confirm"
                  type="password"
                  placeholder="••••••••"
                  fullWidth
                  required
                />
                <Button type="submit" fullWidth loading={loading}>
                  {loading ? 'Updating...' : 'Update password'}
                </Button>
              </form>
            </Card.Body>
          </Card>
        )}

        {step === 'done' && (
          <Card variant="shadow" size="lg" className="w-full max-w-sm">
            <Card.Body>
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-vui-text">Password updated!</h2>
                  <p className="mt-2 text-sm text-vui-text-muted">
                    Your password has been changed successfully.
                  </p>
                </div>
                <Button fullWidth onClick={() => setStep('request')}>
                  Back to sign in
                </Button>
              </div>
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  )
}

