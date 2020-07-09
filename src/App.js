import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid';

import AddPlayForm from './components/AddPlayForm'
import PlayCollection from './components/PlayCollection'

const localStorageKey = 'plays'

function App() {
  const [plays, setPlays] = useState([])
  
  useEffect(() => {
    setPlays(JSON.parse(localStorage.getItem(localStorageKey) || '[]')) 
  }, [])

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(plays))
  }, [plays])

  return (
    <div className="App">
      <AddPlayForm addToPlayCollection={updatePlays} />
      <PlayCollection plays={plays} />
    </div>
  )
  function updatePlays(play) {
    console.log(play)
    const newPlay = { ...play, id: uuid() }
    console.log(newPlay)
    newPlay.playImage = undefined // todo
    setPlays([...plays, newPlay])
  }
}

export default App