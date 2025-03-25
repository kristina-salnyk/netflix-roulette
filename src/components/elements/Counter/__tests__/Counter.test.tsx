import {fireEvent, screen} from '@testing-library/react'
import {renderWithThemeProvider} from '@utils/renderWithThemeProvider'
import {Counter} from '../Counter'

describe('Counter', () => {
  it('should render component with initial count value', () => {
    renderWithThemeProvider(Counter, {initialCount: 5})
    expect(screen.getByText(/5/i)).toBeInTheDocument()
  })

  it('should display decremented value when decrement button is clicked', () => {
    renderWithThemeProvider(Counter, {initialCount: 5})

    const decrementButton = screen.getByText(/–/i)
    fireEvent.click(decrementButton)

    expect(screen.getByText(/4/i)).toBeInTheDocument()
  })

  it('should display incremented value when increment button is clicked', () => {
    renderWithThemeProvider(Counter, {initialCount: 5})

    const incrementButton = screen.getByText(/\+/i)
    fireEvent.click(incrementButton)

    expect(screen.getByText(/6/i)).toBeInTheDocument()
  })
})
