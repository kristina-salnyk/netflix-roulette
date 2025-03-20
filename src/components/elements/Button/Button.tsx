import React, {FC} from 'react'
import {ButtonStyled} from './Button.styled'

export interface ButtonProps {
    text: string
    mode: 'filled' | 'outlined';
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    className?: string;
    onClick?: () => void

}

export const Button: FC<ButtonProps> = ({text, mode, onClick, type = 'button', disabled, className}) => {
  return <ButtonStyled type={type}
    mode={mode}
    disabled={disabled}
    className={className}
    onClick={onClick}>
    {text}
  </ButtonStyled>
}
