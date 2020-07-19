import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import AddPlayIcon from './AddPlayIcon'
import PlayCollection from './PlayCollection'
import { fetchPlays } from '../services/playDataRestClient'

export default function PlayTimelinePage() {
  const [plays, setPlays] = useState([])

  useEffect(() => {
    fetchPlays().then(setPlays)
  }, [])

  return  (
    <>
      <PlayCollection plays={plays} />
      <Link to="/log/addplay">
        <AddPlayIcon />
      </Link>
    </>
  )
}