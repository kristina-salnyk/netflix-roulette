import React, {FC} from 'react'
import {Movie} from '@type/Movie'
import {MovieTile} from '@components/elements/MovieTile'
import {ListItem, MovieListStyled} from './MovieList.styled'

interface MovieListProps {
    movies: Movie[]
    onMovieClick: (movieId: string) => void;
}

export const MovieList: FC<MovieListProps> = ({movies, onMovieClick}) => {
  return (
    <MovieListStyled>
      {movies.map(item => (
        <ListItem key={item.id}>
          <MovieTile movie={item} onClick={onMovieClick}/>
        </ListItem>
      ))}
    </MovieListStyled>
  )
}
