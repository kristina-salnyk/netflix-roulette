import React, {FC} from 'react'
import {ButtonProps} from '@components/elements/Button'
import {TabButtonStyled} from './TabButton.styled'

export const TabButton: FC<ButtonProps> = (props) => {
  return <TabButtonStyled {...props}/>
}
