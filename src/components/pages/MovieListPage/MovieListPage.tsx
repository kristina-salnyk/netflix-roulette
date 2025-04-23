import React, {useEffect, useMemo, useState} from 'react'
import {useQuery} from 'react-query'
import {Movie} from '@type/Movie'
import {GENRES, SORT_OPTIONS} from '@constants'
import {MovieList} from 'src/components/pages/MovieListPage/components/MovieList'
import {MovieDetails} from 'src/components/pages/MovieListPage/components/MovieDetails'
import {useMovies} from '@contexts/MoviesContext'
import {MovieSearch} from 'src/components/pages/MovieListPage/components/MovieSearch'
import {fetchMovies, MoviesResponse} from '@services/api/fetchMovies'

export const MovieListPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortCriterion, setSortCriterion] = useState(SORT_OPTIONS[0].value)
  const [activeGenre, setActiveGenre] = useState(GENRES[0])
  const {getSelectedMovie, setSelectedMovieId, setMovies} = useMovies()
  const {data, isLoading, isError} = useQuery<MoviesResponse>({
    queryKey: ['movies', searchQuery, sortCriterion, activeGenre],
    queryFn: ({signal}) => fetchMovies(sortCriterion, searchQuery, activeGenre, signal),
    keepPreviousData: true,
  })

  useEffect(() => {
    if (data) {
      const movies = data.data.map((item) => {
        const movie: Movie = {
          id: item.id.toString(),
          title: item.title,
          releaseDate: item.release_date,
          imageUrl: item.poster_path,
          genres: item.genres,
          rating: item.vote_average,
          duration: item.runtime,
          description: item.overview,
        }
        return movie
      })

      setMovies(movies)
    }
  }, [setMovies, data])

  const selectedMovie = useMemo(() => getSelectedMovie(), [getSelectedMovie])

  return (
    <>
      {selectedMovie ?
        <MovieDetails movie={selectedMovie}/> :
        <MovieSearch searchQuery={searchQuery} onSearch={setSearchQuery}/>}
      <MovieList sortCriterion={sortCriterion}
        activeGenre={activeGenre}
        onMovieClick={setSelectedMovieId}
        onSortCriterionSelect={setSortCriterion}
        onGenreSelect={setActiveGenre}
        isLoading={isLoading}
        isError={isError}/>
    </>
  )
}
