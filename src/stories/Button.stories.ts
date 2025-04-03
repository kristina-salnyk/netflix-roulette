import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {Button} from '@components/elements/Button'

const meta = {
  title: 'Button',
  component: Button,
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
  argTypes: {},
  args: {onClick: fn()},
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Primary',
    mode: 'filled',
  },
}

export const Secondary: Story = {
  args: {
    text: 'Secondary',
    mode: 'outlined',
  },
}

export const Disabled: Story = {
  args: {
    text: 'Disabled',
    mode: 'filled',
    disabled: true,
  }
}


