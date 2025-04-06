import React, {useState} from 'react'
import {ThemeProvider} from 'styled-components'
import theme from '@styles/theme'
import {GENRES, MOVIES, SORT_OPTIONS} from '@constants'
import {Counter} from '@components/elements/Counter'
import {SearchForm} from '@components/elements/SearchForm'
import {MovieDetails} from '@components/elements/MovieDetails'
import {MovieList} from '@components/elements/MovieList'
import {Container} from '@components/elements/Container'
import {ListControls} from 'src/components/elements/ListControls'
import {filterSortMovieList} from '@utils/filterSortMovieList'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState(GENRES[0])
  const [sortBy, setSortBy] = useState(SORT_OPTIONS[0].value)
  const [selectedMovieId, setSelectedMovieId] = useState('')

  const selectedMovie = MOVIES.find((movie) => {
    return movie.id === selectedMovieId
  })

  const movieList = filterSortMovieList(MOVIES, searchQuery, selectedGenre, sortBy)

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Counter/>
        {selectedMovie ?
          <MovieDetails movie={selectedMovie}/> :
          <SearchForm onSearch={setSearchQuery}/>}
        <ListControls selectedGenre={selectedGenre}
          sortBy={sortBy}
          onGenreSelect={setSelectedGenre}
          onSortBySelect={setSortBy}/>
        <MovieList movies={movieList} onMovieClick={setSelectedMovieId}/>
      </Container>
    </ThemeProvider>
  )
}

export default App
