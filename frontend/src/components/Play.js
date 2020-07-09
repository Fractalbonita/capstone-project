import React from 'react'
import styled from 'styled-components'

export default function Play({ play }) {
  return (
    <StyledPlay>
        <h2>Game</h2><p>{play.gameTitle}</p>
        <h2>Date</h2><p>{play.playDate}</p>
        <h2>Players</h2><p>{play.players}</p>
        <h2>Playing Time</h2><p>{play.playingTime}</p>
        <h2>Rating</h2><p>{play.playRating}</p>
    </StyledPlay>
  )
}

const StyledPlay = styled.li`
  margin: 0;
  padding: 10px 0;

`