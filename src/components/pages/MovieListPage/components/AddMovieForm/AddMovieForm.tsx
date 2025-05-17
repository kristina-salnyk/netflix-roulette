import React, {useCallback, useEffect, useId, useRef} from 'react'
import {MovieForm} from '@components/elements/MovieForm'
import {useDialog} from '@contexts/DialogContext'
import {useNavigate} from 'react-router'
import {Movie} from '@type/Movie'
import {useMovies} from '@contexts/MoviesContext'

const AddMovieForm = () => {
  const {isOpen, openDialog, closeDialog} = useDialog()
  const navigate = useNavigate()
  const {addMovie} = useMovies()
  const id = useId()
  const dialogOpenedRef = useRef(false)

  const handleMovieFormSubmit = useCallback((movie: Movie) => {
    const newMovie = {...movie, id}
    addMovie(newMovie)
    closeDialog()
  }, [addMovie, closeDialog, id])

  useEffect(() => {
    if (!dialogOpenedRef.current) {
      dialogOpenedRef.current = true

      openDialog({
        title: 'Add movie',
        component: <MovieForm onSubmit={handleMovieFormSubmit}/>,
        onClose: () => {
          navigate('/')
        },
      })
    }

    return () => {
      if (isOpen) {
        closeDialog()
      }
    }
  }, [closeDialog, handleMovieFormSubmit, isOpen, navigate, openDialog])

  return null
}

export default AddMovieForm
