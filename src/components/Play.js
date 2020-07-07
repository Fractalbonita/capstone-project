import React from 'react'
import styled from 'styled-components'

export default function Play({ play }) {
  return (
    <li>
      <div>{play.gameTitle}</div>
      <div>{play.playDate}</div>
      <div>{play.players}</div>
      <div>{play.playPlayingTime}</div>
      <div>{play.playRating}</div>
    </li>
  )
}

const StyledPlay = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
