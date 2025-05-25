import useSWRMutation from 'swr/mutation'
import {useRef} from 'react'
import {deleteMovieRequest} from '@services/api/deleteMovieRequest'
import {mutate} from 'swr'
import {useLocation} from 'react-router'

export const useDeleteMovie = () => {
  const abortControllerRef = useRef<AbortController | null>(null)
  const location = useLocation()

  const fetcher = async (key: (id: number) => string, {arg: id}: { arg: number }) => {
    abortControllerRef.current?.abort()

    const controller = new AbortController()
    abortControllerRef.current = controller

    try {
      await deleteMovieRequest(id, controller.signal)

      await mutate(`/movies${location.search}`)
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
