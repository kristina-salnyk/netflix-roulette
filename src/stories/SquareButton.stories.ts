import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {SquareButton} from '@components/elements/SquareButton'

const meta = {
  title: 'Library/SquareButton',
  component: SquareButton,
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
  args: {onClick: fn()},
} satisfies Meta<typeof SquareButton>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '+',
    mode: 'filled',
  },
}

export const Secondary: Story = {
  args: {
    children: '+',
    mode: 'outlined',
  },
}

export const Disabled: Story = {
  args: {
    children: '+',
    mode: 'filled',
    disabled: true,
  }
}


