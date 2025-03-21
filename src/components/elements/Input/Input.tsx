import React, {FC} from 'react'
import {InputStyled} from './Input.styled'

interface InputProps {
    name: string;
    type?: string;
    defaultValue?: string;
    placeholder?: string;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({type = 'text', name, placeholder, defaultValue = '', onChange, className}) => {
  return <InputStyled name={name}
    type={type}
    placeholder={placeholder}
    defaultValue={defaultValue}
    onChange={onChange}
    className={className}/>
}
