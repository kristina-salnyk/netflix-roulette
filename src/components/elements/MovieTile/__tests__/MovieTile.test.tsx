import {screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {renderWithThemeProvider} from '@utils/renderWithThemeProvider'
import {MovieTile} from '@components/elements/MovieTile'
import {getYearFromDate} from '@utils/getYearFromDate'

const mockMovie =
    {
      id: '1',
      title: 'Inception',
      releaseDate: '2010-05-01',
      imageUrl: 'https://m.media-amazon.com/images/S/pv-target-images/cc72ff2193c0f7a85322aee988d6fe1ae2cd9f8800b6ff6e8462790fe2aacaf3.jpg',
      genres: ['Action', 'Sci-Fi'],
      rating: 7.8,
      duration: 148,
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
    }

const onMovieClickMock = jest.fn()

jest.mock('@utils/getYearFromDate', () => ({
  getYearFromDate: jest.fn(),
}))

describe('MovieTile', () => {
  beforeEach(() => {
    (getYearFromDate as jest.Mock).mockReturnValue(2010)
  })

  test('should render component', () => {
    renderWithThemeProvider(MovieTile, {movie: mockMovie, onMovieClick: onMovieClickMock, testId: 'movie-tile'})
    expect(screen.getByTestId('movie-tile')).toBeInTheDocument()
  })

  test('should render movie image', () => {
    renderWithThemeProvider(MovieTile, {movie: mockMovie, onMovieClick: onMovieClickMock, testId: 'movie-tile'})

    const movieImage = screen.getByTestId('movie-image')
    expect(movieImage).toBeInTheDocument()
    expect(movieImage).toHaveAttribute('src', mockMovie.imageUrl)
  })

  test('should render movie title', () => {
    renderWithThemeProvider(MovieTile, {movie: mockMovie, onMovieClick: onMovieClickMock, testId: 'movie-tile'})

    const movieTitle = screen.getByTestId('movie-title')
    expect(movieTitle).toBeInTheDocument()
    expect(movieTitle).toHaveTextContent(/Inception/i)
  })

  test('should render movie release year', () => {
    renderWithThemeProvider(MovieTile, {movie: mockMovie, onMovieClick: onMovieClickMock, testId: 'movie-tile'})

    const movieReleaseYear = screen.getByTestId('movie-release-year')
    expect(movieReleaseYear).toBeInTheDocument()
    expect(movieReleaseYear).toHaveTextContent(/2010/i)
  })

  test('should render movie genres', () => {
    renderWithThemeProvider(MovieTile, {movie: mockMovie, onMovieClick: onMovieClickMock, testId: 'movie-tile'})

    const movieGenres = screen.getByTestId('movie-genres')
    expect(movieGenres).toBeInTheDocument()
    expect(movieGenres).toHaveTextContent(/Action, Sci-Fi/i)
  })

  test('should call onClick when movie tile is clicked', () => {
    renderWithThemeProvider(MovieTile, {movie: mockMovie, onMovieClick: onMovieClickMock, testId: 'movie-tile'})

    const movieTile = screen.getByTestId('movie-tile')
    userEvent.click(movieTile)

    expect(onMovieClickMock).toHaveBeenCalledWith('1')
  })
})
