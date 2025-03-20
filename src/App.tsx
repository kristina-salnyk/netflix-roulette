import React from 'react'
import {ThemeProvider} from 'styled-components'
import theme from './styles/theme'
import {Counter} from './components/elements/Counter/Counter'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Counter/>
    </ThemeProvider>
  )
}

export default App
