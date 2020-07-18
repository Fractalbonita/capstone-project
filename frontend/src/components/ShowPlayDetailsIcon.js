import React from 'react'
import styled from 'styled-components'

export default ({ showPlayDetails }) => (
  <div onClick={showPlayDetails}>
    <StyledNextIcon
      title="Show details"
      className="material-icons-round"
    >navigate_next
    </StyledNextIcon>
  </div>
)

const StyledNextIcon = styled.i`
  font-size: 30px;
  color: var(--text-color)
`