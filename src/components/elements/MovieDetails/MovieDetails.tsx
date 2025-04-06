import React, {FC} from 'react'
import {Movie} from '@type/Movie'
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
  return (
    <MovieDetailsStyled>
      <MovieImage src={movie.imageUrl}/>
      <MovieInfo>
        <MovieHeading>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieRating>{movie.rating}</MovieRating>
        </MovieHeading>
        <MovieGenres>{movie.genres.join(', ')}</MovieGenres>
        <MovieMeta>
          <span>{movie.releaseYear}</span>
          <span>{movie.duration}</span>
        </MovieMeta>
        <MovieDescription>{movie.description}</MovieDescription>
      </MovieInfo>
    </MovieDetailsStyled>
  )
}
