import React, {FC, TextareaHTMLAttributes} from 'react'
import {InputError, TextAreaLabel, TextAreaStyled, TextAreaWrapper} from './TextArea.styled'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export const TextArea: FC<TextAreaProps> = ({label, error, ...props}) => {
  return (
    <div>
      {label && <TextAreaLabel htmlFor={props.name}>{label}</TextAreaLabel>}
      <TextAreaWrapper>
        <TextAreaStyled id={props.name} {...props}></TextAreaStyled>
        {error && <InputError>{error}</InputError>}
      </TextAreaWrapper>
    </div>
  )
}
