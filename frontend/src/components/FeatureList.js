import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

FeatureList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
}

export default function FeatureList({ title, list, ...props }) {
  return (
    <>
      <h2>{title}</h2>
      <StyledList>
        {list &&
          list.map((field, index) => (
            <li key={index} {...props}>
              {field}
            </li>
          ))}
      </StyledList>
    </>
  )
}

const StyledList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    background-color: var(--primary);
    border: 1px solid var(--primary);
    border-radius: 20px;
    box-shadow: -3px -3px 7px #fff, 3px 3px 7px var(--inner-shadow-dark-opaque);
    color: var(--surface);
    display: inline-block;
    font-family: var(--button-font);
    font-size: 14px;
    letter-spacing: 0.05rem;
    margin: 7px;
    padding: 5px 10px;
  }
`
