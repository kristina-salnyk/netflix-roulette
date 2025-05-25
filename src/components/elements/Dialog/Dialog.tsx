import React from 'react'
import {createPortal} from 'react-dom'
import FocusTrap from 'focus-trap-react'
import {CloseIcon} from '@icons/CloseIcon'
import {useDialog} from '@contexts/DialogContext'
import {
  DialogCloseButton,
  DialogControls,
  DialogStyled,
  DialogTextContent,
  DialogTitle,
  DialogWrapper,
  Overlay
} from './Dialog.styled'
import {Button} from '@components/elements/Button'

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
              <DialogControls>
                {onConfirm && <Button mode='filled' onClick={onConfirm}>Confirm</Button>}
              </DialogControls>
            </DialogWrapper>
          </DialogStyled>
        </FocusTrap>
      </Overlay>,
      dialogRoot
    ))
}
