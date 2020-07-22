import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { apiBaseURL, fetchPlayDetails } from '../../../services/playsRestClient'
  
export default function Play() {
  const params = useParams()
  const [play, setPlay] = useState({})

  useEffect(() => {
    fetchPlayDetails(params.id).then(setPlay)
  }, [])

  return (
    <StyledPlay>
      <p><StyledImage src={apiBaseURL + play.imageURL} alt="No image" /></p>
      <h2>Game</h2><p>{play.gameTitle}</p>
      <h2>Date</h2><p>{play.playDate}</p>
      <h2>Players</h2><p>{play.players}</p>
      <h2>Playing Time</h2><p>{play.playingTime}</p>
      <h2>Rating</h2><p>{play.playRating}</p>
    </StyledPlay>
  )
}

const StyledPlay = styled.div`
  margin: 0;
  padding: 20px 0;
`

const StyledImage = styled.img`
  max-width: 100%;
`
