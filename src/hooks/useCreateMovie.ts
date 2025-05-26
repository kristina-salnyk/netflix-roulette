import useSWRMutation from 'swr/mutation'
import {createMovieRequest} from '@services/api/createMovieRequest'
import {MovieDataRequest} from '@type/MovieData'
import {mutate} from 'swr'
import {useRef} from 'react'
import {useLocation} from 'react-router'

export const useCreateMovie = () => {
  const abortControllerRef = useRef<AbortController | null>(null)
  const location = useLocation()

  const fetcher = async (key: (id: number) => string, {arg: movie}: { arg: Omit<MovieDataRequest, 'id'> }) => {
    abortControllerRef.current?.abort()

    const controller = new AbortController()
    abortControllerRef.current = controller

    try {
      const response = await createMovieRequest(movie, controller.signal)

      await mutate(`/movies${location.search}`)

      return response
    } finally {
      abortControllerRef.current = null
    }
  }

  const {trigger, isMutating, error} = useSWRMutation((id: number) => `/movies/${id}`, fetcher)

  return {
    trigger,
    isLoading: isMutating,
    isError: !!error,
  }
}
