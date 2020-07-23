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
  border-radius: 20%;
  box-shadow: -2px -2px 5px var(--inner-shadow-light-opaque), 2px 2px 5px var(--inner-shadow-dark-opaque);
  display: flex;
  height: 36px;
  justify-content: center;
  margin-bottom: 0.5rem;
  position: relative;
  top: 0;
  left: -130px;
  transition: all 0.2s ease-in-out;
  width: 36px;
  z-index: 100;

  &:active {
    box-shadow: inset -1px -1px 2px var(--inner-shadow-light-opaque), inset 1px 1px 2px var(--inner-shadow-dark-opaque);  }
`