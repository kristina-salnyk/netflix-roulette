import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {TabButton} from '@components/elements/TabButton'

const meta = {
  title: 'TabButton',
  component: TabButton,
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
  argTypes: {},
  args: {onClick: fn()},
} satisfies Meta<typeof TabButton>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Tab',
  },
}

export const WithSelectedClass: Story = {
  args: {
    children: 'Tab',
    className: 'selected',
  },
}


