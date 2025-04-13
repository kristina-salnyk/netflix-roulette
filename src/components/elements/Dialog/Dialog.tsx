import React, {FC, ReactNode} from 'react'
import {createPortal} from 'react-dom'
import FocusTrap from 'focus-trap-react'
import {CloseIcon} from '@icons/CloseIcon'
import {DialogCloseButton, DialogContent, DialogStyled, DialogTitle, Overlay} from './Dialog.styled'

const dialogRoot = document.getElementById('dialog-root')

interface DialogProps {
    title: string
    children: ReactNode
    onClose: () => void
}

export const Dialog: FC<DialogProps> = ({title, children, onClose}) => {
  return (
    dialogRoot && createPortal(
      <Overlay>
        <FocusTrap>
          <DialogStyled>
            <DialogContent>
              <DialogCloseButton onClick={onClose}>
                <CloseIcon/>
              </DialogCloseButton>
              <DialogTitle>{title}</DialogTitle>
              {children}
            </DialogContent>
          </DialogStyled>
        </FocusTrap>
      </Overlay>,
      dialogRoot
    ))
}
