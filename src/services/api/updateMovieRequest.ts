import api from './api'
import {MovieDataRequest, MovieDataResponse} from '@type/MovieData'

export const updateMovieRequest = async (movie: MovieDataRequest, signal?: AbortSignal): Promise<MovieDataResponse | null> => {
  const response = await api.put('/movies', movie, {signal})
  return response.data
}
