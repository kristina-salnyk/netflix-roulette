import React, {FC, useState} from 'react'
import {GENRES, MOVIES, SORT_OPTIONS} from '@constants'
import {filterSortMovieList} from '@utils/filterSortMovieList'
import {MovieTile} from '@components/elements/MovieTile'
import {GenreSelect} from '@components/elements/GenreSelect'
import {SortControl} from '@components/elements/SortControl'
import {ListControls, ListItem, MovieListStyled} from './MovieList.styled'

interface MovieListProps {
    searchQuery: string
    onMovieClick: (movieId: string) => void;
}

export const MovieList: FC<MovieListProps> = ({searchQuery, onMovieClick}) => {
  const [selectedGenre, setSelectedGenre] = useState(GENRES[0])
  const [sortBy, setSortBy] = useState(SORT_OPTIONS[0].value)

  const movies = filterSortMovieList(MOVIES, searchQuery, selectedGenre, sortBy)

  return (
    <div>
      <ListControls data-testid='list-controls'>
        <GenreSelect genres={GENRES} selectedGenre={selectedGenre} onSelect={setSelectedGenre}/>
        <SortControl options={SORT_OPTIONS} sortBy={sortBy} onSelect={setSortBy}/>
      </ListControls>
      <MovieListStyled data-testid='movie-list'>
        {movies.map(item => (
          <ListItem key={item.id}>
            <MovieTile movie={item} onClick={onMovieClick}/>
          </ListItem>
        ))}
      </MovieListStyled>
    </div>
  )
}
