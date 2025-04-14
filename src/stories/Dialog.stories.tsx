import React, {useState} from 'react'
import {Meta, StoryFn} from '@storybook/react'
import {Dialog} from '@components/elements/Dialog'
import {Button} from '@components/elements/Button'
import {DialogButton, DialogTextContent} from '@components/elements/MovieList/MovieList.styled'
import {MovieForm} from '@components/elements/MovieForm'

const meta = {
  title: 'Dialog',
  component: Dialog,
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryFn<typeof meta>;

const mockMovie =
    {
      id: '1',
      title: 'Inception',
      releaseDate: '2020-05-01',
      imageUrl: 'https://m.media-amazon.com/images/S/pv-target-images/cc72ff2193c0f7a85322aee988d6fe1ae2cd9f8800b6ff6e8462790fe2aacaf3.jpg',
      genres: ['Action', 'Sci-Fi'],
      rating: 7.8,
      duration: 210,
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
    }

export const ConfirmDialog: Story = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }
  const handleOpen = () => {
    setIsOpen(true)
  }

  return (
    <>
      {isOpen ?
        <Dialog title={'Delete movie'} onClose={handleClose}>
          <DialogTextContent>Are you sure you want to delete this movie?</DialogTextContent>
          <DialogButton mode='filled' onClick={handleClose}>Confirm</DialogButton>
        </Dialog> :
        <Button onClick={handleOpen} mode='filled'>Open Dialog</Button>}
    </>
  )
}

export const DialogWithForm: Story = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }
  const handleOpen = () => {
    setIsOpen(true)
  }

  return (
    <>
      {isOpen ?
        <Dialog title={'Edit movie'} onClose={handleClose}>
          <MovieForm onSubmit={handleClose} initialMovie={mockMovie}/>
        </Dialog> :
        <Button onClick={handleOpen} mode='filled'>Open Dialog</Button>}
    </>
  )
}
