import {useEffect, useState} from 'react'
import moviePlaceholder from '@images/movie-placeholder.png'

export const useMoviePoster = (posterPath: string) => {
  const [moviePoster, setMoviePoster] = useState('')

  useEffect(() => {
    setMoviePoster(posterPath || moviePlaceholder)
  }, [setMoviePoster, posterPath])

  const onError = () => {
    setMoviePoster(moviePlaceholder)
  }

  return {moviePoster, onError}
}
