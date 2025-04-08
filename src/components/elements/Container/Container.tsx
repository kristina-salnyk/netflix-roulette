import React, {FC} from 'react'
import {ContainerStyled} from './Container.styled'

interface ContainerProps {
    children: React.ReactNode;
}

export const Container: FC<ContainerProps> = ({children}) => {
  return (
    <ContainerStyled>
      {children}
    </ContainerStyled>
  )
}
