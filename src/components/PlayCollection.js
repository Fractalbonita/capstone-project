import React from 'react'
import styled from 'styled-components'

import Play from './Play'

export default function PlayCollection({ plays }) {

  return (
  <>
  <h1>Plays</h1>
    <StyledPlayCollection>
      {plays && plays.map((play) => (
        <Play play={play} key={play.id} />
      ))}
    </StyledPlayCollection>
  </>
  )
}

const StyledPlayCollection = styled.ul`
  list-style: none;
  margin: 0;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
`