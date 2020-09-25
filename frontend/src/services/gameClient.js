import gameData from '../data/gameData.json'
import { gamesOnWishlist, gamesAlreadyPlayed } from './userClient'

export function fetchGames() {
  return Promise.resolve(gameData)
}

export function fetchGamesOnWishlist() {
  return Promise.all([fetchGames(), gamesOnWishlist()]).then(
    ([games, wishlist]) => {
      return games.filter(({ _id }) => wishlist.includes(_id))
    }
  )
}

export function fetchPlayedGames() {
  return Promise.all([fetchGames(), gamesAlreadyPlayed()]).then(
    ([games, played]) => {
      return games.filter(({ _id }) => played.includes(_id))
    }
  )
}

export function fetchGameDetails(id) {
  const game = gameData.find(item => item._id === id)
  return Promise.resolve(game)
}
