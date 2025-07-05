import React, {FC} from 'react'
import {useLocation} from 'react-router'
import {Movie} from '@type/Movie'
import moviePlaceholder from '@images/movie-placeholder.png'
import {MenuIcon} from '@icons/MenuIcon'
import {getYearFromDate} from '@utils/getYearFromDate'
import {useMoviePoster} from '@hooks/useMoviePoster'
import {useSelect} from '@hooks/useSelect'
import {
  MenuButton,
  MenuOptions,
  MovieGenres,
  MovieOverview,
  MoviePoster,
  MovieRelease,
  MovieTileStyled,
  MovieTitle,
  Option,
  TileMenu
} from './MovieTile.styled'

interface MovieTileProps {
    movie: Movie,
    onEditClick: (movieId: number) => void;
    onDeleteClick: (movieId: number) => void;
}

export const MovieTile: FC<MovieTileProps> = ({movie, onDeleteClick, onEditClick}) => {
  const {moviePoster, onError} = useMoviePoster(movie.posterPath)
  const {isOpen: isMenuOpen, handleClose: handleMenuClose, handleToggle: handleMenuToggle} = useSelect()
  const location = useLocation()

  const handleMenuItemClick = (event: React.MouseEvent<HTMLDivElement>, onClick: (movieId: number) => void) => {
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
      data-testid="movie-tile"
      onClick={() => window.scrollTo({left: 0, top: 0, behavior: 'smooth'})}>
      <MoviePoster src={moviePoster || moviePlaceholder}
        onError={onError}
        alt={movie.title}/>
      <MovieOverview>
        <MovieTitle data-testid="movie-title">{movie.title}</MovieTitle>
        {releaseYear && <MovieRelease>{releaseYear}</MovieRelease>}
      </MovieOverview>
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
