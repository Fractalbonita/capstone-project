import React, { useState } from 'react' 
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
    play_id: values.playId,
    imageURL: imageURL,
    game_title: values.gameTitle,
    play_date: values.playDate,
    players: values.players,
    playing_time: values.playingTime,
    play_rating: values.playRating,
  }
  return axios
    .post(`${apiBaseURL}/plays`, savedPlayValues)
    .then(response => response.data)
    .catch((error) => console.log(error))
}