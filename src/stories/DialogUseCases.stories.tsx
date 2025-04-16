import React, {useState} from 'react'
import {Meta, StoryObj} from '@storybook/react'
import {Dialog} from '@components/elements/Dialog'
import {MovieForm} from '@components/elements/MovieForm'
import {DialogButton, DialogTextContent} from '@components/elements/MovieList/MovieList.styled'

const meta: Meta = {
  title: 'Use Cases/DialogUseCases',
  component: Dialog,
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

const StoryWrapper = ({children}: { children: (open: boolean, setOpen: (v: boolean) => void) => React.ReactNode }) => {
  const [open, setOpen] = useState(true)

  return (
    <>
      <div id="dialog-root"/>
      {children(open, setOpen)}
    </>
  )
}

export const AddMovie: StoryObj = {
  render: () => (
    <StoryWrapper>
      {(open, setOpen) =>
        open && (
          <Dialog title="Add Movie" onClose={() => setOpen(false)}>
            <MovieForm onSubmit={() => setOpen(false)}/>
          </Dialog>
        )
      }
    </StoryWrapper>
  ),
}

export const EditMovie: StoryObj = {
  render: () => {
    return (
      <StoryWrapper>
        {(open, setOpen) =>
          open && (
            <Dialog title="Edit Movie" onClose={() => setOpen(false)}>
              <MovieForm initialMovie={mockMovie}
                onSubmit={() => setOpen(false)}/>
            </Dialog>
          )
        }
      </StoryWrapper>
    )
  },
}

export const DeleteMovie: StoryObj = {
  render: () => (
    <StoryWrapper>
      {(open, setOpen) =>
        open && (
          <Dialog title="Delete Movie" onClose={() => setOpen(false)}>
            <DialogTextContent>Are you sure you want to delete this movie?</DialogTextContent>
            <DialogButton mode='filled'
              onClick={() => setOpen(false)}>Confirm</DialogButton>
          </Dialog>
        )
      }
    </StoryWrapper>
  ),
}
