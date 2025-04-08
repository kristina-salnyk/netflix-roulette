import React, {createElement} from 'react'
import {SquareButton} from '@components/elements/SquareButton'
import {CounterStyled} from './Counter.styled'


interface CounterProps {
    initialCount?: number;
}

interface CounterState {
    count: number;
}

export class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props)
    this.state = {
      count: props.initialCount || 0,
    }
  }

  handleIncrement = () => {
    this.setState((prevState) => ({count: prevState.count + 1}))
  }

  handleDecrement = () => {
    this.setState((prevState) => ({count: prevState.count - 1}))
  }


  render() {
    const {count} = this.state
    const isDisabled = count === 0


    return createElement(
      CounterStyled,
      null,
      createElement(SquareButton, {
        text: '–',
        mode: 'outlined',
        disabled: isDisabled,
        onClick: this.handleDecrement,
        testId: 'decrement-button'
      }),
      createElement('span', {'data-testid': 'count-value'}, count),
      createElement(SquareButton, {
        text: '+',
        mode: 'filled',
        onClick: this.handleIncrement,
        testId: 'increment-button'
      })
    )
  }
}
