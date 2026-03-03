import { render, screen } from '@testing-library/react'
import { Badge, Button, Card, Input, Title } from '../src'

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
})
