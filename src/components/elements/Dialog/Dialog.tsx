import React, {FC, ReactNode, useState} from 'react'
import {createPortal} from 'react-dom'
import FocusTrap from 'focus-trap-react'
import {CloseIcon} from '@icons/CloseIcon'
import {DialogCloseButton, DialogStyled, DialogTitle, DialogWrapper, Overlay} from './Dialog.styled'

interface DialogProps {
    title: string
    children: ReactNode
    onClose: () => void
}

export const Dialog: FC<DialogProps> = ({title, children, onClose}) => {
  const [dialogRoot] = useState(document.getElementById('dialog-root'))

  return (
    dialogRoot && createPortal(
      <Overlay>
        <FocusTrap>
          <DialogStyled data-testid='dialog'>
            <DialogWrapper>
              <DialogCloseButton onClick={onClose} data-testid='dialog-close-button'>
                <CloseIcon/>
              </DialogCloseButton>
              <DialogTitle data-testid='dialog-title'>{title}</DialogTitle>
              {children}
            </DialogWrapper>
          </DialogStyled>
        </FocusTrap>
      </Overlay>,
      dialogRoot
    ))
}
