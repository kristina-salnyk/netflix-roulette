import React from 'react'
import {ThemeProvider} from 'styled-components'
import {render} from '@testing-library/react'
import theme from '../styles/theme'
import {BrowserRouter} from 'react-router'

export const renderWithProviders = (Component: React.ElementType, props = {}) => {
  return render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Component {...props} />
      </BrowserRouter>
    </ThemeProvider>
  )
}
