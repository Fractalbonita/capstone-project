import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

FilterLink.propTypes = {
  filter: PropTypes.string,
  title: PropTypes.string,
  search: PropTypes.string,
}

export default function FilterLink({ filter, title, search }) {
  return (
    <StyledLink
      to={'/games' + filter}
      className={search === filter ? 'active' : ''}
    >
      <span>{title}</span>
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  -webkit-tap-highlight-color: transparent;
  color: var(--text-color);
  font-family: var(--button-font);
  margin-bottom: 1.5rem;
  outline: none;
  padding-top: 15px;
  text-decoration: none;

  span {
    border-bottom: 2px solid transparent;
  }

  &:hover {
    color: var(--text-color);

    span {
      border-color: var(--text-color);
    }
  }

  &.active {
    color: var(--primary);

    span {
      border-color: var(--primary);
    }
  }
`
