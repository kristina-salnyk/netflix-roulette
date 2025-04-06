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

    expect(screen.getByTestId('select-value')).toBeInTheDocument()
    expect(screen.getByTestId('select-button')).toBeInTheDocument()
  })

  test('should display options when select button is clicked', () => {
    renderWithThemeProvider(Select, {options: mockOptions, selectedValue: 'foo', onSelect: onSelectMock})

    const selectButton = screen.getByTestId('select-button')
    userEvent.click(selectButton)

    expect(screen.getAllByTestId('select-option')).toHaveLength(mockOptions.length)
  })

  test('should call onSelect when select option is clicked', () => {
    renderWithThemeProvider(Select, {options: mockOptions, selectedValue: 'foo', onSelect: onSelectMock})

    const selectButton = screen.getByTestId('select-button')
    userEvent.click(selectButton)

    const selectOptions = screen.getAllByTestId('select-option')
    userEvent.click(selectOptions[1])

    expect(onSelectMock).toHaveBeenCalledWith('bar')
    expect(screen.queryAllByTestId('select-options')).toHaveLength(0)
  })

  test('should hide select options when clicked outside', () => {
    renderWithThemeProvider(Select, {options: mockOptions, selectedValue: 'foo', onSelect: onSelectMock})

    const selectButton = screen.getByTestId('select-button')
    userEvent.click(selectButton)

    expect(screen.getByTestId('select-options')).toBeInTheDocument()
    userEvent.click(document.body)

    expect(screen.queryByTestId('select-options')).not.toBeInTheDocument()
  })

  test('should hide select options when pressed Escape', () => {
    renderWithThemeProvider(Select, {options: mockOptions, selectedValue: 'foo', onSelect: onSelectMock})

    const selectButton = screen.getByTestId('select-button')
    userEvent.click(selectButton)

    expect(screen.getByTestId('select-options')).toBeInTheDocument()
    userEvent.keyboard('{Escape}')

    expect(screen.queryByTestId('select-options')).not.toBeInTheDocument()
  })
})
