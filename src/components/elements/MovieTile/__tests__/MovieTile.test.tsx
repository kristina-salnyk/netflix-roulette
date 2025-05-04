import {screen} from '@testing-library/react'
import {renderWithProviders} from '@utils/renderWithProviders'
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

jest.mock('@utils/getYearFromDate', () => ({
  getYearFromDate: jest.fn(),
}))

const onEditClickMock = jest.fn()
const onDeleteClickMock = jest.fn()

describe('MovieTile', () => {
  beforeEach(() => {
    (getYearFromDate as jest.Mock).mockReturnValue(2010)
  })

  test('should render component', () => {
    renderWithProviders(MovieTile, {
      movie: mockMovie,
      onEditClick: onEditClickMock,
      onDeleteClick: onDeleteClickMock
    })
    expect(screen.getByRole('group', {name: /Movie tile/i})).toBeInTheDocument()
  })

  test('should render movie image', () => {
    renderWithProviders(MovieTile, {
      movie: mockMovie,
      onEditClick: onEditClickMock,
      onDeleteClick: onDeleteClickMock
    })

    const movieImage = screen.getByAltText(/Inception/i)
    expect(movieImage).toBeInTheDocument()
    expect(movieImage).toHaveAttribute('src', mockMovie.imageUrl)
  })

  test('should render movie title', () => {
    renderWithProviders(MovieTile, {
      movie: mockMovie,
      onEditClick: onEditClickMock,
      onDeleteClick: onDeleteClickMock
    })

    const movieTitle = screen.getByRole('heading', {name: /Inception/i})
    expect(movieTitle).toBeInTheDocument()
  })

  test('should render movie release year', () => {
    renderWithProviders(MovieTile, {
      movie: mockMovie,
      onEditClick: onEditClickMock,
      onDeleteClick: onDeleteClickMock
    })
    expect(screen.getByText(/2010/i)).toBeInTheDocument()
  })

  test('should render movie genres', () => {
    renderWithProviders(MovieTile, {
      movie: mockMovie,
      onEditClick: onEditClickMock,
      onDeleteClick: onDeleteClickMock
    })
    expect(screen.getByText(/Action, Sci-Fi/i)).toBeInTheDocument()
  })
})
