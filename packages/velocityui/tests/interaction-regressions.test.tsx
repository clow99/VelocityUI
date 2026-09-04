import React, { useState } from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Checkbox, Switch, Tabs, Dialog, Input, Textarea, ToastProvider, useToast } from '../src'
import { renderToString } from 'react-dom/server'

describe('component composition and keyboard behavior', () => {
  it('server-renders toasts without a portal and supports dismissal after mounting', () => {
    function Trigger() {
      const { addToast } = useToast()
      return <button onClick={() => addToast({ message: 'Saved', duration: 0 })}>Notify</button>
    }
    expect(
      renderToString(
        <ToastProvider>
          <Trigger />
        </ToastProvider>,
      ),
    ).toContain('Notify')
    render(
      <ToastProvider>
        <Trigger />
      </ToastProvider>,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Notify' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Saved')
    fireEvent.click(screen.getByRole('button', { name: 'Dismiss notification' }))
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
  it('keeps repeated input and textarea labels unique and describes the visible error', () => {
    render(
      <>
        <Input label="Email" />
        <Input label="Email" error="Check your email" hint="Hidden hint" />
        <Textarea label="Notes" />
        <Textarea label="Notes" />
      </>,
    )
    const inputs = screen.getAllByRole('textbox')
    expect(new Set(inputs.map((input) => input.id)).size).toBe(4)
    expect(inputs[1]).toHaveAccessibleDescription('Check your email')
  })
  it('keeps repeated checkbox labels associated with their own input', () => {
    render(
      <>
        <Checkbox label="Updates" />
        <Checkbox label="Updates" />
      </>,
    )
    const inputs = screen.getAllByRole('checkbox')
    const labels = screen.getAllByText('Updates')
    expect(inputs[0].id).not.toBe(inputs[1].id)
    fireEvent.click(labels[1])
    expect(inputs[0]).not.toBeChecked()
    expect(inputs[1]).toBeChecked()
  })

  it('gives repeated switches unique labels and description targets', () => {
    render(
      <>
        <Switch label="Notifications" description="First" />
        <Switch label="Notifications" description="Second" />
      </>,
    )
    const inputs = screen.getAllByRole('switch')
    expect(inputs[0].id).not.toBe(inputs[1].id)
    expect(inputs[0]).toHaveAccessibleDescription('First')
    expect(inputs[1]).toHaveAccessibleDescription('Second')
  })

  it('isolates tab panel relationships and handles values containing quotes', () => {
    const items = [
      { value: 'one', label: 'One', children: 'First' },
      { value: 'two"quoted', label: 'Two', children: 'Second' },
    ]
    render(
      <>
        <Tabs items={items} />
        <Tabs items={items} />
      </>,
    )
    const tabs = screen.getAllByRole('tab')
    expect(new Set(tabs.map((tab) => tab.id)).size).toBe(4)
    fireEvent.keyDown(tabs[0], { key: 'ArrowRight' })
    expect(tabs[1]).toHaveFocus()
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[2]).toHaveAttribute('aria-selected', 'true')
    expect(document.getElementById(tabs[1].getAttribute('aria-controls')!)).toHaveTextContent(
      'Second',
    )
  })

  it('starts on an enabled tab', () => {
    render(
      <Tabs
        items={[
          { value: 'disabled', label: 'Disabled', disabled: true, children: 'Hidden' },
          { value: 'enabled', label: 'Enabled', children: 'Visible' },
        ]}
      />,
    )
    expect(screen.getByRole('tab', { name: 'Enabled' })).toHaveAttribute('aria-selected', 'true')
  })

  it('preserves dialog focus during parent updates and restores the trigger on close', async () => {
    function Harness() {
      const [open, setOpen] = useState(false)
      const [count, setCount] = useState(0)
      return (
        <>
          <button onClick={() => setOpen(true)}>Open</button>
          <Dialog open={open} onClose={() => setOpen(false)} title="Edit">
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
            <button>Keep focus</button>
          </Dialog>
        </>
      )
    }
    render(<Harness />)
    const trigger = screen.getByRole('button', { name: 'Open' })
    trigger.focus()
    fireEvent.click(trigger)
    await waitFor(() => expect(screen.getByRole('button', { name: 'Count 0' })).toHaveFocus())
    const focused = screen.getByRole('button', { name: 'Keep focus' })
    focused.focus()
    fireEvent.click(screen.getByRole('button', { name: 'Count 0' }))
    expect(focused).toHaveFocus()
    expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'true')
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(trigger).toHaveFocus()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
