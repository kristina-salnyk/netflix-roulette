import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {Button} from '@components/elements/Button'

const meta = {
  title: 'Library/Button',
  component: Button,
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
  args: {onClick: fn()},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    mode: 'filled',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    mode: 'outlined',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    mode: 'filled',
    disabled: true,
  }
}


