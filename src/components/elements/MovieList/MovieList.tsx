import React, {FC, useEffect, useState} from 'react'
import {Movie} from '@type/Movie'
import {GENRES, MOVIES, SORT_OPTIONS} from '@constants'
import {filterSortMovieList} from '@utils/filterSortMovieList'
import {MovieTile} from '@components/elements/MovieTile'
import {GenreSelect} from '@components/elements/GenreSelect'
import {SortControl} from '@components/elements/SortControl'
import {Dialog} from '@components/elements/Dialog'
import {MovieForm} from '@components/elements/MovieForm'
import {DialogButton, DialogTextContent, ListControls, ListItem, MovieListStyled} from './MovieList.styled'

interface MovieListProps {
    searchQuery: string
    onMovieClick: (movieId: string) => void;
}

export const MovieList: FC<MovieListProps> = ({searchQuery, onMovieClick}) => {
  const [selectedGenre, setSelectedGenre] = useState(GENRES[0])
  const [sortBy, setSortBy] = useState(SORT_OPTIONS[0].value)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  useEffect(() => {
    if (isDeleteDialogOpen || isEditDialogOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isDeleteDialogOpen, isEditDialogOpen])

  const handleDeleteDialogToggle = () => {
    setIsDeleteDialogOpen((prevState) => !prevState)
  }

  const handleEditDialogToggle = () => {
    setIsEditDialogOpen((prevState) => !prevState)
  }

  const handleDeleteClick = (movieId: string) => {
    console.log('Delete movie with id:', movieId)
    handleDeleteDialogToggle()
  }

  const handleMovieFormSubmit = (movie: Movie) => {
    console.log('Save movie:', movie)
    handleEditDialogToggle()
  }

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
            <MovieTile movie={item}
              onMovieClick={onMovieClick}
              onEditClick={handleEditDialogToggle}
              onDeleteClick={handleDeleteDialogToggle}/>
            {isDeleteDialogOpen && <Dialog title='Delete movie' onClose={handleDeleteDialogToggle}>
              <DialogTextContent>Are you sure you want to delete this movie?</DialogTextContent>
              <DialogButton mode='filled' onClick={() => handleDeleteClick(item.id)}>Confirm</DialogButton>
            </Dialog>}
            {isEditDialogOpen && <Dialog title='Edit movie' onClose={handleEditDialogToggle}>
              <MovieForm initialMovie={item} onSubmit={handleMovieFormSubmit}/>
            </Dialog>}
          </ListItem>
        ))}
      </MovieListStyled>

    </div>
  )
}
