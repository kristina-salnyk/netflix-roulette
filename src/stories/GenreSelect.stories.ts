import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {GenreSelect} from '@components/elements/GenreSelect'

const meta = {
  title: 'Library/GenreSelect',
  component: GenreSelect,
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
  argTypes: {},
  args: {onSelect: fn()},
} satisfies Meta<typeof GenreSelect>

export default meta
type Story = StoryObj<typeof meta>;

export const WithGenreList: Story = {
  args: {
    genres: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror'],
    activeGenre: 'Action',
  },
}

export const WithEmptyGenreList: Story = {
  args: {
    genres: [],
    activeGenre: '',
  },
}
