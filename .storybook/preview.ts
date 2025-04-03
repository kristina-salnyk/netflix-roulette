import type {Preview} from '@storybook/react'

import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {withThemeFromJSXProvider} from '@storybook/addon-themes'
import theme from '../src/styles/theme'

const GlobalStyles = createGlobalStyle`
    body {
        font-family: Noto Sans, "sans-serif";
    }
`

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [withThemeFromJSXProvider({
    themes: {
      light: theme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles,
  })]
}

export default preview
