const wishlistKey = 'wishlist'
const playedGamesListKey = 'played'

export function gamesOnWishlist() {
  const games = JSON.parse(localStorage.getItem(wishlistKey) || '[]')
  return Promise.resolve(games)
}

export function toggleOnWishlist(id) {
  return gamesOnWishlist().then(games => {
    const isIncluded = games.includes(id)
    if (isIncluded) {
      games = games.filter(game => game !== id)
    } else {
      games.push(id)
    }
    localStorage.setItem(wishlistKey, JSON.stringify(games))
    return Promise.resolve(!isIncluded)
  })
}

export function isOnWishlist(id) {
  return gamesOnWishlist().then(games => games.includes(id))
}

export function gamesAlreadyPlayed() {
  const games = JSON.parse(localStorage.getItem(playedGamesListKey) || '[]')
  return Promise.resolve(games)
}

export function toggleOnPlayedGamesList(id) {
  return gamesAlreadyPlayed().then(games => {
    const isIncluded = games.includes(id)
    if (isIncluded) {
      games = games.filter(game => game !== id)
    } else {
      games.push(id)
    }
    localStorage.setItem(playedGamesListKey, JSON.stringify(games))
    return Promise.resolve(!isIncluded)
  })
}

export function isAlreadyPlayed(id) {
  return gamesAlreadyPlayed().then(games => games.includes(id))
}
