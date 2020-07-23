import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

import { apiBaseURL, fetchPlayDetails } from '../../../services/playsRestClient'
import ArrowBackIcon from '../../../components/icons/ArrowBackIcon'
import Icon from '../../../utilities/Icon' 
import Star from '../../../components/icons/StarIcon'

export default function PlayDetails() {
  const params = useParams()
  const [play, setPlay] = useState({})

  useEffect(() => {
    fetchPlayDetails(params.id).then(setPlay)
  }, [])

  return (
    <>
      <StyledLink to="/log">
        <ArrowBackIcon />
      </StyledLink>
      <h1>Play Details</h1>
      <StyledPlay>
        <StyledImage>
          <img src={apiBaseURL + play.imageURL} alt="No photo available" />
        </StyledImage>
        <h2>{play.gameTitle}</h2>
        <h4>{play.playDate}</h4>
        <StyledOverview>
          <div>
            <Icon type="group" alt="" />
            <StyledCaption>Players</StyledCaption>
            <p>{play.players}</p>
          </div>
          <div>
            <Icon type="access_time" alt="" />
            <StyledCaption>Playing time</StyledCaption>
            <p>{play.playingTime}'</p>
          </div>
          <div>
            <Star isSelected={true} />
            <StyledCaption>Rating</StyledCaption>
            <p>{play.playRating}</p>
          </div>
        </StyledOverview>
      </StyledPlay>
    </>
  )
}

const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledPlay = styled.div`
  margin: 0;
  padding: 0;

  & h2 {
    padding-top: 30px;
  }

  & h2, h4 {
    margin-top: 0.1rem;
  }

  & h2, & h4, & p {
    text-align: center;
  }
`

const StyledImage = styled.div`
  background: var(--inner-shadow-dark);
  height: 188px;
  margin-top: 25px;
  width: 300px;

  & img {
    align-items: center;
    color: var(--text-color);
    display: flex;
    font-family: var(--caption-font);
    font-size: 12px;
    height: 188px;
    justify-content: center;
    margin: 0;
    object-fit: cover;
    text-align: center;
    width: 300px;
  }
` 

const StyledOverview = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 25px 0;
  text-align: center;
  word-break: normal;
  
  & span {
    color: var(--primary);
  }
`

const StyledCaption = styled.p`
  align-self: stretch;
  color: var(--primary);
  font-family: var(--caption-font);
  font-size: 12px;
  padding-bottom: 10px;
  padding-top: 5px;
  text-transform: uppercase;
`