'use client'

import { Alert, Button, Card, Checkbox, Input, RadioGroup, Select, Textarea, Title } from '@clow99/velocityui'
import { useState } from 'react'

export default function FormExamplePage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [newsletter, setNewsletter] = useState(false)
  const [contactMethod, setContactMethod] = useState('email')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Title as="h1" size="xl">
          Form Page
        </Title>
        <p className="mt-2 text-vui-text-muted">
          A contact form built with Input, Textarea, Select, RadioGroup, Checkbox, Alert, and Button.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card variant="shadow">
            <Card.Header>
              <h2 className="text-base font-semibold text-vui-text">Contact Us</h2>
              <p className="mt-0.5 text-sm text-vui-text-muted">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
            </Card.Header>
            <Card.Body>
              {submitted && (
                <div className="mb-4">
                  <Alert variant="success">
                    Your message has been sent! We&apos;ll be in touch soon.
                  </Alert>
                </div>
              )}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input label="First name" placeholder="Alice" fullWidth required />
                  <Input label="Last name" placeholder="Johnson" fullWidth required />
                </div>
                <Input label="Email" type="email" placeholder="alice@example.com" fullWidth required />
                <Input
                  label="Phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  hint="Optional — for urgent inquiries"
                  fullWidth
                />
                <Select label="Subject" fullWidth required>
                  <option value="">Select a topic...</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing</option>
                  <option value="feedback">Feedback</option>
                </Select>
                <Textarea
                  label="Message"
                  placeholder="Tell us how we can help..."
                  rows={5}
                  fullWidth
                  required
                />
                <RadioGroup
                  name="contact-method"
                  label="Preferred contact method"
                  orientation="horizontal"
                  value={contactMethod}
                  onChange={setContactMethod}
                  options={[
                    { value: 'email', label: 'Email' },
                    { value: 'phone', label: 'Phone' },
                    { value: 'either', label: 'Either' },
                  ]}
                />
                <Checkbox
                  label="Subscribe to product updates and news"
                  checked={newsletter}
                  onChange={(e) => setNewsletter(e.target.checked)}
                />
                <div className="flex justify-end gap-2">
                  <Button variant="outline" type="reset">
                    Clear
                  </Button>
                  <Button type="submit" loading={loading}>
                    {loading ? 'Sending...' : 'Send message'}
                  </Button>
                </div>
              </form>
            </Card.Body>
          </Card>
        </div>

        <div className="flex flex-col gap-4">
          <Card variant="bordered" size="sm">
            <Card.Body>
              <h3 className="mb-3 text-sm font-semibold text-vui-text">Contact Info</h3>
              <div className="flex flex-col gap-3 text-sm text-vui-text-muted">
                <div className="flex items-start gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0 text-vui-primary">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  hello@velocityui.dev
                </div>
                <div className="flex items-start gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0 text-vui-primary">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.18 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.91 6.91l.26-.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +1 (555) 123-4567
                </div>
                <div className="flex items-start gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0 text-vui-primary">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Mon–Fri, 9am–6pm EST
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card variant="bordered" size="sm">
            <Card.Body>
              <h3 className="mb-2 text-sm font-semibold text-vui-text">Typical Response Time</h3>
              <p className="text-sm text-vui-text-muted">
                We aim to respond within <span className="font-medium text-vui-text">24 hours</span>{' '}
                on business days.
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

