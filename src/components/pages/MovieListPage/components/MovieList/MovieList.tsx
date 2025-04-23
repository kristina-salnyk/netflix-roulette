import React, {FC, useState} from 'react'
import {Movie} from '@type/Movie'
import {GENRES, SORT_OPTIONS} from '@constants'
import {MovieTile} from '@components/elements/MovieTile'
import {GenreSelect} from '@components/elements/GenreSelect'
import {SortControl} from '@components/elements/SortControl'
import {Dialog} from '@components/elements/Dialog'
import {MovieForm} from '@components/elements/MovieForm'
import {useMovies} from '@contexts/MoviesContext'
import {Container} from '@components/elements/Container'
import {Loader} from '@components/elements/Loader'
import {InlineMessage} from '@components/elements/InlineMessage'
import {useDialogScroll} from '@hooks/useDialog'
import {
  DialogButton,
  DialogTextContent,
  ListControls,
  ListItem,
  MovieListContent,
  MovieListStyled
} from './MovieList.styled'

interface MovieListProps {
    sortCriterion: string
    activeGenre: string
    onMovieClick: (movieId: string) => void;
    onSortCriterionSelect: (sortCriterion: string) => void;
    onGenreSelect: (genre: string) => void;
    isLoading: boolean
    isError: boolean
}

export const MovieList: FC<MovieListProps> = ({
  sortCriterion,
  activeGenre,
  onMovieClick,
  onSortCriterionSelect,
  onGenreSelect,
  isLoading,
  isError
}) => {
  const [editingMovieId, setEditingMovieId] = useState('')
  const [deletingMovieId, setDeletingMovieId] = useState('')
  const {movies, deleteMovieById, getMovieById, editMovieById} = useMovies()
  useDialogScroll(Boolean(editingMovieId || deletingMovieId))

  const handleDeleteDialogOpen = (movieId: string) => {
    setDeletingMovieId(movieId)
  }

  const handleEditDialogOpen = (movieId: string) => {
    setEditingMovieId(movieId)
  }

  const handleEditDialogClose = () => {
    setEditingMovieId('')
  }

  const handleDeleteClick = () => {
    deleteMovieById(deletingMovieId)
    setDeletingMovieId('')
  }

  const handleMovieFormSubmit = (movie: Movie) => {
    editMovieById(editingMovieId, movie)
    setEditingMovieId('')
  }

  const editingMovie = getMovieById(editingMovieId)

  return (
    <MovieListStyled>
      <Container>
        <ListControls role='region' aria-label='List controls'>
          <GenreSelect genres={GENRES} activeGenre={activeGenre} onSelect={onGenreSelect}/>
          <SortControl options={SORT_OPTIONS} sortCriterion={sortCriterion} onSelect={onSortCriterionSelect}/>
        </ListControls>
        {isLoading && <Loader/>}
        {!isLoading && isError && <InlineMessage text='Something went wrong. Please try again later'/>}
        {!isLoading && !isError && movies.length === 0 && <InlineMessage text='No movies found'/>}
        {!isLoading && movies.length > 0 && (
          <MovieListContent aria-label='Movie list'>
            {movies.map(item => (
              <ListItem key={item.id}>
                <MovieTile movie={item}
                  onMovieClick={onMovieClick}
                  onEditClick={handleEditDialogOpen}
                  onDeleteClick={handleDeleteDialogOpen}/>
              </ListItem>
            ))}
          </MovieListContent>)
        }
        {deletingMovieId && <Dialog title='Delete movie' onClose={() => setDeletingMovieId('')}>
          <DialogTextContent>Are you sure you want to delete this movie?</DialogTextContent>
          <DialogButton mode='filled' onClick={handleDeleteClick}>Confirm</DialogButton>
        </Dialog>}
        {editingMovieId && <Dialog title='Edit movie' onClose={handleEditDialogClose}>
          <MovieForm initialMovie={editingMovie} onSubmit={handleMovieFormSubmit}/>
        </Dialog>}
      </Container>
    </MovieListStyled>
  )
}
