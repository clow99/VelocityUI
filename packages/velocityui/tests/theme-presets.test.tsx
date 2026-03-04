import { render, screen } from '@testing-library/react'
import { Button, Card, Input } from '../src'

const getVar = (element: Element, variableName: string) =>
  getComputedStyle(element).getPropertyValue(variableName).trim()

describe('named theme presets', () => {
  it('midnight theme sets dark surfaces and violet primary', () => {
    render(
      <div data-testid="wrapper" className="vui-theme-midnight">
        <Button>Press</Button>
      </div>
    )
    const wrapper = screen.getByTestId('wrapper')
    expect(getVar(wrapper, '--vui-surface')).toBe('#18181b')
    expect(getVar(wrapper, '--vui-primary')).toBe('#a78bfa')
    expect(getVar(wrapper, '--vui-bg')).toBe('#09090b')
  })

  it('ocean theme sets navy surfaces and cyan primary', () => {
    render(
      <div data-testid="wrapper" className="vui-theme-ocean">
        <Card variant="shadow"><Card.Body>Card</Card.Body></Card>
        <Input placeholder="test" />
      </div>
    )
    const wrapper = screen.getByTestId('wrapper')
    expect(getVar(wrapper, '--vui-primary')).toBe('#22d3ee')
    expect(getVar(wrapper, '--vui-bg')).toBe('#020d1a')
  })

  it('sunset theme sets warm surfaces and amber primary', () => {
    render(
      <div data-testid="wrapper" className="vui-theme-sunset">
        <Button>Press</Button>
      </div>
    )
    const wrapper = screen.getByTestId('wrapper')
    expect(getVar(wrapper, '--vui-primary')).toBe('#f59e0b')
    expect(getVar(wrapper, '--vui-primary-contrast')).toBe('#1c1108')
  })

  it('construction theme sets zinc surfaces, sharp radii, and yellow primary', () => {
    render(
      <div data-testid="wrapper" className="vui-theme-construction">
        <Button>Press</Button>
      </div>
    )
    const wrapper = screen.getByTestId('wrapper')
    expect(getVar(wrapper, '--vui-primary')).toBe('#facc15')
    expect(getVar(wrapper, '--vui-radius-md')).toBe('0.25rem')
  })

  it('glass theme sets translucent surfaces and backdrop-blur', () => {
    render(
      <div data-testid="wrapper" className="vui-theme-glass">
        <Card variant="shadow"><Card.Body>Card</Card.Body></Card>
      </div>
    )
    const wrapper = screen.getByTestId('wrapper')
    expect(getVar(wrapper, '--vui-backdrop-blur')).toBe('14px')
    expect(getVar(wrapper, '--vui-primary')).toBe('#7c3aed')
  })

  it('soft theme sets neomorphic shadows and sky primary', () => {
    render(
      <div data-testid="wrapper" className="vui-theme-soft">
        <Button>Press</Button>
      </div>
    )
    const wrapper = screen.getByTestId('wrapper')
    expect(getVar(wrapper, '--vui-primary')).toBe('#0ea5e9')
    expect(getVar(wrapper, '--vui-bg')).toBe('#e8edf5')
  })

  it('high-contrast theme sets black surfaces and yellow primary with thick borders', () => {
    render(
      <div data-testid="wrapper" className="vui-theme-high-contrast">
        <Button>Press</Button>
      </div>
    )
    const wrapper = screen.getByTestId('wrapper')
    expect(getVar(wrapper, '--vui-bg')).toBe('#000000')
    expect(getVar(wrapper, '--vui-primary')).toBe('#facc15')
    expect(getVar(wrapper, '--vui-primary-contrast')).toBe('#000000')
    expect(getVar(wrapper, '--vui-border')).toBe('#ffffff')
  })

  it('monochrome-red theme sets white/gray/black surfaces with red primary', () => {
    render(
      <div data-testid="wrapper" className="vui-theme-monochrome-red">
        <Button>Press</Button>
      </div>
    )
    const wrapper = screen.getByTestId('wrapper')
    expect(getVar(wrapper, '--vui-bg')).toBe('#111')
    expect(getVar(wrapper, '--vui-surface')).toBe('#1f1f1f')
    expect(getVar(wrapper, '--vui-text')).toBe('#f3f4f6')
    expect(getVar(wrapper, '--vui-primary')).toBe('#c52e3f')
  })

  it('density compact reduces control height independently of theme', () => {
    render(
      <div data-testid="midnight-compact" className="vui-theme-midnight vui-density-compact">
        <Button size="md">Compact</Button>
      </div>
    )
    render(
      <div data-testid="midnight-spacious" className="vui-theme-midnight vui-density-spacious">
        <Button size="md">Spacious</Button>
      </div>
    )
    const compact = screen.getByTestId('midnight-compact')
    const spacious = screen.getByTestId('midnight-spacious')
    expect(getVar(compact, '--vui-control-height-md')).toBe('2.25rem')
    expect(getVar(spacious, '--vui-control-height-md')).toBe('2.75rem')
  })
})
