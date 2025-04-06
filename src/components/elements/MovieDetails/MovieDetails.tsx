import React, {FC, useState} from 'react'
import {Movie} from '@type/Movie'
import moviePlaceholder from '@images/movie-placeholder.png'
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
  const [movieImage, setMovieImage] = useState(movie.imageUrl || moviePlaceholder)

  return (
    <MovieDetailsStyled>
      <MovieImage src={movieImage}
        onError={() => setMovieImage(moviePlaceholder)}
        alt={movie.title}/>
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
