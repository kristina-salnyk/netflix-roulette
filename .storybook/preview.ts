import type {Preview} from '@storybook/react'

import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {withThemeFromJSXProvider} from '@storybook/addon-themes'
import theme from '../src/styles/theme'

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: Noto Sans, "sans-serif";
        background-color: #424242;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
        font-size: 16px;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    span {
        margin: 0;
        padding: 0;
        caret-color: transparent;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
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
