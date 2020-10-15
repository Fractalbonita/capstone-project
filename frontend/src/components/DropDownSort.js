import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { useDropDownToggle } from '../hooks/useDropDownToggle'
import Icon from '../utilities/Icon'

DropDownSort.propTypes = {
  onChange: PropTypes.func,
  sortingCriteria: PropTypes.array,
  selectedCriterion: PropTypes.string,
}

export default function DropDownSort({
  onChange,
  sortingCriteria,
  selectedCriterion,
}) {
  const [
    isOpen,
    dropDownToggle,
    openDropDown,
    closeDropDown,
  ] = useDropDownToggle()

  return (
    <Container>
      <div ref={dropDownToggle}>
        <Button
          type="button"
          name="sort"
          onClick={() => (isOpen ? closeDropDown() : openDropDown())}
          className={isOpen ? 'active' : ''}
        >
          Sort by: {selectedCriterion}
          <Icon type="expand_more" aria-hidden={true} />
        </Button>
      </div>
      {isOpen && (
        <OptionsContainer>
          {sortingCriteria.map(value => (
            <label key={value} onClick={() => onChange(value)}>
              {value}
              <input
                type="radio"
                name="sorting"
                value={value}
                defaultChecked={value === selectedCriterion}
                onChange={() => onChange(value)}
              />
              {value === selectedCriterion && <Icon type="check" />}
            </label>
          ))}
        </OptionsContainer>
      )}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`

const Button = styled.button`
  align-items: center;
  background-color: var(--surface);
  border: none;
  border-radius: 20px;
  box-shadow: -3px -3px 7px #fff, 3px 3px 7px var(--inner-shadow-dark-opaque);
  color: var(--text-color);
  cursor: pointer;
  display: flex;
  font-family: var(--button-font);
  font-size: 14px;
  font-weight: bold;
  height: 36px;
  justify-content: flex-start;
  letter-spacing: 0.1rem;
  outline: none;
  padding: 0 12px 0 16px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--surface);
    color: var(--primary);
  }

  &.active {
    box-shadow: inset -3px -3px 4px #fff,
      inset 2px 2px 3px var(--inner-shadow-dark);
    color: var(--text-color);
  }

  span {
    font-size: 18px;
    margin-left: 8px;
    transform-origin: center;
    transition: all 0.2s;
  }

  &.active span {
    transform: rotate(-180deg);
  }
`

const OptionsContainer = styled.div`
  background-color: var(--surface);
  border-radius: 20px;
  box-shadow: -3px -3px 7px #fff, 3px 3px 7px var(--inner-shadow-dark-opaque);
  margin: 10px 0;
  position: absolute;
  width: 205px;

  label {
    color: var(--text-color);
    display: flex;
    font-family: var(--button-font);
    font-size: 14px;
    font-weight: bold;
    justify-content: space-between;
    padding: 8px 16px;

    &:hover {
      color: var(--primary);
      cursor: pointer;
    }

    input {
      -webkit-appearance: none;
      appearance: none;
    }

    span {
      color: var(--primary);
      font-size: 18px;
    }
  }
`
