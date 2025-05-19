import React, {useCallback, useEffect} from 'react'
import {MovieForm} from '@components/elements/MovieForm'
import {useDialog} from '@contexts/DialogContext'
import {useLocation, useNavigate} from 'react-router'
import {useCreateMovie} from '@hooks/useCreateMovie'
import {NewMovieData} from '@type/MovieData'

const AddMovieForm = () => {
  const {isOpen, openDialog, closeDialog} = useDialog()
  const navigate = useNavigate()
  const {trigger} = useCreateMovie()
  const location = useLocation()

  const onSubmit = useCallback((movie: NewMovieData) => {
    trigger(movie).then(closeDialog)
  }, [closeDialog, trigger])

  useEffect(() => {
    openDialog({
      title: 'Add movie',
      component: <MovieForm onMovieCreate={onSubmit}/>,
      onClose: () => {
        navigate(`/${location.search}`)
      },
    })

    return () => {
      if (isOpen) {
        closeDialog()
      }
    }
  }, [closeDialog, onSubmit, isOpen, navigate, openDialog, location.search])

  return null
}

export default AddMovieForm
