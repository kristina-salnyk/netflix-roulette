import React, {FC} from 'react'
import {useLocation} from 'react-router'
import {Movie} from '@type/Movie'
import moviePlaceholder from '@images/movie-placeholder.png'
import {MenuIcon} from '@icons/MenuIcon'
import {getYearFromDate} from '@utils/getYearFromDate'
import {useMovieImage} from '@hooks/useMovieImage'
import {useSelect} from '@hooks/useSelect'
import {
  MenuButton,
  MenuOptions,
  MovieDescription,
  MovieGenres,
  MovieImage,
  MovieRelease,
  MovieTileStyled,
  MovieTitle,
  Option,
  TileMenu
} from './MovieTile.styled'

interface MovieTileProps {
    movie: Movie,
    onEditClick: (movieId: string) => void;
    onDeleteClick: (movieId: string) => void;
}

export const MovieTile: FC<MovieTileProps> = ({movie, onDeleteClick, onEditClick}) => {
  const {movieImage, onError} = useMovieImage(movie.imageUrl)
  const {isOpen: isMenuOpen, handleClose: handleMenuClose, handleToggle: handleMenuToggle} = useSelect()
  const location = useLocation()

  const handleMenuItemClick = (event: React.MouseEvent<HTMLDivElement>, onClick: (movieId: string) => void) => {
    event.preventDefault()
    event.stopPropagation()
    onClick(movie.id)
    handleMenuClose()
  }

  const releaseYear = getYearFromDate(movie.releaseDate)

  return (
    <MovieTileStyled role='group'
      aria-label='Movie tile'
      to={{pathname: `/movies/${movie.id}`, search: location.search}}
      data-testid="movie-tile">
      <MovieImage src={movieImage || moviePlaceholder}
        onError={onError}
        alt={movie.title}/>
      <MovieDescription>
        <MovieTitle data-testid="movie-title">{movie.title}</MovieTitle>
        {releaseYear && <MovieRelease>{releaseYear}</MovieRelease>}
      </MovieDescription>
      <MovieGenres data-testid="movie-genres">{movie.genres.join(', ')}</MovieGenres>
      <TileMenu className='menu'>
        <MenuButton type='button' onClick={handleMenuToggle}>
          <MenuIcon/>
        </MenuButton>
        {isMenuOpen && <MenuOptions>
          <li>
            <Option onClick={(event) => handleMenuItemClick(event, onEditClick)}>Edit</Option>
          </li>
          <li>
            <Option onClick={(event) => handleMenuItemClick(event, onDeleteClick)}>Delete</Option>
          </li>
        </MenuOptions>
        }
      </TileMenu>
    </MovieTileStyled>
  )
}
