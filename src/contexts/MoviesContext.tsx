import React, {createContext, ReactNode, useCallback, useContext, useMemo, useState} from 'react'
import {MOVIES} from '@constants'
import {Movie} from '@type/Movie'

interface MoviesContextType {
    movies: Movie[]
    getMovieById: (movieId: string) => Movie | undefined
    deleteMovieById: (movieId: string) => void
    editMovieById: (movieId: string, movie: Movie) => void
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
  const [movies, setMovies] = useState(MOVIES)

  const getMovieById = useCallback((movieId: string) => {
    return movies.find(movie => movie.id === movieId)
  }, [movies])

  const deleteMovieById = useCallback((movieId: string) => {
    setMovies(prevMovies => prevMovies.filter(item => item.id !== movieId))
  }, [setMovies])

  const editMovieById = useCallback((movieId: string, movie: Movie) => {
    setMovies(prevMovies => prevMovies.map(item => item.id === movieId ? movie : item))
  }, [setMovies])

  const value = useMemo(() => ({
    movies,
    getMovieById,
    deleteMovieById,
    editMovieById
  }), [movies, getMovieById, deleteMovieById, editMovieById])

  return (
    <MoviesContext.Provider value={value}>
      {children}
    </MoviesContext.Provider>
  )
}
