import React, {FC, useCallback, useEffect} from 'react'
import {useLocation, useNavigate, useParams} from 'react-router'
import {Logo} from '@components/elements/Logo'
import {Button} from '@components/elements/Button'
import {SearchIcon} from '@icons/SearchIcon'
import {HeaderStyled, SearchButton} from './Header.styled'
import {MovieForm} from '@components/elements/MovieForm'
import {useDialog} from '@contexts/DialogContext'
import {MovieDataRequest} from '@type/MovieData'
import {useCreateMovie} from '@hooks/useCreateMovie'
import {toast} from 'react-toastify'
import {Loader} from '@components/elements/Loader'

export const Header: FC = () => {
  const {movieId} = useParams()
  const location = useLocation()
  const {isOpen, openDialog, closeDialog} = useDialog()
  const navigate = useNavigate()
  const {trigger: createMovie, isLoading} = useCreateMovie()

  const onSubmit = useCallback(async (movie: Omit<MovieDataRequest, 'id'>) => {
    try {
      const createdMovie = await createMovie(movie)
      closeDialog()

      navigate(`/movies/${createdMovie.id}${location.search}`)

      toast.success('Movie created successfully!')
    } catch {
      toast.error('Failed to create movie. Please check the data and try again.')
    }
  }, [closeDialog, createMovie, location.search, navigate])

  const handleAddMovieClick = () => {
    openDialog({
      title: 'Add movie',
      component: <MovieForm onSubmit={onSubmit}/>,
    })
  }

  useEffect(() => {
    return () => {
      if (isOpen) {
        closeDialog()
      }
    }
  }, [closeDialog, isOpen])

  return (
    <>
      <HeaderStyled>
        <Logo/>
        {movieId ?
          <SearchButton to={{pathname: '/', search: location.search}}><SearchIcon/></SearchButton> :
          <Button mode='outlined' onClick={handleAddMovieClick}>+ Add movie</Button>}
      </HeaderStyled>
      {isLoading && <Loader fullScreen={true}/>}
    </>
  )
}
