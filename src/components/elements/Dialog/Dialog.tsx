import React from 'react'
import {createPortal} from 'react-dom'
import FocusTrap from 'focus-trap-react'
import {CloseIcon} from '@icons/CloseIcon'
import {useDialog} from '@contexts/DialogContext'
import {
  ButtonStyled,
  DialogCloseButton,
  DialogStyled,
  DialogTextContent,
  DialogTitle,
  DialogWrapper,
  Overlay
} from './Dialog.styled'

const dialogRoot = document.getElementById('dialog-root')

export const Dialog = () => {
  const {isOpen, title, component, onConfirm, closeDialog} = useDialog()

  if (!isOpen) return null

  return (
    dialogRoot && createPortal(
      <Overlay>
        <FocusTrap>
          <DialogStyled role='dialog'>
            <DialogWrapper>
              <DialogCloseButton aria-label='Close' onClick={closeDialog}>
                <CloseIcon/>
              </DialogCloseButton>
              <DialogTitle>{title}</DialogTitle>
              {typeof component === 'string' ? (
                <DialogTextContent>{component}</DialogTextContent>) : component}
              {onConfirm && <ButtonStyled mode='filled' onClick={onConfirm}>Confirm</ButtonStyled>}
            </DialogWrapper>
          </DialogStyled>
        </FocusTrap>
      </Overlay>,
      dialogRoot
    ))
}
