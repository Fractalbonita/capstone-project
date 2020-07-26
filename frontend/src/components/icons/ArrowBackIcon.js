import React from 'react'
import styled from 'styled-components'

export default () => (
  <StyledContainer>
    <StyledArrow
      className="material-icons"
      alt="Back to plays">
        arrow_back
    </StyledArrow>
  </StyledContainer>
)

const StyledArrow = styled.span`
  color: var(--text-color);
  font-weight: 600;
`

const StyledContainer = styled.div`
  align-items: center;
  background-color: var(--surface);
  border-radius: 50%;
  box-shadow: -3px -3px 7px var(--inner-shadow-light-opaque), 3px 3px 7px var(--inner-shadow-dark-opaque);
  display: flex;
  height: 36px;
  justify-content: center;
  left: -140px;
  position: relative;
  top: 0;
  transition: all 0.2s ease-in-out;
  width: 36px;
  z-index: 100;

  &:active {
    box-shadow: inset -1px -1px 2px var(--inner-shadow-light-opaque), inset 1px 1px 2px var(--inner-shadow-dark-opaque);  }
`