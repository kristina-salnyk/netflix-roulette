import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {SearchForm} from '@components/elements/SearchForm'

const meta = {
  title: 'Library/SearchForm',
  component: SearchForm,
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
  args: {onSearch: fn()},
} satisfies Meta<typeof SearchForm>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {}

export const WithInitials: Story = {
  args: {
    initialQuery: 'cat'
  },
}
