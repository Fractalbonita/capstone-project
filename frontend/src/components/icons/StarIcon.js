import React from 'react'
import styled from 'styled-components'

export default ({ isSelected = true, onClick }) => (
    <StyledStar className={
      isSelected
        ? "material-icons star-highlighted"
        : "material-icons star"
    } onClick={onClick}>
      star
    </StyledStar>
)

const StyledStar = styled.span`
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