import React, {FC, InputHTMLAttributes, useRef} from 'react'
import {CalendarIcon} from '@icons/CalerdarIcon'
import {InputButton, InputLabel, InputStyled, InputWrapper} from './Input.styled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    testId?: string
}

export const Input: FC<InputProps> = ({type = 'text', label, testId, ...props}) => {
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
        <InputStyled ref={ref} type={type} data-testid={testId} {...props}/>
        {type === 'date' && <InputButton onClick={handleButtonClick}>
          <CalendarIcon/>
        </InputButton>}
      </InputWrapper>
    </div>
  )
}
