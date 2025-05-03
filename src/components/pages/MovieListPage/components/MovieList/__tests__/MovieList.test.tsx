import React from 'react'
import {screen} from '@testing-library/react'
import {renderWithProviders} from '@utils/renderWithProviders'
import {MovieList} from '@components/pages/MovieListPage/components/MovieList'
import {useMovies} from '@contexts/MoviesContext'
import {useDialog} from '@contexts/DialogContext'

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

jest.mock('@contexts/MoviesContext')
const useMoviesMock = useMovies as jest.MockedFunction<typeof useMovies>

jest.mock('@contexts/DialogContext')
const useDialogMock = useDialog as jest.MockedFunction<typeof useDialog>

jest.mock('@components/elements/MovieTile', () => ({
  __esModule: true,
  MovieTile: () => <div role="group" aria-label="Movie tile"/>,
}))

describe('MovieList', () => {
  const defaultProps = {
    sortCriterion: 'title',
    activeGenre: 'All',
    onSortCriterionSelect: jest.fn(),
    onGenreSelect: jest.fn(),
    isLoading: false,
    isError: false
  }

  beforeEach(() => {
    useMoviesMock.mockReturnValue({
      movies: mockMovies,
      deleteMovieById: jest.fn(),
      getMovieById: jest.fn(),
      editMovieById: jest.fn(),
    } as unknown as ReturnType<typeof useMovies>)

    useDialogMock.mockReturnValue({
      openDialog: jest.fn(),
      closeDialog: jest.fn(),
    } as unknown as ReturnType<typeof useDialog>)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should render component', () => {
    renderWithProviders(MovieList, defaultProps)

    expect(screen.getByRole('list', {name: /Movie list/i})).toBeInTheDocument()
  })

  test('should render list controls', () => {
    renderWithProviders(MovieList, defaultProps)

    expect(screen.getByRole('region', {name: /List controls/i})).toBeInTheDocument()
  })

  test('should render movie tiles', () => {
    renderWithProviders(MovieList, defaultProps)

    const movieTiles = screen.getAllByRole('group', {name: /Movie tile/i})
    expect(movieTiles).toHaveLength(3)
  })

  test('should render loader when isLoading is true', () => {
    renderWithProviders(MovieList, {...defaultProps, isLoading: true})

    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  test('should render error message when isError is true', () => {
    renderWithProviders(MovieList, {...defaultProps, isError: true})

    expect(screen.getByRole('alert')).toBeInTheDocument()
  })
})
