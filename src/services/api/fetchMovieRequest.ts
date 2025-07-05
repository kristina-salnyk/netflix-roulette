import api from './api'
import {AxiosError} from 'axios'
import {MovieDataResponse} from '@type/MovieData'

export const fetchMovieRequest = async (movieId: number, signal?: AbortSignal): Promise<MovieDataResponse | null> => {
  try {
    const response = await api.get(`/movies/${movieId}`, {signal})
    return response.data
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response?.status === 404) {
      return null
    }
    throw error
  }
}
