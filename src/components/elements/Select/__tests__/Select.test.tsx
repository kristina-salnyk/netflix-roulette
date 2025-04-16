import {screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Select} from '@components/elements/Select'
import {renderWithThemeProvider} from '@utils/renderWithThemeProvider'

const mockOptions = [
  {value: 'foo', label: 'Foo'},
  {value: 'bar', label: 'Bar'},
  {value: 'all', label: 'All'},
]

const onSelectMock = jest.fn()

describe('Select', () => {
  test('should render component with provided options', () => {
    renderWithThemeProvider(Select, {options: mockOptions, selectedValue: 'foo', onSelect: onSelectMock})

    expect(screen.getByText(/Foo/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('should display options when select button is clicked', () => {
    renderWithThemeProvider(Select, {options: mockOptions, selectedValue: 'foo', onSelect: onSelectMock})

    const selectButton = screen.getByRole('button')
    userEvent.click(selectButton)

    expect(screen.getAllByRole('option')).toHaveLength(mockOptions.length)
  })

  test('should call onSelect when select option is clicked', () => {
    renderWithThemeProvider(Select, {options: mockOptions, selectedValue: 'foo', onSelect: onSelectMock})

    const selectButton = screen.getByRole('button')
    userEvent.click(selectButton)

    const selectOptions = screen.getAllByRole('option')
    userEvent.click(selectOptions[1])

    expect(onSelectMock).toHaveBeenCalledWith('bar')
    expect(screen.queryAllByRole('option')).toHaveLength(0)
  })

  test('should hide select options when clicked outside', () => {
    renderWithThemeProvider(Select, {options: mockOptions, selectedValue: 'foo', onSelect: onSelectMock})

    const selectButton = screen.getByRole('button')
    userEvent.click(selectButton)

    expect(screen.getByText(/Bar/i)).toBeInTheDocument()
    userEvent.click(document.body)

    expect(screen.queryByText(/Bar/i)).not.toBeInTheDocument()
  })

  test('should hide select options when pressed Escape', () => {
    renderWithThemeProvider(Select, {options: mockOptions, selectedValue: 'foo', onSelect: onSelectMock})

    const selectButton = screen.getByRole('button')
    userEvent.click(selectButton)

    expect(screen.getByText(/Bar/i)).toBeInTheDocument()
    userEvent.keyboard('{Escape}')

    expect(screen.queryByText(/Bar/i)).not.toBeInTheDocument()
  })
})
