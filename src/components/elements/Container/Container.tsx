import React, {FC, ReactNode} from 'react'
import {ContainerStyled} from './Container.styled'

interface ContainerProps {
    children: ReactNode;
}

export const Container: FC<ContainerProps> = ({children}) => {
  return (
    <ContainerStyled>
      {children}
    </ContainerStyled>
  )
}
