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
    renderWithThemeProvider(MovieTile, {movie: mockMovie, onMovieClick: onMovieClickMock})
    expect(screen.getByRole('group', {name: /Movie tile/i})).toBeInTheDocument()
  })

  test('should render movie image', () => {
    renderWithThemeProvider(MovieTile, {movie: mockMovie, onMovieClick: onMovieClickMock})

    const movieImage = screen.getByAltText(/Inception/i)
    expect(movieImage).toBeInTheDocument()
    expect(movieImage).toHaveAttribute('src', mockMovie.imageUrl)
  })

  test('should render movie title', () => {
    renderWithThemeProvider(MovieTile, {movie: mockMovie, onMovieClick: onMovieClickMock})

    const movieTitle = screen.getByRole('heading', {name: /Inception/i})
    expect(movieTitle).toBeInTheDocument()
  })

  test('should render movie release year', () => {
    renderWithThemeProvider(MovieTile, {movie: mockMovie, onMovieClick: onMovieClickMock})
    expect(screen.getByText(/2010/i)).toBeInTheDocument()
  })

  test('should render movie genres', () => {
    renderWithThemeProvider(MovieTile, {movie: mockMovie, onMovieClick: onMovieClickMock})
    expect(screen.getByText(/Action, Sci-Fi/i)).toBeInTheDocument()
  })

  test('should call onClick when movie tile is clicked', () => {
    renderWithThemeProvider(MovieTile, {movie: mockMovie, onMovieClick: onMovieClickMock})

    const movieTile = screen.getByRole('group', {name: /Movie tile/i})
    userEvent.click(movieTile)

    expect(onMovieClickMock).toHaveBeenCalledWith('1')
  })
})
