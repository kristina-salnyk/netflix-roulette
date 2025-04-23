import React, {FC, useId, useState} from 'react'
import {Movie} from '@type/Movie'
import {Logo} from '@components/elements/Logo'
import {Button} from '@components/elements/Button'
import {useMovies} from '@contexts/MoviesContext'
import {SearchIcon} from '@icons/SearchIcon'
import {Dialog} from '@components/elements/Dialog'
import {MovieForm} from '@components/elements/MovieForm'
import {useDialogScroll} from '@hooks/useDialog'
import {HeaderStyled, SearchButton} from './Header.styled'

export const Header: FC = () => {
  const {selectedMovieId, setSelectedMovieId, addMovie} = useMovies()
  const [isMovieDialogOpen, setIsMovieDialogOpen] = useState(false)
  const id = useId()
  useDialogScroll(isMovieDialogOpen)


  const handleSearchToggle = () => {
    setSelectedMovieId('')
  }

  const handleAddMovieDialogClose = () => {
    setIsMovieDialogOpen(false)
  }

  const handleMovieFormSubmit = (movie: Movie) => {
    const newMovie = {...movie, id}
    addMovie(newMovie)
    setIsMovieDialogOpen(false)
  }

  const handleAddMovieClick = () => {
    setIsMovieDialogOpen(true)
  }

  return (
    <HeaderStyled>
      <Logo/>
      {selectedMovieId ?
        <SearchButton type='button' onClick={handleSearchToggle}>
          <SearchIcon/>
        </SearchButton> :
        <Button mode='outlined' onClick={handleAddMovieClick}>+ Add movie</Button>}
      {isMovieDialogOpen && <Dialog title='Add movie' onClose={handleAddMovieDialogClose}>
        <MovieForm onSubmit={handleMovieFormSubmit}/>
      </Dialog>}
    </HeaderStyled>
  )
}
