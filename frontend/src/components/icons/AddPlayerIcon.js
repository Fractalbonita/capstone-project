import React from 'react'
import styled from 'styled-components'

export default ({ ...props }) => (
  <StyledContainer>
    <StyledAddPlayerIcon
      className="material-icons"
      title="Add a player"
      {...props}
    >
      person_add
    </StyledAddPlayerIcon>
  </StyledContainer>
)

const StyledAddPlayerIcon = styled.span`
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
  margin: 0.3rem;
  position: relative;
  transition: all 0.2s ease-in-out;
  width: 36px;

  &:active {
    box-shadow: inset -1px -1px 2px var(--inner-shadow-light-opaque),
      inset 1px 1px 2px var(--inner-shadow-dark-opaque);
  }
`
