import api from './api'
import {DEFAULT_GENRE, SORT_OPTIONS} from '@constants'

export interface MoviesResponse {
    data: {
        id: number,
        title: string,
        vote_average: number,
        release_date: string,
        poster_path: string,
        overview: string,
        genres: string[]
        runtime: number,
    }[]
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
