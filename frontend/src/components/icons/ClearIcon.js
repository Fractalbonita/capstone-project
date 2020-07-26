import React from 'react'
import styled from 'styled-components'

export default (props) => (
  <StyledClearIcon
    className="material-icons"
    {...props}>
    clear
  </StyledClearIcon>
)

const StyledClearIcon = styled.span`
  color: var(--text-decoration-color);
  font-size: 24px;
  font-weight: bold;
  left: 6px;
  position: relative;
  top: 6px;
`