import React, { useState, useEffect } from 'react'

import PlayTimelinePage from './components/PlayTimelinePage'

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
      <PlayTimelinePage addToPlayCollection={updatePlays} plays={plays} />
    </div>
  )
  function updatePlays(play) {
    setPlays([...plays, play])
    return Promise.resolve()
  }
}

export default App