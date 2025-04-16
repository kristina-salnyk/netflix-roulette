import React, {ReactNode} from 'react'
import {screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {renderWithThemeProvider} from '@utils/renderWithThemeProvider'

const dialogRoot = document.createElement('div')
dialogRoot.setAttribute('id', 'dialog-root')
document.body.appendChild(dialogRoot)

// eslint-disable-next-line @typescript-eslint/no-require-imports
const Dialog = require('@components/elements/Dialog').Dialog

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
  it('should render component', async () => {
    renderWithThemeProvider(Dialog, {
      title: 'Dialog Title',
      onClose: jest.fn(),
      children: <div>Dialog Content </div>
    })

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('should render dialog title', () => {
    renderWithThemeProvider(Dialog, {
      title: 'Dialog Title',
      onClose: jest.fn(),
      children: <div>Dialog Content</div>,
    })

    const dialogTitle = screen.getByRole('heading', {name: /Dialog Title/i})
    expect(dialogTitle).toBeInTheDocument()
  })

  it('should render dialog content', () => {
    renderWithThemeProvider(Dialog, {
      title: 'Dialog Title',
      onClose: jest.fn(),
      children: <div>Dialog Content</div>,
    })

    const dialogContent = screen.getByText(/Dialog Content/i)
    expect(dialogContent).toBeInTheDocument()
  })

  it('should call onClose when close button is clicked', () => {
    const onCloseMock = jest.fn()
    renderWithThemeProvider(Dialog, {
      title: 'Dialog Title',
      onClose: onCloseMock,
      children: <div>Dialog Content</div>,
    })

    const closeButton = screen.getByRole('button', {name: /Close/i})
    userEvent.click(closeButton)

    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })
})
