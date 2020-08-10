import React from 'react'
import styled from 'styled-components'

import Game from '../Game/Game'

export default function GameCollection({ games }) {
  return (
  <>
    <StyledGameCollection>
      {games && games.map(game => (
        <Game game={game} key={game._id} />
      ))}
    </StyledGameCollection>
  </>
  )
}

const StyledGameCollection = styled.ul`
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  justify-content: center;
  list-style: none;
  margin-bottom: 50px;
  margin: 0;
  padding: 0;
`