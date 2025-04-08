import React, {FC} from 'react'
import {ButtonProps} from '@components/elements/Button'
import {TabButtonStyled} from './TabButton.styled'

type TabButtonProps = Omit<ButtonProps, 'mode'>;

export const TabButton: FC<TabButtonProps> = (props) => {
  return <TabButtonStyled {...props} mode="outlined"/>
}
