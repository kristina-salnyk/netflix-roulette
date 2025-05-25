import api from './api'
import {MovieDataRequest, MovieDataResponse} from '@type/MovieData'

export const createMovieRequest = async (movie: Omit<MovieDataRequest, 'id'>, signal?: AbortSignal): Promise<MovieDataResponse> => {
  const response = await api.post('/movies', movie, {signal})
  return response.data
}
