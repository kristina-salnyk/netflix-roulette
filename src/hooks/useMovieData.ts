import useSWR from 'swr'
import {fetchMovie} from '@services/api/fetchMovie'
import {MovieData} from '@type/MovieData'

export const useMovieData = (movieId?: number) => {
  const id = movieId?.toString()
  const key = ['movie', id]

  const fetcher = async () => {
    const controller = new AbortController()
    return await fetchMovie(id, controller.signal)
  }

  const {data, error, isLoading} = useSWR<MovieData | null>(key, fetcher, {
    keepPreviousData: true,
  })

  return {
    data,
    isLoading,
    isError: !!error,
  }
}
