import React, {ReactNode} from 'react'
import {screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {renderWithThemeProvider} from '@utils/renderWithThemeProvider'
import {useDialog} from '@contexts/DialogContext'

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

jest.mock('@contexts/DialogContext')
const useDialogMock = useDialog as jest.MockedFunction<typeof useDialog>

describe('Dialog', () => {
  const openDialogMock = jest.fn()
  const closeDialogMock = jest.fn()
  const onConfirmMock = jest.fn()

  const mockContext = {
    isOpen: true,
    title: 'Dialog Title',
    component: 'Dialog Content',
    openDialog: openDialogMock,
    closeDialog: closeDialogMock,
    onConfirm: onConfirmMock,
  }

  beforeEach(() => {
    useDialogMock.mockReturnValue(mockContext)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render component', async () => {
    renderWithThemeProvider(Dialog)

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('should render dialog title', () => {
    renderWithThemeProvider(Dialog)

    const dialogTitle = screen.getByRole('heading', {name: /Dialog Title/i})
    expect(dialogTitle).toBeInTheDocument()
  })

  it('should render dialog content', () => {
    renderWithThemeProvider(Dialog)

    const dialogContent = screen.getByText(/Dialog Content/i)
    expect(dialogContent).toBeInTheDocument()
  })

  it('should call onClose when close button is clicked', () => {
    renderWithThemeProvider(Dialog)

    const closeButton = screen.getByRole('button', {name: /Close/i})
    userEvent.click(closeButton)

    expect(closeDialogMock).toHaveBeenCalledTimes(1)
  })

  it('should call onConfirm when confirm button is clicked', () => {
    renderWithThemeProvider(Dialog)

    const confirmButton = screen.getByRole('button', {name: /Confirm/i})
    userEvent.click(confirmButton)

    expect(onConfirmMock).toHaveBeenCalledTimes(1)
  })
})
