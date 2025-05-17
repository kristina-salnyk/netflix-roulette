import {screen} from '@testing-library/react'
import {renderWithProviders} from '@utils/renderWithProviders'
import MovieDetails from '@components/pages/MovieListPage/components/MovieDetails/MovieDetails'
import {getYearFromDate} from '@utils/getYearFromDate'
import {getFormattedDuration} from '@utils/getFormattedDuration'
import {useMovieData} from '@hooks/useMovieData'

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

const mockQueryData = {
  data: {
    id: '1',
    title: mockMovie.title,
    release_date: mockMovie.releaseDate,
    poster_path: mockMovie.imageUrl,
    genres: mockMovie.genres,
    vote_average: mockMovie.rating,
    runtime: mockMovie.duration,
    overview: mockMovie.description,
  },
  isLoading: false,
  isError: false,
}

jest.mock('@services/api/fetchMovie', () => ({
  fetchMovie: jest.fn(() => Promise.resolve(mockMovie)),
}))

jest.mock('@hooks/useMovieData', () => ({
  useMovieData: jest.fn(),
}))

jest.mock('@utils/getYearFromDate', () => ({
  getYearFromDate: jest.fn(),
}))

jest.mock('@utils/getFormattedDuration', () => ({
  getFormattedDuration: jest.fn(),
}))

describe('MovieDetails', () => {
  beforeEach(() => {
    (useMovieData as jest.Mock).mockReturnValue(mockQueryData);
    (getYearFromDate as jest.Mock).mockReturnValue('2010');
    (getFormattedDuration as jest.Mock).mockReturnValue('2h 28m')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should render component', () => {
    renderWithProviders(MovieDetails)

    const movieDetails = screen.getByRole('region', {name: /Movie details/i})
    expect(movieDetails).toBeInTheDocument()
  })

  test('should render movie image', () => {
    renderWithProviders(MovieDetails)

    const movieImage = screen.getByAltText(/Inception/i)
    expect(movieImage).toBeInTheDocument()
    expect(movieImage).toHaveAttribute('src', mockMovie.imageUrl)
  })

  test('should render movie title', () => {
    renderWithProviders(MovieDetails)

    const movieTitle = screen.getByRole('heading', {name: /Inception/i})
    expect(movieTitle).toBeInTheDocument()
  })

  test('should render movie rating', () => {
    renderWithProviders(MovieDetails)
    expect(screen.getByText(/7.8/i)).toBeInTheDocument()
  })

  test('should render movie genres', () => {
    renderWithProviders(MovieDetails)
    expect(screen.getByText(/Action, Sci-Fi/i)).toBeInTheDocument()
  })

  test('should render movie release year', () => {
    renderWithProviders(MovieDetails)
    expect(screen.getByText(/2010/i)).toBeInTheDocument()
  })

  test('should render movie duration', () => {
    renderWithProviders(MovieDetails)
    expect(screen.getByText(/2h 28m/i)).toBeInTheDocument()
  })

  test('should render movie description', () => {
    renderWithProviders(MovieDetails)
    expect(screen.getByText(mockMovie.description)).toBeInTheDocument()
  })

  test('should render loader when isLoading is true', () => {
    (useMovieData as jest.Mock).mockReturnValue({
      ...mockQueryData,
      isLoading: true,
    })
    renderWithProviders(MovieDetails)

    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  test('should render error message when isError is true', () => {
    (useMovieData as jest.Mock).mockReturnValue({
      ...mockQueryData,
      isError: true,
    })
    renderWithProviders(MovieDetails)

    expect(screen.getByRole('alert')).toBeInTheDocument()
  })
})
