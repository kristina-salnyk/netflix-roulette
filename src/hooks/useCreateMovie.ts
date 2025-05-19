import useSWRMutation from 'swr/mutation'
import {createMovie} from '@services/api/createMovie'
import {NewMovieData} from '@type/MovieData'
import {mutate} from 'swr'

export const useCreateMovie = () => {
  const key = ['new']

  const fetcher = async (_: string[], {arg}: { arg: NewMovieData }) => {
    const controller = new AbortController()
    const response = await createMovie(arg, controller.signal)
    await mutate((key) => Array.isArray(key) && key[0] === 'movies')
    return response
  }

  const {trigger, isMutating, error} = useSWRMutation(key, fetcher)

  return {
    trigger,
    isMutating,
    isError: !!error,
  }
}
