import React from 'react'
import styled from 'styled-components'

import Icon from '../utilities/Icon'

export default ({ icon, title, feature }) => (
  <StyledContainer>
    <Icon type={icon} alt="" />
    <p>{title}</p>
    <p>{feature}</p>
  </StyledContainer>
)

const StyledContainer = styled.div`
  align-self: stretch;
  display: grid;
  grid-template-rows: auto;
  
  span {
    color: var(--primary);
  }
    
  p {
    align-self: stretch;
    font-family: var(--caption-font);
    margin: 0;
    padding: 10px 0; 
    text-align: center;
  }

  p:first-of-type {
    color: var(--primary);
    font-family: var(--caption-font);
    font-size: 12px;
    padding: 10px 0;
    text-transform: uppercase;
  }
`