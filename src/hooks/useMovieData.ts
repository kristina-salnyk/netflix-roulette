import useSWR from 'swr'
import {fetchMovie, MovieResponse} from '@services/api/fetchMovie'

export const useMovieData = (movieId?: string) => {
  const key = ['movie', movieId]

  const fetcher = async () => {
    const controller = new AbortController()
    return await fetchMovie(movieId, controller.signal)
  }

  const {data, error, isLoading} = useSWR<MovieResponse | null>(key, fetcher, {
    keepPreviousData: true,
  })

  return {
    data,
    isLoading,
    isError: !!error,
  }
}
