import React from 'react'
import styled from 'styled-components'

export const PrimaryButton = styled.button`
  border: none;
  border-radius: 20px;
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  color: var(--surface);
  width: 90%;
  padding: 14px 15px;
  background-color: var(--primary);
  box-shadow: -5px -5px 20px #fff,  5px 5px 20px var(--shadow);
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: var(--surface);
    color: var(--text-color);
    box-shadow: -2px -2px 5px #fff, 1px 1px 5px var(--shadow);
  }

  &:active {
    box-shadow: inset -6px -6px 9px 0px var(--inner-shadow-light-opaque), inset 6px 6px 9px var(--inner-shadow-dark-opaque);
  }
`