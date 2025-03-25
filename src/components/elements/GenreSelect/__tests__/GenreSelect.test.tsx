import {fireEvent, screen} from '@testing-library/react'
import {renderWithThemeProvider} from '@utils/renderWithThemeProvider'
import theme from '@styles/theme'
import {GenreSelect} from '../GenreSelect'

const genresMock = ['Action', 'Comedy', 'Drama', 'Horror']

describe('GenreSelect', () => {
  it('should render component with all genres', () => {
    renderWithThemeProvider(GenreSelect, {genres: genresMock})

    genresMock.forEach(genre => {
      expect(screen.getByText(genre)).toBeInTheDocument()
    })
  })

  it('should highlight selected genre', () => {
    renderWithThemeProvider(GenreSelect, {genres: genresMock, selectedGenre: 'Comedy'})
    expect(screen.getByText('Comedy')).toHaveStyle({'border-bottom-color': theme.colors.accent})
  })

  it('should call onSelect with selected genre when genre is clicked', () => {
    const onSelectMock = jest.fn()
    renderWithThemeProvider(GenreSelect, {genres: genresMock, onSelect: onSelectMock})

    fireEvent.click(screen.getByText('Drama'))

    expect(onSelectMock).toHaveBeenCalledTimes(1)
    expect(onSelectMock).toHaveBeenCalledWith('Drama')
  })
})
