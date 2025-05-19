import api from './api'
import {MovieData} from '@type/MovieData'

export const createMovie = async (movie: MovieData, signal?: AbortSignal): Promise<MovieData | null> => {
  const response = await api.put('/movies', movie, {signal})
  return response.data
}
