import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import FilterLink from './FilterLink'

import {
  fetchGames,
  fetchPlayedGames,
  fetchGamesOnWishlist,
} from '../../../services/gameClient'
import GameCollection from '../GameCollection/GameCollection'

export default function GamesPage() {
  const [games, setGames] = useState([])
  const { search } = useLocation()

  useEffect(() => {
    switch (search) {
      case '?played':
        fetchPlayedGames().then(setGames)
        break
      case '?wishlist':
        fetchGamesOnWishlist().then(setGames)
        break
      default:
        fetchGames().then(setGames)
        break
    }
  }, [search])

  return (
    <>
      <h1>Games</h1>
      <StyledFilter>
        <FilterLink search={search} filter="" title="All Games" />
        <FilterLink search={search} filter="?played" title="Played" />
        <FilterLink search={search} filter="?wishlist" title="Wishlist" />
      </StyledFilter>
      <GameCollection games={games} />
    </>
  )
}

const StyledFilter = styled.div`
  display: grid;
  grid-template-columns: 12ch 10ch 8ch;
`
