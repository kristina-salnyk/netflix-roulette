import React from 'react'
import {ThemeProvider} from 'styled-components'
import {render} from '@testing-library/react'
import theme from '../styles/theme'
import {MoviesProvider} from '@contexts/MoviesContext'

export const renderWithThemeProvider = (Component: React.ElementType, props = {}) => {
  return render(
    <ThemeProvider theme={theme}>
      <MoviesProvider>
        <Component {...props} />
      </MoviesProvider>
    </ThemeProvider>
  )
}
