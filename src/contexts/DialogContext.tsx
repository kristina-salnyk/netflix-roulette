import React, {createContext, ReactNode, useCallback, useContext, useMemo, useState} from 'react'
import {useDialogScroll} from '@hooks/useDialog'

interface DialogContextState {
    isOpen: boolean,
    title: string,
    component: ReactNode,
    onConfirm?: () => void
    onClose?: () => void
}

type OpenDialogParams = Omit<DialogContextState, 'isOpen'>

export interface DialogContextType extends DialogContextState {
    openDialog: (params: OpenDialogParams) => void
    closeDialog: () => void
}

const DialogContext = createContext<DialogContextType | undefined>(undefined)

export const useDialog = () => {
  const context = useContext(DialogContext)
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider')
  }
  return context
}

export const DialogProvider = ({children}: { children: ReactNode }) => {
  const [context, setContext] = useState<DialogContextState>({
    isOpen: false,
    title: '',
    component: null,
    onConfirm: undefined,
    onClose: undefined,
  })

  useDialogScroll(context.isOpen)

  const openDialog = useCallback(({title, component, onConfirm, onClose}: OpenDialogParams) => {
    setContext({
      isOpen: true,
      title,
      component,
      onConfirm,
      onClose
    })
  }, [setContext])

  const closeDialog = useCallback(() => {
    context.onClose?.()

    setContext({
      isOpen: false,
      title: '',
      component: null,
      onConfirm: undefined,
      onClose: undefined,
    })
  }, [setContext, context])

  const value = useMemo(() => ({
    isOpen: context.isOpen,
    title: context.title,
    component: context.component,
    onConfirm: context.onConfirm,
    openDialog,
    closeDialog,
  }), [context.isOpen, context.title, context.component, context.onConfirm, openDialog, closeDialog])

  return (
    <DialogContext.Provider value={value}>
      {children}
    </DialogContext.Provider>
  )
}
