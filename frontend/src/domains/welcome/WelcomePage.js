import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Icon from '../../utilities/Icon'

export default function WelcomePage() {
  return (
    <>
      <img src="Icon-192.png" alt="logo" />
      <StyledAppTitle>Place your Plays</StyledAppTitle> 
      <h2>The Board Game Log</h2>
      <Link to="/log">Begin your Board Game Journey <Icon type="east" /></Link>
    </>
  )
}

const StyledAppTitle = styled.h1`
  font-family: var(--app-title-font);
  font-weight: 600;
`
