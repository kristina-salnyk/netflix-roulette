import React from 'react'
import {useTheme} from 'styled-components'
import {RotatingLines} from 'react-loader-spinner'
import {LOADER_WIDTH} from '@constants'
import {LoaderStyled} from './Loader.styled'

export const Loader = () => {
  const theme = useTheme()

  return (
    <LoaderStyled>
      <RotatingLines
        strokeColor={theme.colors.accent}
        strokeWidth='5'
        animationDuration='0.75'
        width={LOADER_WIDTH.toString()}
        visible={true}
      />
    </LoaderStyled>
  )
}

