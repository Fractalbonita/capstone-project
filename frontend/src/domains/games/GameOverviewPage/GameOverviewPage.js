import React from 'react'
import { Link, useParams } from 'react-router-dom'

import gameData from '../../../data/gameData.json'
import GameDetails from '../GameDetails/GameDetails'
import ArrowBackIcon from '../../../components/icons/ArrowBackIcon'

export default function GameOverviewPage() {
  let { id } = useParams()
  const game = gameData.find(item => item._id === id)

  return (
    <>
      <Link to="/games">
        <ArrowBackIcon />
      </Link>
      <GameDetails game={game} />
    </>
  )
}
