import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {TextArea} from '@components/elements/TextArea'

const meta = {
  title: 'TextArea',
  component: TextArea,
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
  argTypes: {},
  args: {onChange: fn()},
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'description',
    placeholder: 'Enter description',
  },
}

export const WithInitials: Story = {
  args: {
    name: 'description',
    defaultValue: 'The quick brown fox jumps over the lazy dog',
  },
}

export const WithLabel: Story = {
  args: {
    name: 'description',
    label: 'Description',
    placeholder: 'Enter description',
  },
}


