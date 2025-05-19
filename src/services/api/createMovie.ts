import api from './api'
import {MovieData, NewMovieData} from '@type/MovieData'

export const createMovie = async (movie: NewMovieData, signal?: AbortSignal): Promise<MovieData | null> => {
  const response = await api.post('/movies', movie, {signal})
  return response.data
}
