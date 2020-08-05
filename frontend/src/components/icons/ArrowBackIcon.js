import React from 'react'
import styled from 'styled-components'

export default () => (
  <StyledContainer>
    <StyledArrow
      className="material-icons"
      title="Back to plays">
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
  cursor: pointer;
  display: flex;
  height: 36px;
  justify-content: center;
  left: calc(10px + 4vw);
  position: fixed;
  top: 16px;
  transition: all 0.2s ease-in-out;
  width: 36px;

  &:active {
    box-shadow: inset -1px -1px 2px var(--inner-shadow-light-opaque), inset 1px 1px 2px var(--inner-shadow-dark-opaque);  
  }
`