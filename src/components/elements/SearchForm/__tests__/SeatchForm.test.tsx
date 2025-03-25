import {screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {renderWithThemeProvider} from '@utils/renderWithThemeProvider'
import {SearchForm} from '../SearchForm'

describe('SearchForm', () => {
  it('should render component with initial input value', () => {
    renderWithThemeProvider(SearchForm, {initialQuery: 'dog'})
    expect(screen.getByRole('textbox')).toHaveValue('dog')
  })

  it('should call onSearch with input value when search button is clicked', () => {
    const onSearchMock = jest.fn()
    renderWithThemeProvider(SearchForm, {initialQuery: 'dog', onSearch: onSearchMock})

    const searchInput = screen.getByRole('textbox')
    userEvent.clear(searchInput)
    userEvent.type(searchInput, 'bird')

    const searchButton = screen.getByText(/Search/i)
    userEvent.click(searchButton)

    expect(onSearchMock).toHaveBeenCalledTimes(1)
    expect(onSearchMock).toHaveBeenCalledWith('bird')
  })

  it('should call onSearch with input value when Enter is pressed', () => {
    const onSearchMock = jest.fn()
    renderWithThemeProvider(SearchForm, {initialQuery: 'dog', onSearch: onSearchMock})

    const searchInput = screen.getByRole('textbox')
    userEvent.clear(searchInput)
    userEvent.type(searchInput, 'bird')
    userEvent.keyboard('{enter}')

    expect(onSearchMock).toHaveBeenCalledTimes(1)
    expect(onSearchMock).toHaveBeenCalledWith('bird')
  })
})
