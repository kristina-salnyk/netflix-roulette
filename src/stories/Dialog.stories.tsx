import React from 'react'
import {Meta, StoryFn} from '@storybook/react'
import {DialogProvider, useDialog} from '@contexts/DialogContext'
import {Dialog} from '@components/elements/Dialog'
import {Button} from '@components/elements/Button'
import {Input} from '@components/elements/Input'

const meta = {
  title: 'Library/Dialog',
  component: Dialog,
  parameters: {layout: 'centered'},
  decorators: [
    (Story) => (
      <DialogProvider>
        <Story/>
      </DialogProvider>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryFn<typeof meta>;

export const ConfirmDialog: Story = () => {
  const {isOpen, openDialog, closeDialog} = useDialog()

  const handleOpen = () => {
    openDialog({
      title: 'Confirm your action',
      component: 'Are you sure you want to proceed?',
      onConfirm: closeDialog,
    })
  }

  return (
    <>
      <Dialog/>
      {!isOpen && <Button onClick={handleOpen} mode='filled'>Open Dialog</Button>}
    </>
  )
}

export const DialogWithForm: Story = () => {
  const {isOpen, openDialog, closeDialog} = useDialog()

  const handleOpen = () => {
    openDialog({
      title: 'Subscribe to our newsletter',
      component: <>
        <Input name='email' placeholder='Email'/>
        <Button mode='filled' onClick={closeDialog} style={{marginTop: 24, float: 'right'}}>Subscribe</Button>
      </>
    })
  }

  return (
    <>
      <Dialog/>
      {!isOpen && <Button onClick={handleOpen} mode='filled'>Open Dialog</Button>}
    </>
  )
}
