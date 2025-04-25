import React from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ThemeProvider} from 'styled-components'
import theme from '@styles/theme'
import {MovieListPage} from '@components/pages/MovieListPage'
import {SharedLayout} from '@components/pages/SharedLayout'
import {MoviesProvider} from '@contexts/MoviesContext'
import {DialogProvider} from '@contexts/DialogContext'

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <DialogProvider>
          <MoviesProvider>
            <SharedLayout>
              <MovieListPage/>
            </SharedLayout>
          </MoviesProvider>
        </DialogProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
