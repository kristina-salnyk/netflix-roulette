import React, {Suspense} from 'react'
import {Outlet} from 'react-router'
import {Header} from '@components/elements/Header'
import {Dialog} from '@components/elements/Dialog'
import {Loader} from '@components/elements/Loader'
import {Bounce, ToastContainer} from 'react-toastify'

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        draggable
        theme="dark"
        transition={Bounce}
      />
    </>
  )
}
