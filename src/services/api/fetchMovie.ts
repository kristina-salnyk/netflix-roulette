import api from './api'
import {AxiosError} from 'axios'

export interface MovieResponse {
    id: number,
    title: string,
    vote_average: number,
    release_date: string,
    poster_path: string,
    overview: string,
    genres: string[]
    runtime: number,
}

export const fetchMovie = async (movieId = '', signal?: AbortSignal): Promise<MovieResponse | null> => {
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
