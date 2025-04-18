import {screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {renderWithThemeProvider} from '@utils/renderWithThemeProvider'
import {MovieList} from '@components/elements/MovieList'
import {filterSortMovieList} from '@utils/filterSortMovieList'
import {useMovies} from '@contexts/MoviesContext'

const mockMovies = [
  {
    id: '1',
    title: 'Inception',
    releaseDate: '2010-07-16',
    imageUrl: 'https://m.media-amazon.com/images/S/pv-target-images/cc72ff2193c0f7a85322aee988d6fe1ae2cd9f8800b6ff6e8462790fe2aacaf3.jpg',
    genres: ['Action', 'Sci-Fi'],
    rating: 7.8,
    duration: 180,
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
  },
  {
    id: '2',
    title: 'The Dark Knight',
    releaseDate: '2008-07-18',
    imageUrl: 'https://www.screenwritersnetwork.org/beta/wp-content/uploads/2021/02/The-Dark-Knight-Script.jpg',
    genres: ['Action', 'Crime', 'Drama'],
    rating: 9,
    duration: 132,
    description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
  },
  {
    id: '3',
    title: 'Interstellar',
    releaseDate: '2008-07-18',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg',
    genres: ['Adventure', 'Drama', 'Sci-Fi'],
    rating: 8.9,
    duration: 169,
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
  }]

jest.mock('@utils/filterSortMovieList', () => ({
  filterSortMovieList: jest.fn(),
}))

jest.mock('@contexts/MoviesContext')

const onMovieClickMock = jest.fn()

const useMoviesMock = useMovies as jest.MockedFunction<typeof useMovies>

describe('MovieList', () => {
  beforeEach(() => {
    useMoviesMock.mockReturnValue({
      movies: mockMovies,
      deleteMovieById: jest.fn(),
      getMovieById: jest.fn(),
      editMovieById: jest.fn(),
    })
  })

  test('should render component', () => {
    (filterSortMovieList as jest.Mock).mockReturnValueOnce(mockMovies)
    renderWithThemeProvider(MovieList, {searchQuery: '', onMovieClick: onMovieClickMock})

    expect(screen.getByRole('list', {name: /Movie list/i})).toBeInTheDocument()
  })

  test('should render list controls', () => {
    (filterSortMovieList as jest.Mock).mockReturnValueOnce(mockMovies)
    renderWithThemeProvider(MovieList, {searchQuery: '', onMovieClick: onMovieClickMock})

    expect(screen.getByRole('region', {name: /List controls/i})).toBeInTheDocument()
  })

  test('should render movie tiles', () => {
    (filterSortMovieList as jest.Mock).mockReturnValueOnce(mockMovies)
    renderWithThemeProvider(MovieList, {searchQuery: '', onMovieClick: onMovieClickMock})

    const movieTiles = screen.getAllByRole('group', {name: /Movie tile/i})
    expect(movieTiles).toHaveLength(3)
  })

  test('should call onClick when movie tile is clicked', () => {
    (filterSortMovieList as jest.Mock).mockReturnValueOnce(mockMovies)
    renderWithThemeProvider(MovieList, {searchQuery: '', onMovieClick: onMovieClickMock})

    const movieTiles = screen.getAllByRole('group', {name: /Movie tile/i})
    userEvent.click(movieTiles[0])

    expect(onMovieClickMock).toHaveBeenCalledWith('1')
  })
})
