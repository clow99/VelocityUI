'use client'

import { Button, Card, Divider, Input, RadioGroup, Select, Stepper, Title } from '@velocityuikit/velocityui'
import { useState } from 'react'

const steps = [
  { label: 'Shipping', description: 'Delivery address' },
  { label: 'Payment', description: 'Card details' },
  { label: 'Review', description: 'Confirm order' },
]

const cartItems = [
  { name: 'Wireless Headphones', qty: 1, price: 89.99 },
  { name: 'USB-C Hub', qty: 2, price: 49.0 },
  { name: 'Desk Mat XL', qty: 1, price: 34.99 },
]

const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
const shipping = 0
const tax = parseFloat((subtotal * 0.08).toFixed(2))
const total = subtotal + shipping + tax

function ShippingStep({ onNext }: { onNext: () => void }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onNext()
      }}
      className="flex flex-col gap-4"
    >
      <div className="grid grid-cols-2 gap-3">
        <Input label="First name" placeholder="Alice" fullWidth required />
        <Input label="Last name" placeholder="Johnson" fullWidth required />
      </div>
      <Input label="Email" type="email" placeholder="you@example.com" fullWidth required />
      <Input label="Address" placeholder="123 Main St" fullWidth required />
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2">
          <Input label="City" placeholder="San Francisco" fullWidth required />
        </div>
        <Input label="ZIP code" placeholder="94103" fullWidth required />
      </div>
      <Select label="Country" fullWidth required>
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        <option value="gb">United Kingdom</option>
        <option value="au">Australia</option>
      </Select>
      <RadioGroup
        name="shipping-method"
        label="Shipping method"
        defaultValue="standard"
        options={[
          { value: 'standard', label: 'Standard (5–7 days) — Free' },
          { value: 'express', label: 'Express (2–3 days) — $9.99' },
          { value: 'overnight', label: 'Overnight — $24.99' },
        ]}
      />
      <div className="flex justify-end pt-2">
        <Button type="submit">Continue to Payment</Button>
      </div>
    </form>
  )
}

function PaymentStep({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onNext()
      }}
      className="flex flex-col gap-4"
    >
      <RadioGroup
        name="payment-method"
        label="Payment method"
        defaultValue="card"
        options={[
          { value: 'card', label: 'Credit / Debit card' },
          { value: 'paypal', label: 'PayPal' },
          { value: 'apple', label: 'Apple Pay' },
        ]}
      />
      <Divider />
      <Input label="Cardholder name" placeholder="Alice Johnson" fullWidth required />
      <Input
        label="Card number"
        placeholder="1234 5678 9012 3456"
        fullWidth
        required
      />
      <div className="grid grid-cols-2 gap-3">
        <Input label="Expiry date" placeholder="MM / YY" fullWidth required />
        <Input label="CVC" placeholder="123" fullWidth required />
      </div>
      <div className="flex justify-between pt-2">
        <Button variant="outline" type="button" onClick={onBack}>Back</Button>
        <Button type="submit">Review Order</Button>
      </div>
    </form>
  )
}

function ReviewStep({ onBack, onPlace }: { onBack: () => void; onPlace: () => void }) {
  const [placing, setPlacing] = useState(false)

  const handlePlace = () => {
    setPlacing(true)
    setTimeout(() => {
      setPlacing(false)
      onPlace()
    }, 1400)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-sm font-semibold text-vui-text">Order summary</p>
        <div className="flex flex-col gap-2">
          {cartItems.map((item) => (
            <div key={item.name} className="flex items-center justify-between text-sm">
              <span className="text-vui-text">
                {item.name}{' '}
                <span className="text-vui-text-muted">×{item.qty}</span>
              </span>
              <span className="font-medium text-vui-text">
                ${(item.price * item.qty).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
        <Divider className="my-3" />
        <div className="flex flex-col gap-1.5 text-sm">
          <div className="flex justify-between text-vui-text-muted">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-vui-text-muted">
            <span>Shipping</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="flex justify-between text-vui-text-muted">
            <span>Tax (8%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <Divider className="my-1" />
          <div className="flex justify-between font-semibold text-vui-text">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>Back</Button>
        <Button loading={placing} onClick={handlePlace}>
          {placing ? 'Placing order...' : `Place order — $${total.toFixed(2)}`}
        </Button>
      </div>
    </div>
  )
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4 py-8 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30">
        <svg
          width="32"
          height="32"
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
        <h2 className="text-lg font-semibold text-vui-text">Order placed!</h2>
        <p className="mt-1 text-sm text-vui-text-muted">
          You&apos;ll receive a confirmation email shortly.
        </p>
        <p className="mt-1 text-xs text-vui-text-muted">
          Order #5092 · ${total.toFixed(2)}
        </p>
      </div>
      <Button variant="outline" onClick={onReset}>Start over</Button>
    </div>
  )
}

export default function CheckoutExamplePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [done, setDone] = useState(false)

  const next = () => setCurrentStep((s) => Math.min(s + 1, 3))
  const back = () => setCurrentStep((s) => Math.max(s - 1, 1))

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Title as="h1" size="xl">
          Checkout
        </Title>
        <p className="mt-2 text-vui-text-muted">
          A multi-step checkout built with Stepper, Input, RadioGroup, Select, Divider, and Button.
        </p>
      </div>

      <div className="mx-auto w-full max-w-xl">
        {!done && (
          <div className="mb-8">
            <Stepper steps={steps} currentStep={currentStep} />
          </div>
        )}

        <Card variant="shadow" size="lg">
          <Card.Body>
            {done ? (
              <SuccessState onReset={() => { setCurrentStep(1); setDone(false) }} />
            ) : currentStep === 1 ? (
              <ShippingStep onNext={next} />
            ) : currentStep === 2 ? (
              <PaymentStep onNext={next} onBack={back} />
            ) : (
              <ReviewStep onBack={back} onPlace={() => setDone(true)} />
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

