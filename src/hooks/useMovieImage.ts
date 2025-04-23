import {useEffect, useState} from 'react'
import moviePlaceholder from '@images/movie-placeholder.png'

export const useMovieImage = (imageUrl: string) => {
  const [movieImage, setMovieImage] = useState('')

  useEffect(() => {
    setMovieImage(imageUrl || moviePlaceholder)
  }, [setMovieImage, imageUrl])

  const onError = () => {
    setMovieImage(moviePlaceholder)
  }

  return {movieImage, onError}
}
