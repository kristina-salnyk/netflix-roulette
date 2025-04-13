import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from 'styled-components'
import {MoviesProvider} from './contexts/MoviesContext'
import './index.css'
import App from './App'
import theme from './styles/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MoviesProvider>
        <App/>
      </MoviesProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
