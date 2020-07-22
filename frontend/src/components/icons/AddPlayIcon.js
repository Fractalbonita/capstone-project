import React from 'react'
import styled from 'styled-components'

export default () => (
  <StyledContainer>
    <StyledAddPlayIcon
      className="material-icons-round"
      alt="Add a new play">
        add
    </StyledAddPlayIcon>
  </StyledContainer>
)

const StyledAddPlayIcon = styled.span`
  color: var(--surface);
  font-size: 36px;
  font-weight: 600;
`

const StyledContainer = styled.div`
  align-items: center;
  background-color: var(--primary);
  border-radius: 50%;
  bottom: 16px;
  box-shadow: -2px -2px 5px var(--inner-shadow-light-opaque), 3px 3px 5px var(--inner-shadow-dark-opaque);
  display: flex;
  height: 56px;
  justify-content: center;
  position: fixed;
  right: 16px;
  transition: all 0.2s ease;
  width: 56px;

  &:active {
    box-shadow: inset -2px -2px 5px var(--inner-shadow-light-opaque), inset 3px 3px 5px var(--inner-shadow-dark-opaque); 
  }
`

