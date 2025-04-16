import React, {FC, useEffect, useState} from 'react'
import {Movie} from '@type/Movie'
import {GENRES, SORT_OPTIONS} from '@constants'
import {filterSortMovieList} from '@utils/filterSortMovieList'
import {MovieTile} from '@components/elements/MovieTile'
import {GenreSelect} from '@components/elements/GenreSelect'
import {SortControl} from '@components/elements/SortControl'
import {Dialog} from '@components/elements/Dialog'
import {MovieForm} from '@components/elements/MovieForm'
import {DialogButton, DialogTextContent, ListControls, ListItem, MovieListStyled} from './MovieList.styled'
import {useMovies} from '@contexts/MoviesContext'

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
  const {movies, deleteMovieById, getMovieById, editMovieById} = useMovies()

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
    deleteMovieById(deletingMovieId)
    setDeletingMovieId('')
  }

  const handleMovieFormSubmit = (movie: Movie) => {
    editMovieById(editingMovieId, movie)
    setEditingMovieId('')
    setIsEditDialogOpen(false)
  }

  const filteredMovies = filterSortMovieList(movies, searchQuery, selectedGenre, sortBy)

  const editingMovie = getMovieById(editingMovieId)

  return (
    <div>
      <ListControls role='region' aria-label='List controls'>
        <GenreSelect genres={GENRES} selectedGenre={selectedGenre} onSelect={setSelectedGenre}/>
        <SortControl options={SORT_OPTIONS} sortBy={sortBy} onSelect={setSortBy}/>
      </ListControls>
      <MovieListStyled aria-label='Movie list'>
        {filteredMovies.map(item => (
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
