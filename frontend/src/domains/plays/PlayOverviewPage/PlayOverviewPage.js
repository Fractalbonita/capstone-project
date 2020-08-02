import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

import { fetchPlayDetails, updatePlay } from '../../../services/playsClient'
import ArrowBackIcon from '../../../components/icons/ArrowBackIcon'
import EditIcon from '../../../components/icons/EditIcon'
import PlayRanking from '../PlayRanking/PlayRanking'
import PlayDetails from '../PlayDetails/PlayDetails'

export default function PlayOverviewPage() {
  const params = useParams()
  const [play, setPlay] = useState({ players: [] })
  const [cachedPlay, setCachedPlay] = useState({ players: [] })
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    fetchPlayDetails(params.id).then(play => {
      setPlay(play)
      setCachedPlay(play)
    })
  }, [params.id])

  return (
    <>
      <StyledHeader>
        <StyledLink to="/log">
          <ArrowBackIcon />
        </StyledLink>
        {!isEditing && <EditIcon onClick={() => setIsEditing(true)} />}
      </StyledHeader>
      <h1>{play.gameTitle}</h1>
      <h2>Details</h2>
      <PlayDetails play={play} />
      <h2>Ranking</h2>
      <PlayRanking play={play}
        isEditing={isEditing}
        onChange={play => setPlay(play)} />
      <StyledDiv>
        {isEditing && <StyledButton className="cancel" onClick={() => {
          setPlay(cachedPlay)
          setIsEditing(false)
        }}>Cancel</StyledButton>}
        {isEditing && <StyledButton className="save" onClick={() => {
          updatePlay(play)
          setCachedPlay(play)
          setIsEditing(false)
        }}>Save</StyledButton>}
      </StyledDiv>
    </>
  )
}

const StyledHeader = styled.div`
  background-color: var(--surface);
  position: fixed;
  top: 0;
  left: 0;
  height: 68px;
  width: 100%;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 50px;
`

const StyledButton = styled.button`
  border: none;
  border-radius: 20px;
  box-shadow: -3px -3px 7px #fff, 3px 3px 7px var(--inner-shadow-dark-opaque);
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.1rem;
  margin-top: 0.5rem;
  padding: 10px 15px;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  width: 30%;

  &.cancel {
    color: var(--primary);
    background-color: var(--surface);
  }

  &.save {
    color: var(--surface);
    background-color: var(--primary);
  }

  &.save:hover, &.cancel:hover {
    cursor: pointer;
    background-color: var(--surface);
    color: var(--text-color);
  }

  &:active {
    box-shadow: inset -1px -1px 2px #fff, inset 1px 1px 2px var(--inner-shadow-dark-opaque);
    color: var(--text-color);
  }
`