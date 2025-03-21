import React, {FC} from 'react'
import {ButtonProps} from '../Button'
import {SquareButtonStyled} from './SquareButton.styled'

export const SquareButton: FC<ButtonProps> = (props) => {
  return <SquareButtonStyled {...props}/>
}
