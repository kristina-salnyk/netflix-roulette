import api from './api'
import {AxiosError} from 'axios'
import {MovieData} from '@type/MovieData'

export const fetchMovie = async (movieId = '', signal?: AbortSignal): Promise<MovieData | null> => {
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
