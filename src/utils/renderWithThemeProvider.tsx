import React from 'react'
import {ThemeProvider} from 'styled-components'
import {render} from '@testing-library/react'
import theme from '../styles/theme'

export const renderWithThemeProvider = (Component: React.ElementType, props = {}) => {
  return render(
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  )
}
