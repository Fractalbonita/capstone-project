import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

StarIcon.propTypes = {
  isSelected: PropTypes.bool,
}

export default function StarIcon({ isSelected = true, ...props }) {
  console.log(isSelected)
  return (
    <StyledStar
      className={
        isSelected ? 'material-icons star-highlighted' : 'material-icons star'
      }
      {...props}
    >
      star
    </StyledStar>
  )
}

const StyledStar = styled.span`
  cursor: pointer;
  font-size: 24px;
  letter-spacing: 0.2rem;
  text-shadow: 1px 1px 2px var(--shadow);

  &.star-highlighted {
    color: var(--primary);
  }

  &.star {
    color: var(--text-color-opaque);
  }
`
