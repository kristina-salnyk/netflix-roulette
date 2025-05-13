import React, {FC} from 'react'
import {useLocation, useNavigate, useParams} from 'react-router'
import {Logo} from '@components/elements/Logo'
import {Button} from '@components/elements/Button'
import {SearchIcon} from '@icons/SearchIcon'
import {HeaderStyled, SearchButton} from './Header.styled'

export const Header: FC = () => {
  const {movieId} = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  const handleAddMovieClick = () => {
    navigate('/new')
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
