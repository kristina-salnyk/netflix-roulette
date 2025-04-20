import React, {FC} from 'react'
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
    onMovieClick: (movieId: string) => void;
    onEditClick: (movieId: string) => void;
    onDeleteClick: (movieId: string) => void;
}

export const MovieTile: FC<MovieTileProps> = ({movie, onMovieClick, onDeleteClick, onEditClick}) => {
  const {movieImage, onError} = useMovieImage(movie.imageUrl)
  const {isOpen: isMenuOpen, handleClose: handleMenuClose, handleToggle: handleMenuToggle} = useSelect()

  const handleMovieClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    onMovieClick(movie.id)
  }

  const handleEditClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    onEditClick(movie.id)
    handleMenuClose()
  }

  const handleDeleteClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    onDeleteClick(movie.id)
    handleMenuClose()
  }

  const releaseYear = getYearFromDate(movie.releaseDate)

  return (
    <MovieTileStyled role='group' aria-label='Movie tile' onClick={handleMovieClick}>
      <MovieImage src={movieImage || moviePlaceholder}
        onError={onError}
        alt={movie.title}/>
      <MovieDescription>
        <MovieTitle>{movie.title}</MovieTitle>
        {releaseYear && <MovieRelease>{releaseYear}</MovieRelease>}
      </MovieDescription>
      <MovieGenres>{movie.genres.join(', ')}</MovieGenres>
      <TileMenu className='menu'>
        <MenuButton type='button' onClick={handleMenuToggle}>
          <MenuIcon/>
        </MenuButton>
        {isMenuOpen && <MenuOptions>
          <li>
            <Option onClick={handleEditClick}>Edit</Option>
          </li>
          <li>
            <Option onClick={handleDeleteClick}>Delete</Option>
          </li>
        </MenuOptions>
        }
      </TileMenu>
    </MovieTileStyled>
  )
}
