import {screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {renderWithThemeProvider} from '@utils/renderWithThemeProvider'
import {MovieList} from '@components/elements/MovieList'
import {filterSortMovieList} from '@utils/filterSortMovieList'

const mockMovies = [
  {
    id: '1',
    title: 'Inception',
    releaseYear: 2010,
    imageUrl: 'https://m.media-amazon.com/images/S/pv-target-images/cc72ff2193c0f7a85322aee988d6fe1ae2cd9f8800b6ff6e8462790fe2aacaf3.jpg',
    genres: ['Action', 'Sci-Fi'],
    rating: 7.8,
    duration: '2h 28m',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
  },
  {
    id: '2',
    title: 'The Dark Knight',
    releaseYear: 2008,
    imageUrl: 'https://www.screenwritersnetwork.org/beta/wp-content/uploads/2021/02/The-Dark-Knight-Script.jpg',
    genres: ['Action', 'Crime', 'Drama'],
    rating: 9,
    duration: '2h 32m',
    description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
  },
  {
    id: '3',
    title: 'Interstellar',
    releaseYear: 2014,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg',
    genres: ['Adventure', 'Drama', 'Sci-Fi'],
    rating: 8.9,
    duration: '2h 49m',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
  }]

jest.mock('@utils/filterSortMovieList', () => ({
  filterSortMovieList: jest.fn(),
}))

const onMovieClickMock = jest.fn()

describe('MovieList', () => {
  test('should render component', () => {
    (filterSortMovieList as jest.Mock).mockReturnValueOnce(mockMovies)
    renderWithThemeProvider(MovieList, {searchQuery: '', onMovieClick: onMovieClickMock})

    expect(screen.getByTestId('movie-list')).toBeInTheDocument()
  })

  test('should render list controls', () => {
    (filterSortMovieList as jest.Mock).mockReturnValueOnce(mockMovies)
    renderWithThemeProvider(MovieList, {searchQuery: '', onMovieClick: onMovieClickMock})

    expect(screen.getByTestId('list-controls')).toBeInTheDocument()
  })

  test('should render movie tiles', () => {
    (filterSortMovieList as jest.Mock).mockReturnValueOnce(mockMovies)
    renderWithThemeProvider(MovieList, {searchQuery: '', onMovieClick: onMovieClickMock})

    const movieTiles = screen.getAllByTestId('movie-tile')
    expect(movieTiles).toHaveLength(3)
  })

  test('should call onClick when movie tile is clicked', () => {
    (filterSortMovieList as jest.Mock).mockReturnValueOnce(mockMovies)
    renderWithThemeProvider(MovieList, {searchQuery: '', onMovieClick: onMovieClickMock})

    const movieTiles = screen.getAllByTestId('movie-tile')
    userEvent.click(movieTiles[0])

    expect(onMovieClickMock).toHaveBeenCalledWith('1')
  })
})
