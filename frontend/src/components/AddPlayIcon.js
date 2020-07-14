import React from 'react'
import styled from 'styled-components'

export default ({ showForm }) => (
  <StyledContainer onClick={showForm}>
    <StyledAddPlayIcon
      title="Add a new play"
      className="material-icons-round"
    >add
    </StyledAddPlayIcon>
  </StyledContainer>
)

const StyledAddPlayIcon = styled.i`
  font-size: 36px;
  color: var(--surface);
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: var(--primary);
  box-shadow: -2px -2px 5px var(--inner-shadow-light-opaque), 3px 3px 5px var(--inner-shadow-dark-opaque);
  transition: all 0.2s ease;

  &:active {
    box-shadow: inset -2px -2px 5px var(--inner-shadow-light-opaque), inset 3px 3px 5px var(--inner-shadow-dark-opaque);  }
`

