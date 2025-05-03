import React, {Suspense} from 'react'
import {Outlet} from 'react-router'
import {Header} from '@components/elements/Header'
import {Dialog} from '@components/elements/Dialog'
import {Loader} from '@components/elements/Loader'

export const SharedLayout = () => {
  return (
    <>
      <Header/>
      <main>
        <Suspense fallback={<Loader/>}>
          <Outlet/>
        </Suspense>
      </main>
      <Dialog/>
    </>
  )
}
