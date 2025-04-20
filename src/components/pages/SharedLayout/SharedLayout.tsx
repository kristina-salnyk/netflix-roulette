import React, {FC, ReactNode} from 'react'
import {Header} from '@components/elements/Header'

interface SharedLayoutProps {
    children: ReactNode;
}

export const SharedLayout: FC<SharedLayoutProps> = ({children}) => {
  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
    </>
  )
}
