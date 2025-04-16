import React, {FC, useEffect, useState} from 'react'
import {Movie} from '@type/Movie'
import moviePlaceholder from '@images/movie-placeholder.png'
import {getFormattedDuration} from '@utils/getFormattedDuration'
import {getYearFromDate} from '@utils/getYearFromDate'
import {
  MovieDescription,
  MovieDetailsStyled,
  MovieGenres,
  MovieHeading,
  MovieImage,
  MovieInfo,
  MovieMeta,
  MovieRating,
  MovieTitle
} from './MovieDetails.styled'

interface MovieDetailProps {
    movie: Movie
}

export const MovieDetails: FC<MovieDetailProps> = ({movie}) => {
  const [movieImage, setMovieImage] = useState('')

  useEffect(() => {
    setMovieImage(movie.imageUrl || moviePlaceholder)
  }, [movie.imageUrl])

  const releaseYear = getYearFromDate(movie.releaseDate)
  const duration = getFormattedDuration(movie.duration)

  return (
    <MovieDetailsStyled role="region" aria-label="Movie details">
      <MovieImage src={movieImage || moviePlaceholder}
        onError={() => setMovieImage(moviePlaceholder)}
        alt={movie.title}/>
      <MovieInfo>
        <MovieHeading>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieRating>{movie.rating}</MovieRating>
        </MovieHeading>
        <MovieGenres>{movie.genres.join(', ')}</MovieGenres>
        <MovieMeta>
          {releaseYear && <span>{releaseYear}</span>}
          {duration && <span>{duration}</span>}
        </MovieMeta>
        <MovieDescription>{movie.description}</MovieDescription>
      </MovieInfo>
    </MovieDetailsStyled>
  )
}
