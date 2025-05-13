import React from 'react'
import {ThemeProvider} from 'styled-components'
import {render} from '@testing-library/react'
import theme from '../styles/theme'
import {BrowserRouter} from 'react-router'
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()

export const renderWithProviders = (Component: React.ElementType, props = {}) => {
  return render(
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Component {...props} />
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
