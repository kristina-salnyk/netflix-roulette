import React, {ComponentProps, ElementType} from 'react'
import {ThemeProvider} from 'styled-components'
import {render} from '@testing-library/react'
import theme from '../styles/theme'

export const renderWithThemeProvider = <T extends ElementType>(Component: T, props: ComponentProps<T>) => {
  return render(
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  )
}
