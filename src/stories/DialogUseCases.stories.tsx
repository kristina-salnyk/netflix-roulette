import React, {ReactNode, useEffect} from 'react'
import {Meta, StoryObj} from '@storybook/react'
import {Dialog} from '@components/elements/Dialog'
import {DialogProvider, useDialog} from '@contexts/DialogContext'
import {MovieForm} from '@components/elements/MovieForm'

const meta: Meta = {
  title: 'Use Cases/DialogUseCases',
  component: Dialog,
  decorators: [
    (Story) => (
      <DialogProvider>
        <Story/>
      </DialogProvider>
    ),
  ],
}

export default meta

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

const StoryWrapper = ({children, title, component, onConfirm}: {
    children: ReactNode
    title: string
    component: React.ReactNode
    onConfirm?: () => void
}) => {
  const {openDialog, closeDialog} = useDialog()

  useEffect(() => {
    openDialog({
      title,
      component,
      onConfirm: onConfirm,
    })
  }, [title, component, onConfirm, openDialog, closeDialog])

  return (<>{children}</>)
}

export const DeleteMovie: StoryObj = {
  render: () => (
    <StoryWrapper
      title="Delete movie"
      component="Are you sure you want to delete this movie?"
      onConfirm={() => {
      }}
    >
      <Dialog/>
    </StoryWrapper>
  ),
}

export const EditMovieForm: StoryObj = {
  render: () => (
    <StoryWrapper
      title="Edit movie"
      component={<MovieForm initialMovie={mockMovie}
        onSubmit={() => {
        }}/>}
    >
      <Dialog/>
    </StoryWrapper>
  ),
}

export const AddMovieForm: StoryObj = {
  render: () => (
    <StoryWrapper
      title="Add movie"
      component={<MovieForm onSubmit={() => {
      }}/>}
    >
      <Dialog/>
    </StoryWrapper>
  ),
}
