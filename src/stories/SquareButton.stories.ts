import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {SquareButton} from '@components/elements/SquareButton'

const meta = {
  title: 'SquareButton',
  component: SquareButton,
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
  argTypes: {},
  args: {onClick: fn()},
} satisfies Meta<typeof SquareButton>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: '+',
    mode: 'filled',
  },
}

export const Secondary: Story = {
  args: {
    text: '+',
    mode: 'outlined',
  },
}

export const Disabled: Story = {
  args: {
    text: '+',
    mode: 'filled',
    disabled: true,
  }
}


