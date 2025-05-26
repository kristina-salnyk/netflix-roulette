import {fetchMoviesRequest} from '@services/api/fetchMoviesRequest'
import useSWR from 'swr'
import {useLocation} from 'react-router'
import {useRef} from 'react'

export const useMoviesData = (sort: string, query: string, genre: string) => {
  const abortControllerRef = useRef<AbortController | null>(null)
  const location = useLocation()

  const fetcher = async () => {
    abortControllerRef.current?.abort()

    const controller = new AbortController()
    abortControllerRef.current = controller

    try {
      return await fetchMoviesRequest(sort, query, genre, controller.signal)
    } finally {
      abortControllerRef.current = null
    }
  }

  const {data, error, isLoading} = useSWR(`/movies${location.search}`, fetcher)

  return {
    data,
    isLoading: isLoading,
    isError: !!error,
  }
}
