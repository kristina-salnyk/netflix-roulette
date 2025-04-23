import React, {useState} from 'react'
import {Meta, StoryFn} from '@storybook/react'
import {SelectOption} from '@type/SelectOption'
import {SortControl} from '@components/elements/SortControl'

const meta = {
  title: 'Library/SortControl',
  component: SortControl,
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof SortControl>

export default meta
type Story = StoryFn<typeof meta>;

const mockOptions: SelectOption[] = [
  {value: 'desc', label: 'Descending'},
  {value: 'asc', label: 'Ascending'},
]

export const Default: Story = () => {
  const [sortBy, setSortBy] = useState('desc')

  return (
    <SortControl
      options={mockOptions}
      sortCriterion={sortBy}
      onSelect={setSortBy}
    />
  )
}



