import React, {createContext, ReactNode, useCallback, useContext, useMemo, useState} from 'react'
import {Movie} from '@type/Movie'

interface MoviesContextType {
    movies: Movie[]
    selectedMovieId: string
    getMovieById: (movieId: string) => Movie | undefined
    deleteMovieById: (movieId: string) => void
    editMovieById: (movieId: string, movie: Movie) => void
    getSelectedMovie: () => Movie | undefined
    setSelectedMovieId: (movieId: string) => void
    addMovie: (movie: Movie) => void
    setMovies: (movies: Movie[]) => void
}

const MoviesContext = createContext<MoviesContextType | undefined>(undefined)

export const useMovies = () => {
  const context = useContext(MoviesContext)
  if (!context) {
    throw new Error('useMovies must be used within a MoviesProvider')
  }
  return context
}

export const MoviesProvider = ({children}: { children: ReactNode }) => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [selectedMovieId, setSelectedMovieId] = useState('')

  const getMovieById = useCallback((movieId: string) => {
    if (!movieId) return undefined
    return movies.find(movie => movie.id === movieId)
  }, [movies])

  const deleteMovieById = useCallback((movieId: string) => {
    setMovies(prevMovies => prevMovies.filter(item => item.id !== movieId))
  }, [setMovies])

  const editMovieById = useCallback((movieId: string, movie: Movie) => {
    setMovies(prevMovies => prevMovies.map(item => item.id === movieId ? movie : item))
  }, [setMovies])

  const getSelectedMovie = useCallback(() => {
    return getMovieById(selectedMovieId)
  }, [getMovieById, selectedMovieId])

  const addMovie = useCallback((movie: Movie) => {
    setMovies(prevMovies => [movie, ...prevMovies])
  }, [])

  const value = useMemo(() => ({
    movies,
    selectedMovieId,
    getMovieById,
    deleteMovieById,
    editMovieById,
    getSelectedMovie,
    setSelectedMovieId,
    addMovie,
    setMovies
  }),
  [
    movies,
    selectedMovieId,
    getMovieById,
    deleteMovieById,
    editMovieById,
    getSelectedMovie,
    setSelectedMovieId,
    addMovie,
    setMovies
  ])

  return (
    <MoviesContext.Provider value={value}>
      {children}
    </MoviesContext.Provider>
  )
}
