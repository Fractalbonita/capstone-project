import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function WelcomePage() {
  return (
    <>
      <StyledLink to="/log">
        <StyledLogo src="Icon-192.png" alt="logo"></StyledLogo>
        <StyledAppTitle>Place your Plays</StyledAppTitle> 
        <StyledAppSubtitle>The Board Game Log</StyledAppSubtitle>
        <StyledText>Begin your Board Game Journey</StyledText>
      </StyledLink>
    </>
  )
}

const StyledLink = styled(Link)`
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
`

const StyledLogo = styled.img`
  display: block;
  height: 50px;
  margin: 50px auto;
  width: 50px;
`

const StyledAppTitle = styled.h1`
  font-family: var(--app-title-font);
  font-weight: 600;
  margin: 2.5rem 1.5rem 1.5rem;
  text-align: center;
`

const StyledAppSubtitle = styled.h2`
  font-family: var(--app-title-font);
  font-size: 16px;
  font-weight: 600;
  margin: 1rem;
  text-align: center;
`

const StyledText = styled.p`
  color: var(--primary);
  margin-top: 45vh;
  text-align: center;
`
