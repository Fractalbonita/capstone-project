import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { fetchPlays } from '../../../services/playsClient'
import AddPlayIcon from '../../../components/icons/AddPlayIcon'
import PlayCollection from '../PlayCollection/PlayCollection'

export default function PlayTimelinePage() {
  const [plays, setPlays] = useState([])

  useEffect(() => {
    fetchPlays().then(setPlays)
  }, [])

  return (
    <>
      <PlayCollection plays={plays} />
      <Link to="/log/addplay">
        <AddPlayIcon />
      </Link>
    </>
  )
}
