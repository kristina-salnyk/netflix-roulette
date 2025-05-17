import React, {lazy} from 'react'
import {ThemeProvider} from 'styled-components'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router'
import theme from '@styles/theme'
import {SharedLayout} from '@components/pages/SharedLayout'
import {MoviesProvider} from '@contexts/MoviesContext'
import {DialogProvider} from '@contexts/DialogContext'

const MovieListPage = lazy(() => import('@components/pages/MovieListPage/MovieListPage'))
const MovieDetails = lazy(() => import('@components/pages/MovieListPage/components/MovieDetails/MovieDetails'))
const MovieSearch = lazy(() => import('@components/pages/MovieListPage/components/MovieSearch/MovieSearch'))
const AddMovieForm = lazy(() => import('@components/pages/MovieListPage/components/AddMovieForm/AddMovieForm'))

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <DialogProvider>
          <MoviesProvider>
            <Routes>
              <Route path="/" element={<SharedLayout/>}>
                <Route element={<MovieListPage/>}>
                  <Route path="" element={<MovieSearch/>}>
                    <Route path="new" element={<AddMovieForm/>}/>
                  </Route>
                  <Route path="movies/:movieId" element={<MovieDetails/>}/>
                </Route>
              </Route>
              <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
          </MoviesProvider>
        </DialogProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
