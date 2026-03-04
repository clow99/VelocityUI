'use client'

import { Alert, Button, Card, Checkbox, Divider, Input, Title } from 'velocityui'
import { useState } from 'react'

export default function RegisterExamplePage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [passwordError, setPasswordError] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const password = (form.elements.namedItem('password') as HTMLInputElement).value
    const confirm = (form.elements.namedItem('confirm') as HTMLInputElement).value

    if (password !== confirm) {
      setPasswordError('Passwords do not match.')
      return
    }
    setPasswordError('')
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 1400)
  }

  return (
    <div className="flex flex-col gap-10">
      <div>
        <Title as="h1" size="xl">
          Register Page
        </Title>
        <p className="mt-2 text-vui-text-muted">
          A sign-up form built with Card, Input, Checkbox, Alert, Divider, and Button.
        </p>
      </div>

      <div className="flex justify-center">
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
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-vui-text">Create an account</h2>
              <p className="mt-1 text-sm text-vui-text-muted">Start your free trial today</p>
            </div>
          </Card.Header>

          <Card.Body>
            {success && (
              <div className="mb-4">
                <Alert variant="success">
                  Account created! Check your email to verify your address.
                </Alert>
              </div>
            )}
            {passwordError && (
              <div className="mb-4">
                <Alert variant="danger">{passwordError}</Alert>
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                <Input
                  label="First name"
                  placeholder="Alice"
                  fullWidth
                  required
                />
                <Input
                  label="Last name"
                  placeholder="Johnson"
                  fullWidth
                  required
                />
              </div>
              <Input
                label="Email"
                type="email"
                placeholder="you@example.com"
                fullWidth
                required
              />
              <Input
                label="Password"
                name="password"
                type="password"
                placeholder="••••••••"
                hint="At least 8 characters"
                fullWidth
                required
              />
              <Input
                label="Confirm password"
                name="confirm"
                type="password"
                placeholder="••••••••"
                fullWidth
                required
              />
              <Checkbox
                label="I agree to the Terms of Service and Privacy Policy"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                required
              />
              <Button type="submit" fullWidth loading={loading} disabled={!agreed}>
                {loading ? 'Creating account...' : 'Create account'}
              </Button>
            </form>

            <Divider label="or" className="my-4" />

            <div className="flex flex-col gap-2">
              <Button variant="outline" fullWidth>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2"
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Sign up with Google
              </Button>
            </div>
          </Card.Body>

          <Card.Footer>
            <p className="text-center text-sm text-vui-text-muted">
              Already have an account?{' '}
              <a href="#" className="font-medium text-vui-primary hover:underline">
                Sign in
              </a>
            </p>
          </Card.Footer>
        </Card>
      </div>
    </div>
  )
}
