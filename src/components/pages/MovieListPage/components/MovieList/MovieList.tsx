import React, {FC} from 'react'
import {Movie} from '@type/Movie'
import {GENRES, SORT_OPTIONS} from '@constants'
import {MovieTile} from '@components/elements/MovieTile'
import {GenreSelect} from '@components/elements/GenreSelect'
import {SortControl} from '@components/elements/SortControl'
import {useMovies} from '@contexts/MoviesContext'
import {Container} from '@components/elements/Container'
import {Loader} from '@components/elements/Loader'
import {InlineMessage} from '@components/elements/InlineMessage'
import {useDialog} from '@contexts/DialogContext'
import {MovieForm} from '@components/elements/MovieForm'
import {ListControls, ListItem, MovieListContent, MovieListStyled} from './MovieList.styled'

interface MovieListProps {
    sortCriterion: string
    activeGenre: string
    onSortCriterionSelect: (sortCriterion: string) => void;
    onGenreSelect: (genre: string) => void;
    isLoading: boolean
    isError: boolean
}

export const MovieList: FC<MovieListProps> = ({
  sortCriterion,
  activeGenre,
  onSortCriterionSelect,
  onGenreSelect,
  isLoading,
  isError
}) => {
  const {movies, deleteMovieById, getMovieById, editMovieById} = useMovies()
  const {openDialog, closeDialog} = useDialog()

  const handleDeleteDialogOpen = (movieId: string) => {
    openDialog({
      title: 'Delete movie',
      component: 'Are you sure you want to delete this movie?',
      onConfirm: () => handleDeleteClick(movieId)
    })
  }

  const handleEditDialogOpen = (movieId: string) => {
    const movie = getMovieById(movieId)
    openDialog({
      title: 'Edit movie',
      component: <MovieForm initialMovie={movie} onSubmit={handleMovieFormSubmit}/>,
    })
  }

  const handleDeleteClick = (movieId: string) => {
    deleteMovieById(movieId)
    closeDialog()
  }

  const handleMovieFormSubmit = (movie: Movie) => {
    editMovieById(movie.id, movie)
    closeDialog()
  }

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
                  onEditClick={handleEditDialogOpen}
                  onDeleteClick={handleDeleteDialogOpen}/>
              </ListItem>
            ))}
          </MovieListContent>)}
      </Container>
    </MovieListStyled>
  )
}
