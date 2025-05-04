import React, {lazy} from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ThemeProvider} from 'styled-components'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router'
import theme from '@styles/theme'
import {SharedLayout} from '@components/pages/SharedLayout'
import {MoviesProvider} from '@contexts/MoviesContext'
import {DialogProvider} from '@contexts/DialogContext'

const queryClient = new QueryClient()

const MovieListPage = lazy(() => import('@components/pages/MovieListPage/MovieListPage'))
const MovieDetails = lazy(() => import('@components/pages/MovieListPage/components/MovieDetails/MovieDetails'))
const MovieSearch = lazy(() => import('@components/pages/MovieListPage/components/MovieSearch/MovieSearch'))

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <DialogProvider>
            <MoviesProvider>
              <Routes>
                <Route path="/" element={<SharedLayout/>}>
                  <Route element={<MovieListPage/>}>
                    <Route index element={<MovieSearch/>}/>
                    <Route path="movies/:movieId" element={<MovieDetails/>}/>
                  </Route>
                </Route>
                <Route path="*" element={<Navigate to="/" replace/>}/>
              </Routes>
            </MoviesProvider>
          </DialogProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
