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

  useEffect(() => {
    switch (search) {
      case '?played':
        fetchPlayedGames().then(games => {
          setGames(games)
          setFilteredGames(games)
        })
        break
      case '?wishlist':
        fetchGamesOnWishlist().then(games => {
          setGames(games)
          setFilteredGames(games)
        })
        break
      default:
        fetchGames().then(games => {
          setGames(games)
          setFilteredGames(games)
        })
        break
    }
  }, [search])

  function handleSearch() {
    const searchQuery = query.toLowerCase()
    setFilteredGames(
      games.filter(game => {
        return game.gameTitle.toLowerCase().includes(searchQuery)
      })
    )
  }

  return (
    <>
      <h1>Games</h1>
      <SearchBar value={query} onSearch={handleSearch} onQuery={setQuery} />
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
