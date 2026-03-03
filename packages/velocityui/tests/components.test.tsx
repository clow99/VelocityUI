import { render, screen, fireEvent } from '@testing-library/react'
import {
  Badge,
  Button,
  Card,
  Input,
  Title,
  Textarea,
  Select,
  Checkbox,
  RadioGroup,
  Switch,
  Alert,
  Dialog,
  Tabs,
  Accordion,
  Tooltip,
  Divider,
} from '../src'

describe('velocityui components', () => {
  it('renders button loading state and disables interaction', () => {
    const handleClick = vi.fn()

    render(
      <Button loading onClick={handleClick}>
        Save
      </Button>
    )

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-busy', 'true')
    expect(button).toBeDisabled()
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('renders input with label and error message a11y wiring', () => {
    render(
      <Input
        id="email"
        label="Email"
        error="Email is required"
        placeholder="you@example.com"
        required
      />
    )

    const input = screen.getByLabelText(/Email/)
    const error = screen.getByText('Email is required')

    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(error).toHaveAttribute('role', 'alert')
    expect(input).toHaveAttribute('aria-describedby', 'email-error')
  })

  it('renders built-in search icon on the left when search is enabled', () => {
    const { container } = render(<Input label="Search" search placeholder="Search..." />)
    const leftIcon = container.querySelector('[data-slot="left-icon"][data-search-icon="true"]')
    const rightIcon = container.querySelector('[data-slot="right-icon"][data-search-icon="true"]')

    expect(leftIcon).toBeInTheDocument()
    expect(rightIcon).not.toBeInTheDocument()
  })

  it('renders search icon on the right and respects custom icon className', () => {
    const { container } = render(
      <Input
        label="Search products"
        search
        searchIconPosition="right"
        rightIconClassName="custom-search-right"
      />
    )

    const rightIcon = container.querySelector('[data-slot="right-icon"][data-search-icon="true"]')
    expect(rightIcon).toBeInTheDocument()
    expect(rightIcon).toHaveClass('custom-search-right')
  })

  it('renders card compound sections', () => {
    render(
      <Card variant="elevated">
        <Card.Header>Header</Card.Header>
        <Card.Body>Body</Card.Body>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    )

    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('Body')).toBeInTheDocument()
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })

  it('renders badge with dot indicator', () => {
    render(
      <Badge dot variant="success">
        Active
      </Badge>
    )

    expect(screen.getByText('Active')).toBeInTheDocument()
    expect(screen.getByText('Active').querySelector('span')).toBeInTheDocument()
  })

  it('renders title at requested semantic level', () => {
    render(
      <Title level="h3" size="sm">
        Section Title
      </Title>
    )

    const title = screen.getByRole('heading', { level: 3, name: 'Section Title' })
    expect(title).toBeInTheDocument()
  })

  it('renders textarea with label and error a11y wiring', () => {
    render(
      <Textarea
        id="message"
        label="Message"
        error="Message is required"
        required
      />
    )

    const textarea = screen.getByLabelText(/Message/)
    const error = screen.getByText('Message is required')

    expect(textarea).toHaveAttribute('aria-invalid', 'true')
    expect(error).toHaveAttribute('role', 'alert')
    expect(textarea).toHaveAttribute('aria-describedby', 'message-error')
  })

  it('renders select with label and error a11y wiring', () => {
    render(
      <Select
        id="country"
        label="Country"
        error="Please select a country"
        options={[{ value: 'us', label: 'United States' }]}
      />
    )

    const select = screen.getByLabelText(/Country/)
    const error = screen.getByText('Please select a country')

    expect(select).toHaveAttribute('aria-invalid', 'true')
    expect(error).toHaveAttribute('role', 'alert')
  })

  it('renders checkbox with label and is checkable', () => {
    render(<Checkbox label="Accept terms" />)

    const checkbox = screen.getByRole('checkbox', { name: 'Accept terms' })
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()

    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('renders checkbox with error message', () => {
    render(<Checkbox id="terms" label="Accept terms" error="You must accept the terms" />)

    const checkbox = screen.getByRole('checkbox')
    const error = screen.getByText('You must accept the terms')

    expect(checkbox).toHaveAttribute('aria-invalid', 'true')
    expect(error).toHaveAttribute('role', 'alert')
  })

  it('renders radiogroup with fieldset and options', () => {
    const handleChange = vi.fn()

    render(
      <RadioGroup
        name="plan"
        label="Select a plan"
        options={[
          { value: 'free', label: 'Free' },
          { value: 'pro', label: 'Pro' },
        ]}
        defaultValue="free"
        onChange={handleChange}
      />
    )

    const legend = screen.getByText('Select a plan')
    expect(legend.tagName).toBe('LEGEND')

    const freeRadio = screen.getByRole('radio', { name: 'Free' })
    const proRadio = screen.getByRole('radio', { name: 'Pro' })
    expect(freeRadio).toBeChecked()
    expect(proRadio).not.toBeChecked()

    fireEvent.click(proRadio)
    expect(handleChange).toHaveBeenCalledWith('pro')
  })

  it('renders switch with role=switch and label', () => {
    render(<Switch label="Enable notifications" defaultChecked />)

    const switchEl = screen.getByRole('switch', { name: 'Enable notifications' })
    expect(switchEl).toBeInTheDocument()
    expect(switchEl).toBeChecked()
  })

  it('renders alert with role=alert and variant', () => {
    render(
      <Alert variant="success" title="Success">
        Operation completed.
      </Alert>
    )

    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument()
    expect(screen.getByText('Success')).toBeInTheDocument()
    expect(screen.getByText('Operation completed.')).toBeInTheDocument()
  })

  it('renders alert dismiss button and calls onClose', () => {
    const handleClose = vi.fn()

    render(
      <Alert variant="info" onClose={handleClose}>
        Dismissible alert
      </Alert>
    )

    const closeBtn = screen.getByRole('button', { name: /dismiss alert/i })
    fireEvent.click(closeBtn)
    expect(handleClose).toHaveBeenCalledOnce()
  })

  it('renders dialog when open and closes on Escape key', () => {
    const handleClose = vi.fn()

    render(
      <Dialog open onClose={handleClose} title="Confirm" size="sm">
        <Dialog.Body>Dialog content</Dialog.Body>
      </Dialog>
    )

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Dialog content')).toBeInTheDocument()

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(handleClose).toHaveBeenCalledOnce()
  })

  it('does not render dialog when closed', () => {
    render(
      <Dialog open={false} onClose={() => {}}>
        <Dialog.Body>Hidden content</Dialog.Body>
      </Dialog>
    )

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders tabs with tablist and keyboard navigation', () => {
    render(
      <Tabs
        defaultValue="tab1"
        items={[
          { value: 'tab1', label: 'Tab One', children: <div>Panel One</div> },
          { value: 'tab2', label: 'Tab Two', children: <div>Panel Two</div> },
        ]}
      />
    )

    const tablist = screen.getByRole('tablist')
    expect(tablist).toBeInTheDocument()

    const tab1 = screen.getByRole('tab', { name: 'Tab One' })
    const tab2 = screen.getByRole('tab', { name: 'Tab Two' })

    expect(tab1).toHaveAttribute('aria-selected', 'true')
    expect(tab2).toHaveAttribute('aria-selected', 'false')

    expect(screen.getByText('Panel One')).toBeInTheDocument()
    expect(screen.queryByText('Panel Two')).not.toBeVisible()

    fireEvent.click(tab2)
    expect(tab2).toHaveAttribute('aria-selected', 'true')
  })

  it('renders accordion with collapsible sections', () => {
    render(
      <Accordion
        items={[
          { value: 'a', title: 'Section A', content: <div>Content A</div> },
          { value: 'b', title: 'Section B', content: <div>Content B</div> },
        ]}
      />
    )

    const triggerA = screen.getByRole('button', { name: /Section A/ })
    expect(triggerA).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(triggerA)
    expect(triggerA).toHaveAttribute('aria-expanded', 'true')
  })

  it('renders tooltip with role=tooltip on hover', () => {
    render(
      <Tooltip content="Helpful tip">
        <button type="button">Hover me</button>
      </Tooltip>
    )

    // Tooltip is aria-hidden when not visible; use hidden:true to query it
    const tooltip = screen.getByRole('tooltip', { hidden: true })

    expect(tooltip).toHaveTextContent('Helpful tip')
    expect(tooltip).toHaveAttribute('aria-hidden', 'true')

    const trigger = screen.getByRole('button', { name: 'Hover me' })
    fireEvent.mouseEnter(trigger.parentElement!)
    expect(tooltip).toHaveAttribute('aria-hidden', 'false')

    fireEvent.mouseLeave(trigger.parentElement!)
    expect(tooltip).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders divider with role=separator', () => {
    render(<Divider />)

    const divider = screen.getByRole('separator')
    expect(divider).toBeInTheDocument()
  })

  it('renders divider with label text', () => {
    render(<Divider label="or" />)

    expect(screen.getByText('or')).toBeInTheDocument()
  })
})
