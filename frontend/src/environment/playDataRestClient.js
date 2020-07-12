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
}