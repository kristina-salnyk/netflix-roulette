import type {Meta, StoryObj} from '@storybook/react'
import {Counter} from '@components/elements/Counter'

const meta = {
  title: 'Library/Counter',
  component: Counter,
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
} satisfies Meta<typeof Counter>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {}

export const WithInitials: Story = {
  args: {
    initialCount: 5
  },
}


