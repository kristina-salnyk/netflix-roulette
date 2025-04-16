import React, {useState} from 'react'
import {Counter} from '@components/elements/Counter'
import {SearchForm} from '@components/elements/SearchForm'
import {MovieDetails} from '@components/elements/MovieDetails'
import {MovieList} from '@components/elements/MovieList'
import {Container} from '@components/elements/Container'
import {useMovies} from '@contexts/MoviesContext'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedMovieId, setSelectedMovieId] = useState('')
  const {getMovieById} = useMovies()

  const selectedMovie = getMovieById(selectedMovieId)

  return (
    <Container>
      <Counter/>
      {selectedMovie ?
        <MovieDetails movie={selectedMovie}/> :
        <SearchForm onSearch={setSearchQuery}/>}
      <MovieList searchQuery={searchQuery} onMovieClick={setSelectedMovieId}/>
    </Container>
  )
}

export default App
