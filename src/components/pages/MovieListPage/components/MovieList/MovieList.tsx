import React, {FC, useCallback, useEffect, useState} from 'react'
import {GENRES, SORT_OPTIONS} from '@constants'
import {MovieTile} from '@components/elements/MovieTile'
import {GenreSelect} from '@components/elements/GenreSelect'
import {SortControl} from '@components/elements/SortControl'
import {useMovies} from '@contexts/MoviesContext'
import {Container} from '@components/elements/Container'
import {Loader} from '@components/elements/Loader'
import {InlineMessage} from '@components/elements/InlineMessage'
import {useDialog} from '@contexts/DialogContext'
import {ListControls, ListItem, MovieListContent, MovieListStyled} from './MovieList.styled'
import {useLocation, useNavigate} from 'react-router'
import {MovieForm} from '@components/elements/MovieForm'
import {useUpdateMovie} from '@hooks/useUpdateMovie'
import {MovieDataRequest} from '@type/MovieData'
import {useDeleteMovie} from '@hooks/useDeleteMovie'
import {useMovieData} from '@hooks/useMovieData'
import {toast} from 'react-toastify'

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
  const {movies, selectedMovie} = useMovies()
  const {openDialog, closeDialog} = useDialog()
  const navigate = useNavigate()
  const location = useLocation()
  const [editingMovieId, setEditingMovieId] = useState<number>()
  const {trigger: updateMovie, isLoading: isUpdateMovieLoading} = useUpdateMovie()
  const {trigger: deleteMovie, isLoading: isDeleteMovieLoading} = useDeleteMovie()
  const {data, isLoading: isMovieDataLoading} = useMovieData(editingMovieId)
  const showLoader = isMovieDataLoading || isUpdateMovieLoading || isDeleteMovieLoading

  const onEditSubmit = useCallback(async (movie: Omit<MovieDataRequest, 'id'>, movieId?: number) => {
    if (!movieId) {
      return
    }

    try {
      await updateMovie({...movie, id: movieId})
      setEditingMovieId(undefined)
      closeDialog()

      navigate(`/movies/${movieId}${location.search}`)
      window.scrollTo({left: 0, top: 0, behavior: 'smooth'})

      toast.success('Movie updated successfully!')
    } catch {
      toast.error('Failed to update movie. Please check the data and try again.')
    }
  }, [closeDialog, location.search, navigate, updateMovie])

  const onDeleteSubmit = useCallback(async (movieId: number) => {
    try {
      closeDialog()

      await deleteMovie(movieId)
      if (selectedMovie && selectedMovie.id === movieId) {
        navigate(`/${location.search}`)
      }

      toast.success('Movie deleted successfully!')
    } catch {
      toast.error('Failed to delete movie. Please try again later.')
    }
  }, [closeDialog, deleteMovie, location.search, navigate, selectedMovie])

  useEffect(() => {
    if (!editingMovieId || isMovieDataLoading) {
      return
    }

    if (!data) {
      setEditingMovieId(undefined)
      toast.error('Failed to load movie data. Please try again later.')
      return
    }

    const movie = {
      id: data.id,
      title: data.title,
      posterPath: data.poster_path,
      voteAverage: data.vote_average,
      runtime: data.runtime,
      releaseDate: data.release_date,
      overview: data.overview,
      genres: data.genres,
    }

    openDialog({
      title: 'Edit movie',
      component: <MovieForm initialMovie={movie} onSubmit={onEditSubmit}/>,
    })
  }, [editingMovieId, isMovieDataLoading, data, openDialog, onEditSubmit])

  const handleDeleteDialogOpen = (movieId: number) => {
    openDialog({
      title: 'Delete movie',
      component: 'Are you sure you want to delete this movie?',
      onConfirm: () => onDeleteSubmit(movieId)
    })
  }

  return (
    <>
      <MovieListStyled>
        <Container>
          <ListControls role='region' aria-label='List controls'>
            <GenreSelect genres={GENRES} activeGenre={activeGenre} onSelect={onGenreSelect}/>
            <SortControl options={SORT_OPTIONS}
              sortCriterion={sortCriterion}
              onSelect={onSortCriterionSelect}/>
          </ListControls>
          {isLoading && <Loader/>}
          {!isLoading && isError && <InlineMessage text='Something went wrong. Please try again later'/>}
          {!isLoading && !isError && movies.length === 0 && <InlineMessage text='No movies found'/>}
          {!isLoading && movies.length > 0 && (
            <MovieListContent aria-label='Movie list'>
              {movies.map(item => (
                <ListItem key={item.id}>
                  <MovieTile movie={item}
                    onEditClick={setEditingMovieId}
                    onDeleteClick={handleDeleteDialogOpen}/>
                </ListItem>
              ))}
            </MovieListContent>)}
        </Container>
      </MovieListStyled>
      {showLoader && <Loader fullScreen={true}/>}
    </>
  )
}
