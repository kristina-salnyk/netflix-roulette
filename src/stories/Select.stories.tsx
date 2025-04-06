import React, {useState} from 'react'
import {Meta, StoryFn} from '@storybook/react'
import {Select} from '@components/elements/Select'
import {SelectOption} from '@type/SelectOption'

const meta = {
  title: 'Select',
  component: Select,
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Select>

export default meta
type Story = StoryFn<typeof meta>;

const mockOptions: SelectOption[] = [
  {value: 'foo', label: 'Foo'},
  {value: 'bar', label: 'Bar'},
  {value: 'all', label: 'All'},
]

export const Default: Story = () => {
  const [selectedValue, setSelectedValue] = useState('foo')

  return (
    <Select
      options={mockOptions}
      selectedValue={selectedValue}
      onSelect={setSelectedValue}
    />
  )
}


