import React, {Suspense, useCallback, useEffect, useMemo} from 'react'
import {useQuery} from 'react-query'
import {Outlet, useSearchParams} from 'react-router'
import {Movie} from '@type/Movie'
import {MovieList} from '@components/pages/MovieListPage/components/MovieList'
import {Loader} from '@components/elements/Loader'
import {useMovies} from '@contexts/MoviesContext'
import {fetchMovies, MoviesResponse} from '@services/api/fetchMovies'
import {getSearchValueByParam} from '@utils/getSearchValueByParam'
import {DEFAULT_GENRE, GENRES, SORT_OPTIONS, SORT_VALUES} from '@constants'

const MovieListPage = () => {
  const {setMovies} = useMovies()
  const [searchParams, setSearchParams] = useSearchParams()

  const searchQuery = searchParams.get('query') ?? ''
  const genreParam = searchParams.get('genre') ?? ''
  const sortParam = searchParams.get('sortBy') ?? ''

  const activeGenre = useMemo(() => getSearchValueByParam(genreParam, GENRES, DEFAULT_GENRE), [genreParam])
  const sortCriterion = useMemo(() => getSearchValueByParam(sortParam, Object.values(SORT_VALUES), SORT_OPTIONS[0].value), [sortParam])

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

  const setSortCriterion = useCallback((sort: string) => {
    setSearchParams(prevParams => {
      prevParams.set('sortBy', sort)
      return prevParams
    })
  }, [setSearchParams])

  const setActiveGenre = useCallback((genre: string) => {
    setSearchParams(prevParams => {
      prevParams.set('genre', genre.toLowerCase())
      return prevParams
    })
  }, [setSearchParams])

  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Outlet/>
      </Suspense>
      <MovieList sortCriterion={sortCriterion}
        activeGenre={activeGenre}
        onSortCriterionSelect={setSortCriterion}
        onGenreSelect={setActiveGenre}
        isLoading={isLoading}
        isError={isError}/>
    </>
  )
}

export default MovieListPage
