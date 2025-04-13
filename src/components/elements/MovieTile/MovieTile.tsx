import React, {FC, useEffect, useState} from 'react'
import {Movie} from '@type/Movie'
import moviePlaceholder from '@images/movie-placeholder.png'
import {MenuIcon} from '@icons/MenuIcon'
import {getYearFromDate} from '@utils/getYearFromDate'
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
  const [movieImage, setMovieImage] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setMovieImage(movie.imageUrl || moviePlaceholder)
  }, [movie.imageUrl])

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | KeyboardEvent) => {
      if (event instanceof MouseEvent) {
        setIsMenuOpen(false)
      } else if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('keydown', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
      document.removeEventListener('keydown', handleOutsideClick)
    }
  }, [])


  const handleMovieClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    onMovieClick(movie.id)
  }

  const handleMenuToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setIsMenuOpen(prev => !prev)
  }

  const handleEditClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    onEditClick(movie.id)
    setIsMenuOpen(false)
  }

  const handleDeleteClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    onDeleteClick(movie.id)
    setIsMenuOpen(false)
  }

  const releaseYear = getYearFromDate(movie.releaseDate)

  return (
    <MovieTileStyled onClick={handleMovieClick} data-testid='movie-tile'>
      <MovieImage src={movieImage || moviePlaceholder}
        onError={() => setMovieImage(moviePlaceholder)}
        alt={movie.title}
        data-testid='movie-image'/>
      <MovieDescription>
        <MovieTitle data-testid='movie-title'>{movie.title}</MovieTitle>
        {releaseYear && <MovieRelease data-testid='movie-release-year'>{releaseYear}</MovieRelease>}
      </MovieDescription>
      <MovieGenres data-testid='movie-genres'>{movie.genres.join(', ')}</MovieGenres>
      <TileMenu className='menu'>
        <MenuButton type='button' onClick={handleMenuToggle} data-testid='menu-button'>
          <MenuIcon/>
        </MenuButton>
        {isMenuOpen && <MenuOptions data-testid='menu-options'>
          <li>
            <Option onClick={handleEditClick} data-testid='edit-button'>Edit</Option>
          </li>
          <li>
            <Option onClick={handleDeleteClick} data-testid='delete-button'>Delete</Option>
          </li>
        </MenuOptions>
        }
      </TileMenu>
    </MovieTileStyled>
  )
}
