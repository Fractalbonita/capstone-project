import React from 'react'
import styled from 'styled-components'

export default () => (
  <StyledContainer>
    <StyledImageUploadIcon className="material-icons">
        add_a_photo
    </StyledImageUploadIcon>
  </StyledContainer>
)

const StyledImageUploadIcon = styled.span`
  color: var(--text-color);
  left: 12px;
  position: absolute;
  top: 12px;
`

const StyledContainer = styled.div`
  align-items: center;
  background-color: var(--surface);
  border-radius: 50%;
  box-shadow: -3px -3px 7px var(--inner-shadow-light-opaque), 3px 3px 7px var(--inner-shadow-dark-opaque);
  display: flex;
  height: 48px;
  justify-content: center;
  margin: 0 auto 0.5rem;
  position: relative;
  transition: all 0.2s ease-in-out;
  width: 48px;
  z-index: 100;                   

  &:hover {
    cursor: pointer;
  }
  
  &:active {
    box-shadow: inset -1px -1px 2px var(--inner-shadow-light-opaque), inset 1px 1px 2px var(--inner-shadow-dark-opaque);  
  }
`