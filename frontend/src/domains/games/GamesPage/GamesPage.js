import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import styled from 'styled-components'

import { fetchGames, fetchPlayedGames, fetchGamesOnWishlist } from '../../../services/gameClient'
import GameCollection from "../GameCollection/GameCollection"

export default function GameOverViewPage() {
  const [games, setGames] = useState([])
  const { search } = useLocation()

  useEffect(() => {
    switch (search) {
      case "?played": fetchPlayedGames().then(setGames); break;
      case "?wishlist": fetchGamesOnWishlist().then(setGames); break;
      default: fetchGames().then(setGames); break;
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

const FilterLink = ({ filter, title, search }) => (
  <StyledLink to={'/games' + filter} className={search == filter ? 'active' : ''}>
    {title}
  </StyledLink>
)

const StyledFilter = styled.div`
  display: grid;
  grid-template-columns: 12ch 10ch 8ch;
`

const StyledLink = styled(Link)`
  -webkit-tap-highlight-color: transparent;
  color: var(--text-color);
  margin-bottom: 1.5rem;
  outline: none;
  padding-top: 15px;
  text-decoration: none;

  &:hover {
    color: var(--text-color);
    text-decoration: 2px underline var(--text-color);
    text-underline-position: under;
  }

  &.active {
    color: var(--primary);
    text-decoration: 2px underline var(--primary);
    text-underline-position: under;
  }
`