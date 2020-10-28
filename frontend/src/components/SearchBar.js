import React from 'react'
import Input from './inputs/Input'
import Icon from '../utilities/Icon'
import styled from 'styled-components'

export default function SearchBar({ value, onQuery }) {
  return (
    <>
      <StyledLabel>
        <Icon type="search" />
        <Input
          name="search"
          type="search"
          value={value}
          onChange={onQuery}
          aria-label="Search through the game collection"
          placeholder="Game title"
        />
      </StyledLabel>
    </>
  )
}

const StyledLabel = styled.label`
  span {
    color: var(--text-color-opaque);
    font-size: 18px;
    left: 10px;
    position: relative;
    top: 33px;
  }

  input {
    padding-left: 35px;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }
`
