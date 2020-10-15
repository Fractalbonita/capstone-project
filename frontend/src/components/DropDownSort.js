import React from 'react'
import styled from 'styled-components'
import { useDropDownToggle } from '../hooks/useDropDownToggle'
import PropTypes from 'prop-types'

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
        <button
          type="button"
          name="sort"
          onClick={() => (isOpen ? closeDropDown() : openDropDown())}
        >
          Sort by
        </button>
        <span>{selectedCriterion}</span>
      </div>
      {isOpen && (
        <div>
          {sortingCriteria.map(value => (
            <label key={value}>
              {value}
              <input
                type="radio"
                name="sorting"
                value={value}
                defaultChecked={value === selectedCriterion}
                onChange={() => onChange(value)}
              />
            </label>
          ))}
        </div>
      )}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`
