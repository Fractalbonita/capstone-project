import React from 'react'
import styled from 'styled-components'

export default ({ ...props }) => (
  <StyledContainer>
    <StyledAddAdditionalPlayerIcon
      className="material-icons-round"
      alt="Add a player"
      {...props}>
        add
    </StyledAddAdditionalPlayerIcon>
  </StyledContainer>
)

const StyledAddAdditionalPlayerIcon = styled.span`
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
  margin: 0.3rem;
  position: relative;
  transition: all 0.2s ease-in-out;
  width: 36px;
  z-index: 100;

  &:active {
    box-shadow: inset -1px -1px 2px var(--inner-shadow-light-opaque), inset 1px 1px 2px var(--inner-shadow-dark-opaque);  }
`