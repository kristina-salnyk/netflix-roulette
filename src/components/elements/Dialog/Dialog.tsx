import React, {FC, ReactNode} from 'react'
import {createPortal} from 'react-dom'
import FocusTrap from 'focus-trap-react'
import {CloseIcon} from '@icons/CloseIcon'
import {DialogCloseButton, DialogStyled, DialogTitle, DialogWrapper, Overlay} from './Dialog.styled'

interface DialogProps {
    title: string
    children: ReactNode
    onClose: () => void
}

const dialogRoot = document.getElementById('dialog-root')

export const Dialog: FC<DialogProps> = ({title, children, onClose}) => {
  return (
    dialogRoot && createPortal(
      <Overlay>
        <FocusTrap>
          <DialogStyled role='dialog'>
            <DialogWrapper>
              <DialogCloseButton aria-label='Close' onClick={onClose}>
                <CloseIcon/>
              </DialogCloseButton>
              <DialogTitle>{title}</DialogTitle>
              {children}
            </DialogWrapper>
          </DialogStyled>
        </FocusTrap>
      </Overlay>,
      dialogRoot
    ))
}
