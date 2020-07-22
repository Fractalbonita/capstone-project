import axios from 'axios'

const API_PORT = ':3001'

export const apiBaseURL = `${window.location.protocol}//${window.location.hostname}${API_PORT}`

export function uploadImage(imageFile) {
  if (!imageFile) {
    return Promise.resolve('')
  }

  const formData = new FormData()
  formData.append('image', imageFile)

  return axios.post(`${apiBaseURL}/upload`, formData, {
    headers: { 
      "Content-Type": 'multipart/form-data'
    }
  })
  .then(response => response.data)
}

export function uploadGameData(values, imageURL) {
  const savedPlayValues = {
    imageURL: imageURL,
    gameTitle: values.gameTitle,
    playDate: values.playDate,
    players: values.players,
    playingTime: values.playingTime,
    playRating: values.playRating,
  }
  
  return axios
    .post(`${apiBaseURL}/plays`, savedPlayValues)
    .then(response => response.data)
    .catch(error => console.log(error))
}

export function fetchPlays() {
  return axios
    .get(`${apiBaseURL}/plays`)
    .then(response => response.data)
    .catch(error => console.log(error))
}

export function fetchPlayDetails(id) {
  return axios
    .get(`${apiBaseURL}/plays/${id}`)
    .then(response => response.data)
    .catch(error => console.log(error))
}