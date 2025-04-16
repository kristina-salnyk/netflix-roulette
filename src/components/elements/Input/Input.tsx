import React, {FC, InputHTMLAttributes, useRef} from 'react'
import {CalendarIcon} from '@icons/CalerdarIcon'
import {InputButton, InputLabel, InputStyled, InputWrapper} from './Input.styled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

export const Input: FC<InputProps> = ({type = 'text', label, ...props}) => {
  const ref = useRef<HTMLInputElement>(null)

  const handleButtonClick = () => {
    if (!ref.current) {
      return
    }

    if (ref.current.showPicker) {
      ref.current.showPicker()
    } else {
      ref.current.blur()
    }
  }

  return (
    <div>
      {label && <InputLabel htmlFor={props.name}>{label}</InputLabel>}
      <InputWrapper>
        <InputStyled id={props.name} ref={ref} type={type} {...props}/>
        {type === 'date' && <InputButton onClick={handleButtonClick}>
          <CalendarIcon/>
        </InputButton>}
      </InputWrapper>
    </div>
  )
}
