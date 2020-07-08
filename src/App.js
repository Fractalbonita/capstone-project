import React, { useState, useEffect } from 'react'

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
    play.playImage = undefined // todo
    setPlays([...plays, play])
  }
}

export default App