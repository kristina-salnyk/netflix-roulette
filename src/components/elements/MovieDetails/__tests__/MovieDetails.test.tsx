import {screen} from '@testing-library/react'
import {renderWithThemeProvider} from '@utils/renderWithThemeProvider'
import {MovieDetails} from '@components/elements/MovieDetails'

const mockMovie =
    {
      id: '1',
      title: 'Inception',
      releaseYear: 2010,
      imageUrl: 'https://m.media-amazon.com/images/S/pv-target-images/cc72ff2193c0f7a85322aee988d6fe1ae2cd9f8800b6ff6e8462790fe2aacaf3.jpg',
      genres: ['Action', 'Sci-Fi'],
      rating: 7.8,
      duration: '2h 28m',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
    }

describe('MovieDetails', () => {
  test('should render component', () => {
    renderWithThemeProvider(MovieDetails, {movie: mockMovie})
    expect(screen.getByTestId('movie-details')).toBeInTheDocument()
  })

  test('should render component with movie image', () => {
    renderWithThemeProvider(MovieDetails, {movie: mockMovie})

    const movieImage = screen.getByTestId('movie-image')
    expect(movieImage).toBeInTheDocument()
    expect(movieImage).toHaveAttribute('src', mockMovie.imageUrl)
  })

  test('should render movie title', () => {
    renderWithThemeProvider(MovieDetails, {movie: mockMovie})

    const movieTitle = screen.getByTestId('movie-title')
    expect(movieTitle).toBeInTheDocument()
    expect(movieTitle).toHaveTextContent(/Inception/i)
  })

  test('should render movie rating', () => {
    renderWithThemeProvider(MovieDetails, {movie: mockMovie})

    const movieRating = screen.getByTestId('movie-rating')
    expect(movieRating).toBeInTheDocument()
    expect(movieRating).toHaveTextContent(/7.8/i)
  })

  test('should render movie genres', () => {
    renderWithThemeProvider(MovieDetails, {movie: mockMovie})

    const movieGenres = screen.getByTestId('movie-genres')
    expect(movieGenres).toBeInTheDocument()
    expect(movieGenres).toHaveTextContent(/Action, Sci-Fi/i)
  })

  test('should render movie release year', () => {
    renderWithThemeProvider(MovieDetails, {movie: mockMovie})

    const movieReleaseYear = screen.getByTestId('movie-release-year')
    expect(movieReleaseYear).toBeInTheDocument()
    expect(movieReleaseYear).toHaveTextContent(/2010/i)
  })

  test('should render movie duration', () => {
    renderWithThemeProvider(MovieDetails, {movie: mockMovie})

    const movieDuration = screen.getByTestId('movie-duration')
    expect(movieDuration).toBeInTheDocument()
    expect(movieDuration).toHaveTextContent(/2h 28m/i)
  })

  test('should render movie description', () => {
    renderWithThemeProvider(MovieDetails, {movie: mockMovie})

    const movieDescription = screen.getByTestId('movie-description')
    expect(movieDescription).toBeInTheDocument()
  })

})
