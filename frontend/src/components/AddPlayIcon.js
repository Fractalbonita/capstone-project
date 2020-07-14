import React from 'react'
import styled from 'styled-components'

export default ({ name }) => (
  <StyledContainer>
    <StyledAddPlayIcon name={name}
      title="Add a new play"
      className="material-icons-round"
    >add
    </StyledAddPlayIcon>
  </StyledContainer>
)

const StyledAddPlayIcon = styled.i`
  display: flex;
  justify-content: center;
  align-content: center;
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 48px;
  color: var(--surface);
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  margin-bottom: 0.5rem;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: var(--primary);
  box-shadow: -2px -2px 5px var(--inner-shadow-light-opaque), 3px 3px 5px var(--inner-shadow-dark-opaque);
  transition: all 0.2s ease;

  &:active {
    box-shadow: inset -2px -2px 5px var(--inner-shadow-light-opaque), inset 3px 3px 5px var(--inner-shadow-dark-opaque);  }
`

