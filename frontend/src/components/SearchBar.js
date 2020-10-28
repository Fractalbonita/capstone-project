import React from 'react'
import Input from './inputs/Input'
import Icon from '../utilities/Icon'
import styled from 'styled-components'
import PropTypes from 'prop-types'

SearchBar.propTypes = {
  value: PropTypes.string,
  onQuery: PropTypes.func,
  enableClearing: PropTypes.bool,
}

export default function SearchBar({ value, onQuery, onClear, enableClearing }) {
  return (
    <Container>
      <Label>
        <Icon type="search" />
        <Input
          name="search"
          type="search"
          value={value}
          onChange={onQuery}
          aria-label="Search through the game collection"
          placeholder="Game title"
        />
      </Label>
      {enableClearing && <Icon type="clear" onClick={onClear} />}
    </Container>
  )
}

const Container = styled.div`
  position: relative;

  span {
    color: var(--text-color-opaque);
    cursor: pointer;
    font-size: 24px;
    position: absolute;
    right: 10px;
    top: 30px;
  }
`

const Label = styled.label`
  span {
    color: var(--text-color-opaque);
    font-size: 18px;
    left: 10px;
    position: relative;
    top: 33px;
  }

  input {
    padding-left: 35px;
    padding-right: 35px;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }
`
