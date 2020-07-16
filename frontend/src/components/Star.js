import React from 'react'
import styled from 'styled-components'

export default ({ isSelected = true, onClick }) => (
  <StyledStar title="Star" className={
      isSelected
        ? "material-icons star-highlighted"
        : "material-icons star"
    } onClick={onClick}
    >star
  </StyledStar>
)

const StyledStar = styled.i`
  font-size: 24px;
  letter-spacing: 0.2rem;
  text-shadow: 2px 2px 3px var(--shadow);
  
  &.star-highlighted {
    color: var(--primary);
  }

  &.star {
    color: var(--text-color-opaque);
  }
`