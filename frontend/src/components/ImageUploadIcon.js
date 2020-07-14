import React from 'react'
import styled from 'styled-components'

import ic_add_a_photo_24px from '../assets/ic_add_a_photo_24px.svg'

export default ({ name }) => (
  <StyledContainer>
    <StyledImageUploadIcon name={name}
      title="Add a photo"
      className="ic_add_a_photo_24px"
      src={ic_add_a_photo_24px}
      alt="Add photo icon"
    />
  </StyledContainer>
)

const StyledImageUploadIcon = styled.img`
  position: absolute;
  top: 12px;
  left: 12px;
`

const StyledContainer = styled.div`
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 0.5rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--surface);
  box-shadow: -2px -2px 5px var(--inner-shadow-light-opaque), 3px 3px 5px var(--inner-shadow-dark-opaque);
  transition: all 0.2s ease;

  &:active {
    box-shadow: inset -2px -2px 5px var(--inner-shadow-light-opaque), inset 3px 3px 5px var(--inner-shadow-dark-opaque);  }
`