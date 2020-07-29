export function uploadImage(imageFile) {
  return new Promise((resolve) => {
    if (!imageFile) {
      return resolve('')
    }
    const reader = new FileReader()
    reader.onload = () => {
      const name = 'img_' + Date.now()
      localStorage.setItem(name, reader.result)
      resolve(name)
    }
    reader.readAsDataURL(imageFile)
  })
}

export function uploadGameData(values, imageURL) {
  const savedPlayValues = {
    _id: Date.now(),
    imageURL: imageURL,
    gameTitle: values.gameTitle,
    playDate: values.playDate,
    players: values.players,
    playingTime: values.playingTime,
    playRating: values.playRating,
  }
  const key = 'gameData'
  const db = JSON.parse(localStorage.getItem(key) || '[]')
  db.push(savedPlayValues);
  localStorage.setItem(key, JSON.stringify(db))
  return Promise.resolve(savedPlayValues)
}

export function fetchPlays() {
  const key = 'gameData'
  const db = JSON.parse(localStorage.getItem(key) || '[]')
  return Promise.resolve(db);
}

export function fetchPlayDetails(id) {
  return fetchPlays().then(plays => {
    const play = plays.find(x => x._id == id)
    if (!play) {
      throw new Error('Invalid play-id')
    }
    return play
  })
}

export function imageOf(play) {
  return localStorage.getItem(play.imageURL)
}