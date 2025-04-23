import React, {useEffect, useState} from 'react'

export const useSelect = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | KeyboardEvent) => {
      if (event instanceof MouseEvent) {
        setIsOpen(false)
      } else if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('keydown', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
      document.removeEventListener('keydown', handleOutsideClick)
    }
  }, [])

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setIsOpen(prev => !prev)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return {isOpen, handleClose, handleToggle}
}
