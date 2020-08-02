import React, { useState } from 'react'
import styled from 'styled-components'

export default ({ value, onChange }) => {
  const [currentValue, setCurrentValue] = useState(value)

  return (
    <StyledInput
      value={currentValue}
      onChange={({ target }) => {
        setCurrentValue(target.value)
        onChange(target.value)
      }}
    />
  )
}

const StyledInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: var(--surface);
  border: none;
  border-radius: 12px;
  box-shadow: inset 3px 3px 7px var(--inner-shadow-dark), inset -4px -4px 10px var(--inner-shadow-light);
  color: var(--text-color-opaque);
  font-family: var(--body-font);
  font-size: 16px;
  font-weight: bold;
  outline: none;
  padding: 10px 12px;
  transition: all 0.2s ease-in-out;

  &:hover {
  cursor: text;
  }

  &:focus {
  box-shadow: inset 1px 1px 2px var(--inner-shadow-dark), inset -1px -1px 2px #fff;
  outline: none;
  }

  &:-moz-focusring {
    box-shadow: inset 1px 1px 2px var(--inner-shadow-dark), inset -1px -1px 2px #fff;
    outline: none;
  }
`