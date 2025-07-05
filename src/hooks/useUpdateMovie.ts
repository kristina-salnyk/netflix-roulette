import useSWRMutation from 'swr/mutation'
import {useRef} from 'react'
import {mutate} from 'swr'
import {MovieDataRequest} from '@type/MovieData'
import {updateMovieRequest} from '@services/api/updateMovieRequest'
import {useLocation} from 'react-router'
import {useMovies} from '@contexts/MoviesContext'

export const useUpdateMovie = () => {
  const abortControllerRef = useRef<AbortController | null>(null)
  const location = useLocation()
  const {selectedMovie} = useMovies()

  const fetcher = async (key: string, {arg: movie}: { arg: MovieDataRequest }) => {
    abortControllerRef.current?.abort()

    const controller = new AbortController()
    abortControllerRef.current = controller

    try {
      const result = await updateMovieRequest(movie, controller.signal)

      await mutate(`/movies${location.search}`)

      if (selectedMovie && selectedMovie.id === movie.id) {
        await mutate(`/movies/${movie.id}`)
      }

      return result
    } finally {
      abortControllerRef.current = null
    }
  }

  const {trigger, isMutating, error} = useSWRMutation('/movies', fetcher)

  return {
    trigger,
    isLoading: isMutating,
    isError: !!error,
  }
}
