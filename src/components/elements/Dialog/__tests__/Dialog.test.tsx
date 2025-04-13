import React, {ReactNode} from 'react'
import {screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {renderWithThemeProvider} from '@utils/renderWithThemeProvider'
import {Dialog} from '@components/elements/Dialog'

jest.mock('react-dom', () => {
  return {
    ...jest.requireActual('react-dom'),
    createPortal: (element: ReactNode) => element,
  }
})

jest.mock('focus-trap-react', () => ({
  __esModule: true,
  default: ({children}: { children: ReactNode }) => <>{children}</>,
}))

describe('Dialog', () => {
  beforeAll(() => {
    const dialogRoot = document.createElement('div')
    dialogRoot.setAttribute('id', 'dialog-root')
    document.body.appendChild(dialogRoot)
  })

  it('should render component', async () => {
    renderWithThemeProvider(Dialog, {
      title: 'Dialog Title',
      onClose: jest.fn(),
      children: <div>Dialog Content </div>
    })

    expect(screen.getByTestId('dialog')).toBeInTheDocument()
  })

  it('should render dialog title', () => {
    renderWithThemeProvider(Dialog, {
      title: 'Dialog Title',
      onClose: jest.fn(),
      children: <div>Dialog Content</div>,
    })

    const dialogTitle = screen.getByTestId('dialog-title')
    expect(dialogTitle).toBeInTheDocument()
    expect(dialogTitle).toHaveTextContent(/Dialog Title/i)
  })

  it('should render dialog content', () => {
    renderWithThemeProvider(Dialog, {
      title: 'Dialog Title',
      onClose: jest.fn(),
      children: <div data-testid='dialog-content'>Dialog Content</div>,
    })

    const dialogContent = screen.getByTestId('dialog-content')
    expect(dialogContent).toBeInTheDocument()
    expect(dialogContent).toHaveTextContent(/Dialog Content/i)
  })

  it('should call onClose when close button is clicked', () => {
    const onCloseMock = jest.fn()
    renderWithThemeProvider(Dialog, {
      title: 'Dialog Title',
      onClose: onCloseMock,
      children: <div>Dialog Content</div>,
    })

    const closeButton = screen.getByTestId('dialog-close-button')
    userEvent.click(closeButton)

    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })
})
