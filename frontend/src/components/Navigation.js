import React from 'react'
import styled from 'styled-components'

import NavigationLink from './NavigationLink'

export default function Navigation() {
  return (
    <StyledNavigation>
      <NavigationLink title="Games" address="/games" icon="apps" />
      <NavigationLink title="Plays" address="/log" icon="list" />
    </StyledNavigation>
  )
}

const StyledNavigation = styled.div`
  align-items: center;
  background-color: var(--surface);
  bottom: 0;
  box-shadow: 0px 0px 6px #fff;
  display: flex;
  flex-direction: row;
  height: 68px;
  justify-content: space-between;
  left: 0;
  padding: 0 calc(20px + 3vw);
  position: fixed;
  right: 0;
`
