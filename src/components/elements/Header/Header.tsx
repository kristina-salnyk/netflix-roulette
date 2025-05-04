import React, {FC, useId} from 'react'
import {useLocation, useParams} from 'react-router'
import {Movie} from '@type/Movie'
import {Logo} from '@components/elements/Logo'
import {Button} from '@components/elements/Button'
import {useMovies} from '@contexts/MoviesContext'
import {SearchIcon} from '@icons/SearchIcon'
import {MovieForm} from '@components/elements/MovieForm'
import {useDialog} from '@contexts/DialogContext'
import {HeaderStyled, SearchButton} from './Header.styled'

export const Header: FC = () => {
  const {addMovie} = useMovies()
  const id = useId()
  const {openDialog, closeDialog} = useDialog()
  const {movieId} = useParams()
  const location = useLocation()

  const handleMovieFormSubmit = (movie: Movie) => {
    const newMovie = {...movie, id}
    addMovie(newMovie)
    closeDialog()
  }

  const handleAddMovieClick = () => {
    openDialog({
      title: 'Add movie',
      component: <MovieForm onSubmit={handleMovieFormSubmit}/>,
    })
  }

  return (
    <HeaderStyled>
      <Logo/>
      {movieId ?
        <SearchButton to={{pathname: '/', search: location.search}}><SearchIcon/></SearchButton> :
        <Button mode='outlined' onClick={handleAddMovieClick}>+ Add movie</Button>}
    </HeaderStyled>
  )
}
