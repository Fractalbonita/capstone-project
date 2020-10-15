import styled from 'styled-components'

export const PrimaryButton = styled.button`
  background-color: var(--primary);
  border: none;
  border-radius: 20px;
  box-shadow: -3px -3px 7px #fff, 3px 3px 7px var(--inner-shadow-dark-opaque);
  color: var(--surface);
  cursor: pointer;
  font-family: var(--button-font);
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.1rem;
  padding: 14px 15px;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  width: 90%;

  &:hover {
    background-color: var(--surface);
    color: var(--text-color);
  }

  &:active {
    box-shadow: inset -1px -1px 2px #fff,
      inset 1px 1px 2px var(--inner-shadow-dark-opaque);
    color: var(--text-color);
  }
`
