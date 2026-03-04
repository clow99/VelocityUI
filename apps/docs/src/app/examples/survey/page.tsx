'use client'

import { Alert, Button, Card, Progress, RadioGroup, Slider, Textarea, Title } from 'velocityui'
import { useState } from 'react'

const totalSteps = 4

export default function SurveyExamplePage() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const [overall, setOverall] = useState(8)
  const [recommend, setRecommend] = useState('')
  const [usageFreq, setUsageFreq] = useState('')
  const [bestFeature, setBestFeature] = useState('')
  const [feedback, setFeedback] = useState('')

  const pct = Math.round((step / totalSteps) * 100)

  const next = () => setStep((s) => Math.min(s + 1, totalSteps))
  const back = () => setStep((s) => Math.max(s - 1, 1))

  const handleSubmit = () => {
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col gap-10">
        <div>
          <Title as="h1" size="xl">Survey</Title>
          <p className="mt-2 text-vui-text-muted">
            A feedback survey built with Slider, RadioGroup, Textarea, Progress, and Button.
          </p>
        </div>
        <div className="mx-auto w-full max-w-lg">
          <Card variant="shadow" size="lg">
            <Card.Body>
              <div className="flex flex-col items-center gap-4 py-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-vui-text">Thank you for your feedback!</h2>
                  <p className="mt-2 text-sm text-vui-text-muted">
                    Your responses help us improve VelocityUI for everyone.
                  </p>
                </div>
                <Alert variant="success">
                  Your survey has been submitted successfully.
                </Alert>
                <Button variant="outline" onClick={() => { setStep(1); setSubmitted(false) }}>
                  Submit another response
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Title as="h1" size="xl">Survey</Title>
        <p className="mt-2 text-vui-text-muted">
          A feedback survey built with Slider, RadioGroup, Textarea, Progress, and Button.
        </p>
      </div>

      <div className="mx-auto w-full max-w-lg">
        <div className="mb-6 flex flex-col gap-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-vui-text">Question {step} of {totalSteps}</span>
            <span className="text-vui-text-muted">{pct}% complete</span>
          </div>
          <Progress value={pct} size="sm" />
        </div>

        <Card variant="shadow" size="lg">
          <Card.Body>
            <div className="flex min-h-[240px] flex-col gap-6">
              {step === 1 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="mb-1 text-base font-semibold text-vui-text">
                      How would you rate your overall experience with VelocityUI?
                    </p>
                    <p className="text-sm text-vui-text-muted">Drag the slider to select a score from 0 to 10.</p>
                  </div>
                  <div className="px-2">
                    <Slider
                      min={0}
                      max={10}
                      step={1}
                      value={overall}
                      onChange={setOverall}
                      label="Overall satisfaction"
                      showValue
                    />
                    <div className="mt-1 flex justify-between text-xs text-vui-text-muted">
                      <span>Not satisfied</span>
                      <span>Extremely satisfied</span>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <span className="text-4xl font-bold text-vui-primary">{overall}</span>
                    <span className="self-end pb-1 text-vui-text-muted">/10</span>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="flex flex-col gap-4">
                  <p className="text-base font-semibold text-vui-text">
                    How likely are you to recommend VelocityUI to a colleague?
                  </p>
                  <RadioGroup
                    name="recommend"
                    value={recommend}
                    onChange={setRecommend}
                    options={[
                      { value: 'definitely', label: 'Definitely would' },
                      { value: 'probably', label: 'Probably would' },
                      { value: 'not-sure', label: 'Not sure' },
                      { value: 'probably-not', label: 'Probably would not' },
                      { value: 'definitely-not', label: 'Definitely would not' },
                    ]}
                  />
                </div>
              )}

              {step === 3 && (
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <p className="text-base font-semibold text-vui-text">
                      How often do you use VelocityUI?
                    </p>
                    <RadioGroup
                      name="usage-freq"
                      value={usageFreq}
                      onChange={setUsageFreq}
                      orientation="horizontal"
                      options={[
                        { value: 'daily', label: 'Daily' },
                        { value: 'weekly', label: 'Weekly' },
                        { value: 'monthly', label: 'Monthly' },
                        { value: 'rarely', label: 'Rarely' },
                      ]}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-base font-semibold text-vui-text">
                      Which feature do you find most valuable?
                    </p>
                    <RadioGroup
                      name="best-feature"
                      value={bestFeature}
                      onChange={setBestFeature}
                      options={[
                        { value: 'components', label: 'Component variety' },
                        { value: 'a11y', label: 'Accessibility' },
                        { value: 'theming', label: 'Theming & customization' },
                        { value: 'docs', label: 'Documentation & examples' },
                        { value: 'performance', label: 'Performance' },
                      ]}
                    />
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="flex flex-col gap-4">
                  <p className="text-base font-semibold text-vui-text">
                    Any other thoughts or suggestions?
                  </p>
                  <Textarea
                    placeholder="Tell us what you love, what could be improved, or anything else on your mind..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows={6}
                    fullWidth
                  />
                  <p className="text-xs text-vui-text-muted">Optional. Your feedback is anonymous.</p>
                </div>
              )}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-vui-border pt-4">
              <Button
                variant="outline"
                onClick={back}
                disabled={step === 1}
              >
                Back
              </Button>
              {step < totalSteps ? (
                <Button onClick={next}>Next</Button>
              ) : (
                <Button onClick={handleSubmit}>Submit survey</Button>
              )}
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
