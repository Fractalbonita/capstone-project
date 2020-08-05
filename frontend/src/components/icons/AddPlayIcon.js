import React from 'react'
import styled from 'styled-components'

export default () => (
  <StyledContainer>
    <StyledAddPlayIcon
      className="material-icons-round"
      title="Add a new play">
        add
    </StyledAddPlayIcon>
  </StyledContainer>
)

const StyledAddPlayIcon = styled.span`
  color: var(--surface);
  cursor: pointer;
  font-size: 36px;
  font-weight: 600;
`

const StyledContainer = styled.div`
  align-items: center;
  background-color: var(--primary);
  border-radius: 50%;
  bottom: 16px;
  box-shadow: -3px -3px 7px var(--inner-shadow-light-opaque), 3px 3px 7px var(--inner-shadow-dark-opaque);
  display: flex;
  height: 56px;
  justify-content: center;
  position: fixed;
  right: 16px;
  transition: all 0.2s ease-in-out;
  width: 56px;

  &:active {
    box-shadow: inset -1px -1px 2px var(--inner-shadow-light-opaque), inset 1px 1px 2px var(--inner-shadow-dark-opaque); 
  }
`