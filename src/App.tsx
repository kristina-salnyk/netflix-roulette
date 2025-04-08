import React, {useState} from 'react'
import {ThemeProvider} from 'styled-components'
import theme from '@styles/theme'
import {MOVIES} from '@constants'
import {Counter} from '@components/elements/Counter'
import {SearchForm} from '@components/elements/SearchForm'
import {MovieDetails} from '@components/elements/MovieDetails'
import {MovieList} from '@components/elements/MovieList'
import {Container} from '@components/elements/Container'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedMovieId, setSelectedMovieId] = useState('')

  const selectedMovie = MOVIES.find((movie) => {
    return movie.id === selectedMovieId
  })

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Counter/>
        {selectedMovie ?
          <MovieDetails movie={selectedMovie}/> :
          <SearchForm onSearch={setSearchQuery}/>}
        <MovieList searchQuery={searchQuery} onMovieClick={setSelectedMovieId}/>
      </Container>
    </ThemeProvider>
  )
}

export default App
