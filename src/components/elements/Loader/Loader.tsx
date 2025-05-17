import React from 'react'
import {useTheme} from 'styled-components'
import {LOADER_MARGIN, LOADER_WIDTH} from '@constants'
import {LoaderStyled} from './Loader.styled'
import {BeatLoader} from 'react-spinners'

export const Loader = () => {
  const theme = useTheme()

  return (
    <LoaderStyled role="status">
      <BeatLoader
        color={theme.colors.accent}
        size={LOADER_WIDTH}
        margin={LOADER_MARGIN}
        speedMultiplier={1.5}
      />
    </LoaderStyled>
  )
}

