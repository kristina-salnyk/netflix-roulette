import api from './api'
import {DEFAULT_GENRE, SORT_OPTIONS} from '@constants'
import {MovieDataResponse} from '@type/MovieData'

export interface FetchMoviesResponse {
    data: MovieDataResponse[]
    totalAmount: number
    offset: number
    limit: number
}

export const fetchMoviesRequest = async (sortCriterion: string, searchQuery: string, genre: string, signal?: AbortSignal): Promise<FetchMoviesResponse> => {
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
