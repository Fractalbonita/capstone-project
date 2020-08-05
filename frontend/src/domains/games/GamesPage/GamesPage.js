import React from "react"
import styled from 'styled-components'

import gameData from '../../../data/gameData.json'
import GameCollection from "../GameCollection/GameCollection"

export default function GameOverViewPage() {
  return (
    <>
      <h1>Games</h1>
      <StyledFilter>
        <p>All Games</p>
        <p>Played</p>
        <p>Wishlist</p>
      </StyledFilter>
      <GameCollection games={gameData} />
    </>
  )
}

const StyledFilter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  p {
    margin-bottom: 1.5rem;

    &:hover {
      color: var(--text-color);
      text-decoration: 3px underline var(--text-color);
      text-underline-position: under;
      font-weight: 900;
    }

    &:active {
      color: var(--primary);
      font-weight: 900;
      text-decoration: 3px underline var(--primary);
      text-underline-position: under;
    }
  }
`