import api from '@services/api/api'

export const deleteMovieRequest = async (movieId: number, signal?: AbortSignal): Promise<void> => {
  const response = await api.delete(`/movies/${movieId}`, {signal})
  return response.data
}
