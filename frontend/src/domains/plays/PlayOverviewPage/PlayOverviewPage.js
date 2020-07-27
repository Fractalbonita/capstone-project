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
      <StyledHeading>
        <h2>Details</h2>
        <EditIcon />
      </StyledHeading>
      <PlayDetails play={play} />
      <StyledHeading>
        <h2>Ranking</h2>
        <EditIcon />
      </StyledHeading>
      <PlayRanking play={play}/>
    </>
  )
}

const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledHeading = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.5em 0 1.5em;

  & h2 {
    margin: 0;
    width: auto;
  }
`