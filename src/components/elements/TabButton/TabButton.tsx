import React, {FC} from 'react'
import {ButtonProps} from '../Button/Button'
import {TabButtonStyled} from './TabButton.styled'

export interface TabButtonProps extends ButtonProps {
    selected?: boolean;
}

export const TabButton: FC<TabButtonProps> = (props) => {
  return <TabButtonStyled {...props}/>
}
