import {screen} from '@testing-library/react'
import {renderWithThemeProvider} from '@utils/renderWithThemeProvider'
import {MovieDetails} from '@components/pages/MovieListPage/components/MovieDetails'
import {getYearFromDate} from '@utils/getYearFromDate'
import {getFormattedDuration} from '@utils/getFormattedDuration'

const mockMovie =
    {
      id: '1',
      title: 'Inception',
      releaseDate: '2010-07-16',
      imageUrl: 'https://m.media-amazon.com/images/S/pv-target-images/cc72ff2193c0f7a85322aee988d6fe1ae2cd9f8800b6ff6e8462790fe2aacaf3.jpg',
      genres: ['Action', 'Sci-Fi'],
      rating: 7.8,
      duration: 148,
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
    }

jest.mock('@utils/getYearFromDate', () => ({
  getYearFromDate: jest.fn(),
}))

jest.mock('@utils/getFormattedDuration', () => ({
  getFormattedDuration: jest.fn(() => '2h 28m'),
}))

describe('MovieDetails', () => {
  beforeEach(() => {
    (getYearFromDate as jest.Mock).mockReturnValue(2010);
    (getFormattedDuration as jest.Mock).mockReturnValue('2h 28m')
  })

  test('should render component', () => {
    renderWithThemeProvider(MovieDetails, {movie: mockMovie})

    const movieDetails = screen.getByRole('region', {name: /Movie details/i})
    expect(movieDetails).toBeInTheDocument()
  })

  test('should render movie image', () => {
    renderWithThemeProvider(MovieDetails, {movie: mockMovie})

    const movieImage = screen.getByAltText(/Inception/i)
    expect(movieImage).toBeInTheDocument()
    expect(movieImage).toHaveAttribute('src', mockMovie.imageUrl)
  })

  test('should render movie title', () => {
    renderWithThemeProvider(MovieDetails, {movie: mockMovie})

    const movieTitle = screen.getByRole('heading', {name: /Inception/i})
    expect(movieTitle).toBeInTheDocument()
  })

  test('should render movie rating', () => {
    renderWithThemeProvider(MovieDetails, {movie: mockMovie})
    expect(screen.getByText(/7.8/i)).toBeInTheDocument()
  })

  test('should render movie genres', () => {
    renderWithThemeProvider(MovieDetails, {movie: mockMovie})
    expect(screen.getByText(/Action, Sci-Fi/i)).toBeInTheDocument()
  })

  test('should render movie release year', () => {
    renderWithThemeProvider(MovieDetails, {movie: mockMovie})
    expect(screen.getByText(/2010/i)).toBeInTheDocument()
  })

  test('should render movie duration', () => {
    renderWithThemeProvider(MovieDetails, {movie: mockMovie})
    expect(screen.getByText(/2h 28m/i)).toBeInTheDocument()
  })

  test('should render movie description', () => {
    renderWithThemeProvider(MovieDetails, {movie: mockMovie})
    expect(screen.getByText(mockMovie.description)).toBeInTheDocument()
  })

})
