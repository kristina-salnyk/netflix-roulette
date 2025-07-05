import React, {FC} from 'react'
import {useTheme} from 'styled-components'
import {LOADER_MARGIN, LOADER_WIDTH} from '@constants'
import {LoaderStyled, Overlay} from './Loader.styled'
import {BeatLoader} from 'react-spinners'

interface LoaderProps {
    fullScreen?: boolean
}

export const Loader: FC<LoaderProps> = ({fullScreen}) => {
  const theme = useTheme()

  const Content = (
    <LoaderStyled role="status">
      <BeatLoader
        color={theme.colors.accent}
        size={LOADER_WIDTH}
        margin={LOADER_MARGIN}
        speedMultiplier={1.5}
      />
    </LoaderStyled>
  )

  if (fullScreen) {
    return (
      <Overlay>
        {Content}
      </Overlay>
    )
  }

  return Content
}

