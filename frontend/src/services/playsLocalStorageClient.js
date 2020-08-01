import { v4 as uuid } from 'uuid';

const key = 'playData'

export function uploadImage(imageFile) {
  return new Promise((resolve) => {
    if (!imageFile) {
      return resolve('')
    }
    const reader = new FileReader()
    reader.onload = () => {
      const name = 'img_' + uuid()
      localStorage.setItem(name, reader.result)
      resolve(name)
    }
    reader.readAsDataURL(imageFile)
  })
}

export function uploadGameData(values) {
  const savedPlayValues = { ...values, _id: uuid() }
  const plays = JSON.parse(localStorage.getItem(key) || '[]')
  plays.push(savedPlayValues)
  localStorage.setItem(key, JSON.stringify(plays))
  return Promise.resolve(savedPlayValues)
}

export function fetchPlays() {
  const plays = JSON.parse(localStorage.getItem(key) || '[]')
  return Promise.resolve(plays)
}

export function fetchPlayDetails(id) {
  return fetchPlays().then(plays => {
    const play = plays.find(item => item._id === id)
    if (!play) {
      throw new Error('Invalid playId')
    }
    return play
  })
}

export function imageOf(play) {
  return localStorage.getItem(play.imageURL)
}

export function updatePlay(updatedPlay) {
  return fetchPlays().then(plays => {
    const index = plays.findIndex(play => play._id === updatedPlay._id)
    if (index < 0) {
      throw new Error('The requested play does not exist.')
    }
    plays[index] = updatedPlay
    localStorage.setItem(key, JSON.stringify(plays))
    return updatedPlay
  })
}