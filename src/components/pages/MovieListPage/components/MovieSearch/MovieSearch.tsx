import React, {useCallback} from 'react'
import {useSearchParams} from 'react-router'
import {SearchForm} from '@components/elements/SearchForm'
import {Container} from '@components/elements/Container'
import {MovieSearchContent, MovieSearchStyled, MovieSearchTitle} from './MovieSearch.styled'

const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchQuery = searchParams.get('query') ?? ''

  const handleMoviesSearch = useCallback((query: string) => {
    setSearchParams(prevParams => {
      if (query === '') {
        prevParams.delete('query')
      } else {
        prevParams.set('query', query)
      }
      return prevParams
    })
  }, [setSearchParams])

  return (
    <MovieSearchStyled>
      <Container>
        <MovieSearchContent>
          <MovieSearchTitle>Find your movie</MovieSearchTitle>
          <SearchForm initialQuery={searchQuery} onSearch={handleMoviesSearch}/>
        </MovieSearchContent>
      </Container>
    </MovieSearchStyled>
  )
}

export default MovieSearch
