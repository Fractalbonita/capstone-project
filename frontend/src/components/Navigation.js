import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import Icon from '../utilities/Icon'

export default () => (
  <StyledNavigation>
    <AppLink title="Games" address="/games" icon="apps" />
    <AppLink title="Plays" address="/log" icon="list" />
  </StyledNavigation>
)

const AppLink = ({ title, address, icon }) => (
  <StyledNavLink exact to={address} activeClassName="active">
    <Icon type={icon} />
    {title}
  </StyledNavLink>
)

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

const StyledNavLink = styled(NavLink)`
border: 1px solid var(--surface);
border-radius: 5px;
box-shadow: -3px -3px 7px var(--inner-shadow-light-opaque), 3px 3px 7px var(--inner-shadow-dark-opaque);
color: var(--text-color);
display: flex;
flex-direction: column;
font-family: var(--button-font);
font-weight: 900;
font-size: 10px;
height: 48px;
justify-content: center;
letter-spacing: 0.1rem;
margin: 0;
outline: none;
padding: 0 5px;
text-align: center;
text-decoration: none;
text-transform: uppercase;

&.active {
  box-shadow: inset -3px -3px 4px #fff, inset 2px 2px 3px var(--inner-shadow-dark);  
  color: var(--primary);
}
`
