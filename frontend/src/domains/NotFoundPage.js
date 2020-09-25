import React from 'react'
import styled from 'styled-components'

export default () => (
  <>
    <StyledStatusCode>
      4<img src="Icon-192.png" alt="logo" />4
    </StyledStatusCode>
    <StyledHeader>The requested content does not exist.</StyledHeader>
    <StyledText>
      Please use the navigation below <br />
      to find your way back <br />
      to the main content of the app.
    </StyledText>
  </>
)

const StyledStatusCode = styled.h1`
  align-items: center;
  color: var(--primary);
  display: flex;
  flex-direction: row;
  font-size: 44px;
  font-weight: 900;
  justify-content: center;
  text-align: center;

  img {
    height: 50px;
    margin: 0 20px;
    transform: rotate(135deg);
    width: 50px;
  }
`

const StyledHeader = styled.h2`
  font-weight: 900;
  text-align: center;
`

const StyledText = styled.p`
  line-height: 1.7;
  text-align: center;
`
