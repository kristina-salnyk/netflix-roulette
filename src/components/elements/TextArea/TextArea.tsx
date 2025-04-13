import React, {FC, TextareaHTMLAttributes} from 'react'
import {TextAreaLabel, TextAreaStyled} from './TextArea.styled'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    testId?: string;
}

export const TextArea: FC<TextAreaProps> = ({label, testId, ...props}) => {
  return (
    <div>
      {label && <TextAreaLabel htmlFor={props.name}>{label}</TextAreaLabel>}
      <TextAreaStyled data-testid={testId} {...props}></TextAreaStyled>
    </div>
  )
}
