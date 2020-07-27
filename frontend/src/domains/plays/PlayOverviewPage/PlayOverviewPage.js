import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

import { fetchPlayDetails } from '../../../services/playsRestClient'
import ArrowBackIcon from '../../../components/icons/ArrowBackIcon'
import EditIcon from '../../../components/icons/EditIcon'
import PlayRanking from '../PlayRanking/PlayRanking'
import PlayDetails from '../PlayDetails/PlayDetails'

export default function PlayOverviewPage() {
  const params = useParams()
  const [play, setPlay] = useState({ players: [] })

  useEffect(() => {
    fetchPlayDetails(params.id).then(setPlay)
  }, [])

  return (
    <>
      <StyledLink to="/log">
        <ArrowBackIcon />
      </StyledLink>
      <h1>{play.gameTitle}</h1>
      <div style={{display: 'flex', 'align-items': 'center', padding: '.5em 0 1.5em', 'justify-content': 'space-between'}}>
        <h2 style={{margin: 0, width: 'auto'}}>Details</h2>
        <EditIcon />
      </div>
      <PlayDetails play={play} />
      <div style={{display: 'flex', 'align-items': 'center', padding: '.5em 0 1.5em', 'justify-content': 'space-between'}}>
        <h2 style={{margin: 0, width: 'auto'}}>Ranking</h2>
        <EditIcon />
      </div>
      <PlayRanking play={play}/>
    </>
  )
}

const StyledLink = styled(Link)`
  text-decoration: none;
`
