import React, {FC, useEffect, useState} from 'react'
import {Movie} from '@type/Movie'
import {GENRES, MOVIES, SORT_OPTIONS} from '@constants'
import {getMovieById} from '@utils/getMovieById'
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
  const [editingMovieId, setEditingMovieId] = useState('')
  const [deletingMovieId, setDeletingMovieId] = useState('')
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)


  useEffect(() => {
    if (editingMovieId || deletingMovieId) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [deletingMovieId, editingMovieId])

  const handleDeleteDialogOpen = (movieId: string) => {
    setDeletingMovieId(movieId)
  }

  const handleEditDialogOpen = (movieId: string) => {
    setEditingMovieId(movieId)
    setIsEditDialogOpen(true)
  }

  const handleEditDialogClose = () => {
    setEditingMovieId('')
    setIsEditDialogOpen(false)
  }


  const handleDeleteClick = () => {
    console.log('Delete movie with id:', deletingMovieId)
    setDeletingMovieId('')
  }

  const handleMovieFormSubmit = (movie: Movie) => {
    console.log('Save movie:', movie)
    setEditingMovieId('')
  }

  const movies = filterSortMovieList(MOVIES, searchQuery, selectedGenre, sortBy)
  const editingMovie = getMovieById(editingMovieId)

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
              onEditClick={handleEditDialogOpen}
              onDeleteClick={handleDeleteDialogOpen}/>
          </ListItem>
        ))}
      </MovieListStyled>
      {deletingMovieId && <Dialog title='Delete movie' onClose={() => setDeletingMovieId('')}>
        <DialogTextContent>Are you sure you want to delete this movie?</DialogTextContent>
        <DialogButton mode='filled' onClick={handleDeleteClick}>Confirm</DialogButton>
      </Dialog>}
      {isEditDialogOpen && <Dialog title='Edit movie' onClose={handleEditDialogClose}>
        <MovieForm initialMovie={editingMovie} onSubmit={handleMovieFormSubmit}/>
      </Dialog>}
    </div>
  )
}
