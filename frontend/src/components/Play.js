import React from 'react'
import styled from 'styled-components'

import { apiBaseURL } from '../environment/playDataRestClient'

export default function Play({ play }) {
  return (
    <StyledPlay>
        <img src={apiBaseURL + play.imageURL} alt="No image" />
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