import api from './api'
import {DEFAULT_GENRE, SORT_OPTIONS} from '@constants'
import {MovieData} from '@type/MovieData'

export interface MoviesResponse {
    data: MovieData[]
    totalAmount: number
    offset: number
    limit: number
}

export const fetchMovies = async (sortCriterion: string, searchQuery: string, genre: string, signal?: AbortSignal): Promise<MoviesResponse> => {
  const sortOrder = SORT_OPTIONS.find(item => item.value === sortCriterion)?.order
  const filter = (genre === DEFAULT_GENRE) ? undefined : genre

  const config = {
    params: {
      sortBy: sortCriterion,
      sortOrder,
      search: searchQuery,
      searchBy: 'title',
      filter,
      limit: 30
    },
    signal,
  }

  const response = await api.get('/movies', config)
  return response.data
}
