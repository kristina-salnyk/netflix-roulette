import React, {FC, InputHTMLAttributes, useRef} from 'react'
import {CalendarIcon} from '@icons/CalerdarIcon'
import {InputButton, InputError, InputLabel, InputStyled, InputWrapper} from './Input.styled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string;
    ref?: (element: HTMLInputElement | null) => void;
}

export const Input: FC<InputProps> = ({type = 'text', label, error, ref, ...props}) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleButtonClick = () => {
    inputRef.current?.showPicker()
  }

  return (
    <div>
      {label && <InputLabel htmlFor={props.name}>{label}</InputLabel>}
      <InputWrapper>
        <InputStyled id={props.name}
          type={type}
          ref={(element) => {
            inputRef.current = element
            ref?.(element)
          }}
          {...props}/>
        {type === 'date' && <InputButton onClick={handleButtonClick}>
          <CalendarIcon/>
        </InputButton>}
        {error && <InputError>{error}</InputError>}
      </InputWrapper>
    </div>
  )
}
