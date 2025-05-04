import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {withRouter} from 'storybook-addon-remix-react-router'
import {MovieTile} from '@components/elements/MovieTile'

const meta = {
  title: 'Library/MovieTile',
  component: MovieTile,
  parameters: {layout: 'centered'},
  decorators: [withRouter],
  tags: ['autodocs'],
  args: {
    onEditClick: fn(),
    onDeleteClick: fn()
  }
} satisfies Meta<typeof MovieTile>

export default meta
type Story = StoryObj<typeof meta>;

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


export const Default: Story = {
  args: {
    movie: mockMovie
  },
}

export const WithUnavailableImage: Story = {
  args: {
    movie: {
      ...mockMovie,
      imageUrl: 'https://example.com/invalid-image.jpg'
    },
  },
}


