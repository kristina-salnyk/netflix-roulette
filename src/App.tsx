import React from 'react'
import {ThemeProvider} from 'styled-components'
import theme from './styles/theme'
import {Counter} from './components/elements/Counter/Counter'
import {SearchForm} from './components/elements/SearchForm/SearchForm'

function App() {
  const handleSearch = (query: string) => {
    console.log('Searching...', query)
  }

  return (
    <ThemeProvider theme={theme}>
      <Counter/>
      <SearchForm initialQuery='cat' onSearch={handleSearch}/>
    </ThemeProvider>
  )
}

export default App
