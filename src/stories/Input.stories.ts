import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {Input} from '@components/elements/Input'

const meta = {
  title: 'Library/Input',
  component: Input,
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
  args: {onChange: fn()},
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'search',
    placeholder: 'Type to search',
  },
}

export const WithInitials: Story = {
  args: {
    name: 'search',
    defaultValue: 'cat'
  },
}

export const WithInputType: Story = {
  args: {
    name: 'password',
    type: 'password',
    placeholder: 'Enter password',
  },
}

export const WithLabel: Story = {
  args: {
    name: 'title',
    label: 'Title',
    placeholder: 'Enter title',
  },
}


