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
    <MovieDetailsStyled data-testid='movie-details'>
      <MovieImage src={movieImage || moviePlaceholder}
        onError={() => setMovieImage(moviePlaceholder)}
        alt={movie.title}
        data-testid='movie-image'/>
      <MovieInfo>
        <MovieHeading>
          <MovieTitle data-testid='movie-title'>{movie.title}</MovieTitle>
          <MovieRating data-testid='movie-rating'>{movie.rating}</MovieRating>
        </MovieHeading>
        <MovieGenres data-testid='movie-genres'>{movie.genres.join(', ')}</MovieGenres>
        <MovieMeta>
          {releaseYear && <span data-testid='movie-release-year'>{releaseYear}</span>}
          {duration && <span data-testid='movie-duration'>{duration}</span>}
        </MovieMeta>
        <MovieDescription data-testid='movie-description'>{movie.description}</MovieDescription>
      </MovieInfo>
    </MovieDetailsStyled>
  )
}
