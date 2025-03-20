import React, {FC} from 'react'
import {ButtonStyled} from './Button.styled'

export interface ButtonProps {
    text: string
    mode: 'filled' | 'outlined';
    onClick: () => void
    disabled?: boolean
    className?: string;

}

export const Button: FC<ButtonProps> = ({text, mode, onClick, disabled, className}) => {
  return <ButtonStyled type='button'
    mode={mode}
    onClick={onClick}
    disabled={disabled}
    className={className}>{text}</ButtonStyled>
}
