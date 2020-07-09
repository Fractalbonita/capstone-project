import React from 'react'
import styled from 'styled-components'

export default function Play({ play }) {
  return (
    <StyledPlay>
        <h2>Game</h2><p>{play.game_title}</p>
        <h2>Date</h2><p>{play.play_date}</p>
        <h2>Players</h2><p>{play.players}</p>
        <h2>Playing Time</h2><p>{play.playing_time}</p>
        <h2>Rating</h2><p>{play.play_rating}</p>
    </StyledPlay>
  )
}

const StyledPlay = styled.li`
  margin: 0;
  padding: 10px 0;

`