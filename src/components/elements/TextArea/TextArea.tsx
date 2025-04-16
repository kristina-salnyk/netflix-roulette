import React, {FC, TextareaHTMLAttributes} from 'react'
import {TextAreaLabel, TextAreaStyled} from './TextArea.styled'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

export const TextArea: FC<TextAreaProps> = ({label, ...props}) => {
  return (
    <div>
      {label && <TextAreaLabel htmlFor={props.name}>{label}</TextAreaLabel>}
      <TextAreaStyled id={props.name} {...props}></TextAreaStyled>
    </div>
  )
}
