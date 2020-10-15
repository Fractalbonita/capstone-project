import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

import gameData from '../../../data/gameData.json'
import GameDetails from '../GameDetails/GameDetails'
import ArrowBackIcon from '../../../components/icons/ArrowBackIcon'

export default function GameOverviewPage() {
  let { id } = useParams()
  const game = gameData.find(item => item._id === id)

  return (
    <>
      <StyledLink to="/games">
        <ArrowBackIcon />
      </StyledLink>
      <GameDetails game={game} />
    </>
  )
}

const StyledLink = styled(Link)`
  position: relative;
  z-index: 100;
`
