import React, {ButtonHTMLAttributes, FC} from 'react'
import {ButtonStyled} from './Button.styled'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    mode: 'filled' | 'outlined';
    testId?: string
}

export const Button: FC<ButtonProps> = ({type = 'button', mode, testId, ...props}) => {
  return (
    <ButtonStyled type={type} mode={mode} data-testid={testId} {...props}>
      {props.children}
    </ButtonStyled>
  )
}
