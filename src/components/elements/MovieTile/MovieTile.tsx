import React, {FC, MouseEvent, useEffect, useRef, useState} from 'react'
import {Movie} from '@type/Movie'
import moviePlaceholder from '@images/movie-placeholder.png'
import {MenuIcon} from '@icons/MenuIcon'
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
  const [movieImage, setMovieImage] = useState(movie.imageUrl || moviePlaceholder)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMovieImage(movie.imageUrl || moviePlaceholder)
  }, [movie.imageUrl])

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (!ref.current?.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])


  const handleClick = (event: MouseEvent) => {
    if (ref.current?.contains(event.target as Node)) return
    onMovieClick(movie.id)
  }

  const handleToggle = () => {
    setIsMenuOpen(prev => !prev)
  }

  const handleEditClick = (event: MouseEvent) => {
    event.stopPropagation()
    onEditClick(movie.id)
    setIsMenuOpen(false)
  }

  const handleDeleteClick = (event: MouseEvent) => {
    event.stopPropagation()
    onDeleteClick(movie.id)
    setIsMenuOpen(false)
  }

  return (
    <MovieTileStyled onClick={handleClick} data-testid='movie-tile'>
      <MovieImage src={movieImage}
        onError={() => setMovieImage(moviePlaceholder)}
        alt={movie.title}
        data-testid='movie-image'/>
      <MovieDescription>
        <MovieTitle data-testid='movie-title'>{movie.title}</MovieTitle>
        <MovieRelease data-testid='movie-release-year'>{movie.releaseYear}</MovieRelease>
      </MovieDescription>
      <MovieGenres data-testid='movie-genres'>{movie.genres.join(', ')}</MovieGenres>
      <TileMenu ref={ref} className='menu'>
        <MenuButton type='button' onClick={handleToggle} data-testid='menu-button'>
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
