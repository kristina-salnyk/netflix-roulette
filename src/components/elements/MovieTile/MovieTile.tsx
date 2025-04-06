import React, {FC} from 'react'
import {Movie} from '@type/Movie'
import {MovieDescription, MovieGenres, MovieImage, MovieRelease, MovieTileStyled, MovieTitle} from './MovieTile.styled'

interface MovieTileProps {
    movie: Movie,
    onClick: (movieId: string) => void;
}

export const MovieTile: FC<MovieTileProps> = ({movie, onClick}) => {
  const handleClick = () => {
    onClick(movie.id)
  }

  return (
    <MovieTileStyled onClick={handleClick}>
      <MovieImage src={movie.imageUrl}/>
      <MovieDescription>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieRelease>{movie.releaseYear}</MovieRelease>
      </MovieDescription>
      <MovieGenres>{movie.genres.join(', ')}</MovieGenres>
    </MovieTileStyled>
  )
}
