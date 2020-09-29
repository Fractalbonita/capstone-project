import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
      <h1>Plays</h1>
      {plays.length ? (
        <PlayCollection plays={plays} />
      ) : (
        <StyledText>
          There are no plays <br /> on your timeline yet. <br />
          Click the plus sign button <br /> to add a play.
        </StyledText>
      )}
      <Link to="/log/addplay">
        <AddPlayIcon />
      </Link>
    </>
  )
}

const StyledText = styled.p`
  line-height: 1.7;
  margin: 5rem 0;
  text-align: center;
`
