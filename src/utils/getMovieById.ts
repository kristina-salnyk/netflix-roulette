import {MOVIES} from '@constants'

export const getMovieById = (movieId: string) => {
  return MOVIES.find(movie => movie.id === movieId)
}
