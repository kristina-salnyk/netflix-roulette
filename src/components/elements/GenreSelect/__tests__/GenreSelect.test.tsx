import {fireEvent, screen} from '@testing-library/react'
import {renderWithThemeProvider} from '@utils/renderWithThemeProvider'
import {GenreSelect} from '@components/elements/GenreSelect'

const genresMock = ['All', 'Action', 'Comedy', 'Drama', 'Horror']

describe('GenreSelect', () => {
  it('should render component with all genres', () => {
    renderWithThemeProvider(GenreSelect, {genres: genresMock, onSelect: jest.fn()})

    genresMock.forEach(genre => {
      expect(screen.getByText(genre)).toBeInTheDocument()
    })
  })

  it('should highlight selected genre', () => {
    renderWithThemeProvider(GenreSelect, {genres: genresMock, activeGenre: 'Comedy', onSelect: jest.fn()})
    expect(screen.getByText('Comedy')).toHaveClass('selected')
  })

  it('should call onSelect with selected genre when genre is clicked', () => {
    const onSelectMock = jest.fn()
    renderWithThemeProvider(GenreSelect, {genres: genresMock, onSelect: onSelectMock})

    fireEvent.click(screen.getByText('Drama'))

    expect(onSelectMock).toHaveBeenCalledTimes(1)
    expect(onSelectMock).toHaveBeenCalledWith('Drama')
  })
})
