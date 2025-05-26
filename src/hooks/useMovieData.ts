import {fetchMovieRequest} from '@services/api/fetchMovieRequest'
import useSWR from 'swr'
import {useRef} from 'react'

export const useMovieData = (movieId?: number) => {
  const abortControllerRef = useRef<AbortController | null>(null)

  const fetcher = async () => {
    abortControllerRef.current?.abort()

    const controller = new AbortController()
    abortControllerRef.current = controller

    if (!movieId) {
      return null
    }

    try {
      return await fetchMovieRequest(movieId, controller.signal)
    } finally {
      abortControllerRef.current = null
    }
  }

  const {data, error, isLoading} = useSWR(movieId ? `/movies/${movieId}` : null, fetcher)

  return {
    data,
    isLoading,
    isError: !!error,
  }
}
