import React, {FC, ReactNode} from 'react'
import {Header} from '@components/elements/Header'
import {Dialog} from '@components/elements/Dialog'

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
      <Dialog/>
    </>
  )
}
