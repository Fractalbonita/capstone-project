import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Game from '../Game/Game'

GameCollection.propTypes = {
  games: PropTypes.array,
}

export default function GameCollection({ games }) {
  return (
    <>
      <StyledGameCollection>
        {games && games.map(game => <Game game={game} key={game._id} />)}
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
  margin: 0;
  padding: 0;
`
