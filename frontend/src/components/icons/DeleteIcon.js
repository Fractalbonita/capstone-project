import React from 'react'
import styled from 'styled-components'

export default props => (
  <StyledContainer>
    <StyledDeleteIcon className="material-icons" title="Delete" {...props}>
      delete_outline
    </StyledDeleteIcon>
  </StyledContainer>
)

const StyledDeleteIcon = styled.span`
  color: var(--text-color);
`

const StyledContainer = styled.div`
  align-items: center;
  background-color: var(--surface);
  border-radius: 50%;
  box-shadow: -3px -3px 7px var(--inner-shadow-light-opaque),
    3px 3px 7px var(--inner-shadow-dark-opaque);
  cursor: pointer;
  display: flex;
  height: 36px;
  justify-content: center;
  position: fixed;
  right: calc(70px + 4vw);
  top: 16px;
  transition: all 0.2s ease-in-out;
  width: 36px;

  &:active {
    box-shadow: inset -1px -1px 2px var(--inner-shadow-light-opaque),
      inset 1px 1px 2px var(--inner-shadow-dark-opaque);
  }
`
