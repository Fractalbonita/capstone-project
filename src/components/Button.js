import styled from 'styled-components'

export const PrimaryButton = styled.button`
  color: var(--surface);
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-weight: bold;
  width: 90%;
  padding: 14px 15px;
  background-color: var(--primary);
  border: none;
  border-radius: 20px;
  box-shadow: -5px -5px 20px #fff,  5px 5px 20px var(--shadow);
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    color: var(--text-color);
    background-color: var(--surface);
  }

  &:active {
    color: var(--text-color);
    box-shadow: -2px -2px 5px #fff, 1px 1px 5px var(--shadow);
  }
`