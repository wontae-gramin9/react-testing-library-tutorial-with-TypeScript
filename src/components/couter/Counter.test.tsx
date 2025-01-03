import { render, screen } from '@testing-library/react'
import Counter from './Counter'
import userEvent from '@testing-library/user-event'

describe('Counter', () => {
  test('renders properly', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toBeInTheDocument()

    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    expect(incrementButton).toBeInTheDocument()
  })

  test('renders a count of 0', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('0')
  })

  test('renders a count of 1 after clicking the increment button', async () => {
    render(<Counter />)
    const user = userEvent.setup()
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    await user.click(incrementButton)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('1')
  })
  test('renders a count of 10 after clicking the set button', async () => {
    render(<Counter />)
    const user = userEvent.setup()
    const setButton = screen.getByRole('button', {
      name: 'Set',
    })
    const input = screen.getByRole('spinbutton')
    await user.type(input, '10')
    await user.click(setButton)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('10')
  })

  test('elements are focused in the right order', async () => {
    render(<Counter />)
    const user = userEvent.setup()
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    const input = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', {
      name: 'Set',
    })
    await user.tab()
    expect(incrementButton).toHaveFocus()
    await user.tab()
    expect(input).toHaveFocus()
    await user.tab()
    expect(setButton).toHaveFocus()
  })
})
