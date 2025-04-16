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
    <MovieTileStyled role='group' aria-label='Movie tile' onClick={handleMovieClick}>
      <MovieImage src={movieImage || moviePlaceholder}
        onError={() => setMovieImage(moviePlaceholder)}
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
