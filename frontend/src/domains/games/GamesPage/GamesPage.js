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
import SearchBar from '../../../components/SearchBar'

export default function GamesPage() {
  const [games, setGames] = useState([])
  const { search } = useLocation()
  const [query, setQuery] = useState('')
  const [filteredGames, setFilteredGames] = useState([])

  function fetcher(search) {
    const cases = new Map([
      ['?played', fetchPlayedGames],
      ['?wishlist', fetchGamesOnWishlist],
    ])
    return cases.has(search) ? cases.get(search)() : fetchGames()
  }

  function handleSearch(value) {
    setQuery(value)
    const searchQuery = value.toLowerCase()
    setFilteredGames(
      games.filter(game => {
        return game.gameTitle.toLowerCase().includes(searchQuery)
      })
    )
  }

  useEffect(() => {
    const searchQuery = query.toLowerCase()
    fetcher(search).then(games => {
      setGames(games)
      setFilteredGames(
        games.filter(game => {
          return game.gameTitle.toLowerCase().includes(searchQuery)
        })
      )
    })
  }, [search])

  return (
    <>
      <h1>Games</h1>
      <SearchBar value={query} onQuery={handleSearch} games={games} />
      <StyledFilter>
        <FilterLink search={search} filter="" title="All Games" />
        <FilterLink search={search} filter="?played" title="Played" />
        <FilterLink search={search} filter="?wishlist" title="Wishlist" />
      </StyledFilter>
      <GameCollection games={filteredGames} />
    </>
  )
}

const StyledFilter = styled.div`
  display: grid;
  grid-template-columns: 12ch 10ch 8ch;
`
