import {fetchMovies, MoviesResponse} from '@services/api/fetchMovies'
import useSWR from 'swr'

export const useMoviesData = (sort: string, query: string, genre: string) => {
  const key = ['movies', query, sort, genre]

  const fetcher = async () => {
    const controller = new AbortController()
    return await fetchMovies(sort, query, genre, controller.signal)
  }

  const {data, error, isLoading} = useSWR<MoviesResponse>(key, fetcher, {
    keepPreviousData: true,
  })

  return {
    data,
    isLoading,
    isError: !!error,
  }
}
