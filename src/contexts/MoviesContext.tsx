import React, {createContext, ReactNode, useCallback, useContext, useMemo, useState} from 'react'
import {Movie} from '@type/Movie'

interface MoviesContextType {
    movies: Movie[]
    getMovieById: (movieId: number) => Movie | undefined
    deleteMovieById: (movieId: number) => void
    setMovies: (movies: Movie[]) => void
    selectedMovie: Movie | null
    setSelectedMovie: (movie: Movie | null) => void
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
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)

  const getMovieById = useCallback((movieId: number) => {
    if (!movieId) return undefined
    return movies.find(movie => movie.id === movieId)
  }, [movies])

  const deleteMovieById = useCallback((movieId: number) => {
    setMovies(prevMovies => prevMovies.filter(item => item.id !== movieId))
  }, [setMovies])

  const value = useMemo(() => ({
    movies,
    getMovieById,
    deleteMovieById,
    setMovies,
    selectedMovie,
    setSelectedMovie,
  }),
  [
    movies,
    getMovieById,
    deleteMovieById,
    setMovies,
    selectedMovie,
    setSelectedMovie,
  ])

  return (
    <MoviesContext.Provider value={value}>
      {children}
    </MoviesContext.Provider>
  )
}
