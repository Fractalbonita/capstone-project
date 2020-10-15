import { useEffect, useRef, useState } from 'react'

export function useDropDownToggle() {
  const [isOpen, setOpen] = useState(false)
  const dropDownToggle = useRef()

  useEffect(() => {
    document.addEventListener('click', closeDropDown)
    return () => document.removeEventListener('click', closeDropDown)
  }, [])

  function openDropDown() {
    setOpen(true)
  }

  function closeDropDown(event) {
    if (
      event &&
      dropDownToggle.current &&
      dropDownToggle.current.contains(event.target)
    ) {
      return
    }
    setOpen(false)
  }

  return [isOpen, dropDownToggle, openDropDown, closeDropDown]
}
