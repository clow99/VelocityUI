import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button, Dropdown, Pagination, RadioGroup, Select, Tooltip } from '../src'

describe('keyboard use and repeated component instances', () => {
  it('changes pages without submitting an enclosing form', async () => {
    const user = userEvent.setup()
    const submit = vi.fn((event) => event.preventDefault())
    const change = vi.fn()
    render(
      <form onSubmit={submit}>
        <Pagination page={2} totalPages={8} onChange={change} />
      </form>,
    )
    await user.click(screen.getByRole('button', { name: 'Page 4', exact: true }))
    await user.click(screen.getByRole('button', { name: 'Next page' }))
    expect(change.mock.calls).toEqual([[4], [3]])
    expect(submit).not.toHaveBeenCalled()
  })
  it('opens a menu from the keyboard, skips disabled items, navigates and returns focus', async () => {
    const user = userEvent.setup()
    const action = vi.fn()
    render(
      <>
        <Dropdown
          trigger={<Button>Actions</Button>}
          items={[
            { label: 'Archive', onClick: action },
            { label: 'Blocked', disabled: true },
            { separator: true },
            { label: 'Delete' },
            { label: 'Duplicate' },
          ]}
        />
        <button>Next control</button>
      </>,
    )
    const trigger = screen.getByRole('button', { name: 'Actions' })
    trigger.focus()
    await user.keyboard('{ArrowUp}')
    expect(screen.getByRole('menuitem', { name: 'Duplicate' })).toHaveFocus()
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(document.getElementById(trigger.getAttribute('aria-controls')!)).toHaveAttribute(
      'role',
      'menu',
    )
    await user.keyboard('{Home}{ArrowDown}')
    expect(screen.getByRole('menuitem', { name: 'Delete', exact: true })).toHaveFocus()
    await user.keyboard('a{Enter}')
    expect(action).toHaveBeenCalledOnce()
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
    await user.keyboard('{ArrowDown}{Escape}')
    expect(trigger).toHaveFocus()
    await user.keyboard('{ArrowDown}{Tab}')
    expect(screen.getByRole('button', { name: 'Next control' })).toHaveFocus()
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('does not open a disabled dropdown trigger', () => {
    render(<Dropdown trigger={<Button disabled>Actions</Button>} items={[{ label: 'Delete' }]} />)
    fireEvent.click(screen.getByRole('button', { name: 'Actions' }))
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('keeps select IDs unique, labels the visible control and describes its error', async () => {
    const user = userEvent.setup()
    const options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' },
    ]
    render(
      <>
        <Select label="Project" options={options} hint="Choose a project" />
        <Select label="Project" options={options} error="Required project" hint="Hidden hint" />
      </>,
    )
    const controls = screen.getAllByRole('combobox', { name: 'Project' })
    expect(controls[0].id).not.toBe(controls[1].id)
    expect(controls[0]).toHaveAccessibleDescription('Choose a project')
    expect(controls[1]).toHaveAccessibleDescription('Required project')
    await user.click(screen.getAllByText('Project', { selector: 'label' })[1])
    expect(controls[1]).toHaveFocus()
  })

  it('keeps a select placeholder, exposes active options and submits the selected native value', async () => {
    const user = userEvent.setup()
    const change = vi.fn()
    render(
      <form aria-label="Project form">
        <Select
          name="project"
          aria-label="Choose project"
          placeholder="Select a project"
          onChange={change}
          options={[
            { value: 'one', label: 'One' },
            { value: 'blocked', label: 'Blocked', disabled: true },
            { value: 'three', label: 'Three' },
          ]}
        />
        <button>Next</button>
      </form>,
    )
    const control = screen.getByRole('combobox', { name: 'Choose project' })
    expect(control).toHaveTextContent('Select a project')
    control.focus()
    await user.keyboard('{ArrowDown}{ArrowDown}')
    expect(control).toHaveFocus()
    expect(
      document.getElementById(control.getAttribute('aria-activedescendant')!),
    ).toHaveTextContent('Three')
    await user.keyboard('{Home}{End}{Enter}')
    expect(control).toHaveTextContent('Three')
    expect(change).toHaveBeenCalledOnce()
    expect(new FormData(screen.getByRole('form') as HTMLFormElement).get('project')).toBe('three')
    await user.keyboard('{ArrowDown}{Home}{Escape}')
    expect(control).toHaveTextContent('Three')
    await user.keyboard('{ArrowDown}{Tab}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toHaveFocus()
  })

  it('preserves tooltip descriptions, dismisses on Escape and cancels pending timers', () => {
    vi.useFakeTimers()
    try {
      const { unmount } = render(
        <>
          <span id="help">Existing help</span>
          <Tooltip content="Extra help" delay={100}>
            <button aria-describedby="help">Details</button>
          </Tooltip>
        </>,
      )
      const trigger = screen.getByRole('button')
      fireEvent.focus(trigger)
      act(() => {
        vi.advanceTimersByTime(100)
      })
      expect(trigger).toHaveAccessibleDescription('Existing help Extra help')
      fireEvent.keyDown(trigger, { key: 'Escape' })
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
      expect(trigger).toHaveAccessibleDescription('Existing help')
      fireEvent.focus(trigger)
      unmount()
      expect(vi.getTimerCount()).toBe(0)
    } finally {
      vi.useRealTimers()
    }
  })

  it('resets an uncontrolled select with its form and forwards focus to the visible control', async () => {
    const user = userEvent.setup()
    const ref = React.createRef<HTMLSelectElement>()
    render(
      <form>
        <Select
          ref={ref}
          label="Visibility"
          name="visibility"
          defaultValue="private"
          options={[
            { value: 'public', label: 'Public' },
            { value: 'private', label: 'Private' },
          ]}
        />
        <button type="reset">Reset form</button>
      </form>,
    )
    act(() => {
      ref.current?.focus()
    })
    const control = screen.getByRole('combobox', { name: 'Visibility' })
    expect(control).toHaveFocus()
    await user.keyboard('{ArrowDown}{Home}{Enter}')
    expect(control).toHaveTextContent('Public')
    await user.click(screen.getByRole('button', { name: 'Reset form' }))
    expect(control).toHaveTextContent('Private')
    expect(ref.current?.value).toBe('private')
  })

  it('isolates radio labels when independent forms reuse a field name', async () => {
    const user = userEvent.setup()
    const options = [{ value: 'email', label: 'Email' }]
    render(
      <>
        <form>
          <RadioGroup name="contact" options={options} />
        </form>
        <form>
          <RadioGroup name="contact" options={options} />
        </form>
      </>,
    )
    const radios = screen.getAllByRole('radio')
    expect(radios[0].id).not.toBe(radios[1].id)
    await user.click(screen.getAllByText('Email')[1])
    expect(radios[0]).not.toBeChecked()
    expect(radios[1]).toBeChecked()
  })
})
