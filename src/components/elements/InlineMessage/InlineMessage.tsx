import React, {FC} from 'react'
import {InlineMessageStyled, InlineMessageText} from './InlineMessage.styled'

interface InlineMessageProps {
    text: string
}

export const InlineMessage: FC<InlineMessageProps> = ({text}) => {
  return (
    <InlineMessageStyled role="alert">
      <InlineMessageText>{text}</InlineMessageText>
    </InlineMessageStyled>
  )
}
