import React, {useState} from 'react'
import {ThemeProvider} from 'styled-components'
import theme from '@styles/theme'
import {Counter} from '@components/elements/Counter'
import {SearchForm} from '@components/elements/SearchForm'
import {GenreSelect} from '@components/elements/GenreSelect'
import {GENRES, MOVIES} from './constants'
import {MovieTile} from '@components/elements/MovieTile'

function App() {
  const [selectedGenre, setSelectedGenre] = useState('Action')

  const handleSearch = (query: string) => {
    console.log('Searching...', query)
  }

  const handleSelect = (genre: string) => {
    setSelectedGenre(genre)
  }

  return (
    <ThemeProvider theme={theme}>
      <Counter/>
      <SearchForm initialQuery='cat' onSearch={handleSearch}/>
      <GenreSelect genres={GENRES} selectedGenre={selectedGenre} onSelect={handleSelect}/>
      <MovieTile movie={MOVIES[0]} onClick={() => console.log('Movie clicked')}/>
      <MovieTile movie={MOVIES[1]} onClick={() => console.log('Movie clicked')}/>
      <MovieTile movie={MOVIES[2]} onClick={() => console.log('Movie clicked')}/>
    </ThemeProvider>
  )
}

export default App
