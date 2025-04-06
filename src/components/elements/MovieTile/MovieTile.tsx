import React, {FC, useState} from 'react'
import {Movie} from '@type/Movie'
import moviePlaceholder from '@images/movie-placeholder.png'
import {MovieDescription, MovieGenres, MovieImage, MovieRelease, MovieTileStyled, MovieTitle} from './MovieTile.styled'

interface MovieTileProps {
    movie: Movie,
    onClick: (movieId: string) => void;
}

export const MovieTile: FC<MovieTileProps> = ({movie, onClick}) => {
  const [movieImage, setMovieImage] = useState(movie.imageUrl || moviePlaceholder)

  const handleClick = () => {
    onClick(movie.id)
  }

  return (
    <MovieTileStyled onClick={handleClick}>
      <MovieImage src={movieImage}
        onError={() => setMovieImage(moviePlaceholder)}
        alt={movie.title}/>
      <MovieDescription>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieRelease>{movie.releaseYear}</MovieRelease>
      </MovieDescription>
      <MovieGenres>{movie.genres.join(', ')}</MovieGenres>
    </MovieTileStyled>
  )
}
