import {Meta, StoryObj} from '@storybook/react'
import {MovieForm} from '@components/elements/MovieForm'
import {fn} from '@storybook/test'

const meta = {
  title: 'Library/MovieForm',
  component: MovieForm,
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
  args: {onMovieEdit: fn(), onMovieCreate: fn()},
} satisfies Meta<typeof MovieForm>

export default meta
type Story = StoryObj<typeof meta>;

const mockMovie = {
  id: 1,
  title: 'Inception',
  posterPath: 'https://m.media-amazon.com/images/S/pv-target-images/cc72ff2193c0f7a85322aee988d6fe1ae2cd9f8800b6ff6e8462790fe2aacaf3.jpg',
  voteAverage: 7.8,
  runtime: 210,
  releaseDate: '2020-05-01',
  overview: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
  genres: ['Action', 'Sci-Fi'],
}

export const Default: Story = {}

export const WithInitials: Story = {
  args: {
    initialMovie: mockMovie,
  },
}
