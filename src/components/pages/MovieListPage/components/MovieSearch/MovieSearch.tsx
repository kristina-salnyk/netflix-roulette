import React, {FC} from 'react'
import {SearchForm} from '@components/elements/SearchForm'
import {Container} from '@components/elements/Container'
import {MovieSearchContent, MovieSearchStyled, MovieSearchTitle} from './MovieSearch.styled'

interface MovieSearchProps {
    searchQuery: string;
    onSearch: (query: string) => void;
}

export const MovieSearch: FC<MovieSearchProps> = ({searchQuery, onSearch}) => {
  return (
    <MovieSearchStyled>
      <Container>
        <MovieSearchContent>
          <MovieSearchTitle>Find your movie</MovieSearchTitle>
          <SearchForm initialQuery={searchQuery} onSearch={onSearch}/>
        </MovieSearchContent>
      </Container>
    </MovieSearchStyled>
  )
}
