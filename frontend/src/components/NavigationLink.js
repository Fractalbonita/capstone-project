import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Icon from '../utilities/Icon'

NavigationLink.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
  icon: PropTypes.string,
}

export default function NavigationLink({ title, address, icon }) {
  return (
    <StyledNavLink exact to={address} activeClassName="active">
      <Icon type={icon} />
      {title}
    </StyledNavLink>
  )
}

const StyledNavLink = styled(NavLink)`
  -webkit-tap-highlight-color: transparent;
  border: 1px solid var(--surface);
  border-radius: 5px;
  box-shadow: -3px -3px 7px var(--inner-shadow-light-opaque),
    3px 3px 7px var(--inner-shadow-dark-opaque);
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
    box-shadow: inset -3px -3px 4px #fff,
      inset 2px 2px 3px var(--inner-shadow-dark);
    color: var(--primary);
  }
`
