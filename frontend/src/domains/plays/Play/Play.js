import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { apiBaseURL } from '../../../services/playsRestClient'
import Star from '../../../components/icons/StarIcon'

export default function Play({ play }) {
  return (
    <li>
     <StyledLink to={`/log/${play._id}`} >
      <StyledImage>
        <img src={apiBaseURL + play.imageURL} alt="No photo available" />
      </StyledImage>
      <StyledDescription>
        <h4>{play.play_date}</h4>
        <h3>{play.game_title}</h3>
      </StyledDescription>
      <StyledRating>
        <Star isSelected={true} />
        <p>{play.play_rating}</p>
      </StyledRating>
      </StyledLink>
    </li>
  )
}

const StyledLink = styled(Link)`
  align-items: center;
  display: grid;
  grid-template-columns: 90px 1fr auto;
  grid-auto-rows: minmax(120px, auto);
  grid-gap: 10px;
  margin: 20px 0px;
  text-decoration: none;
`

const StyledImage = styled.div`
  background: var(--inner-shadow-dark);
  height: 90px;
  width: 90px;

  & img {
    align-items: center;
    color: var(--text-color);
    display: flex;
    font-family: var(--caption-font);
    font-size: 12px;
    height: 90px;
    justify-content: center;
    margin: 0;
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
    text-align: center;
    width: 90px;
  }
` 

const StyledDescription = styled.div`
  margin: 0;

  & h3, & h4 {
    margin: 0;
    padding: 5px 10px;
    word-break: break-word;
  } 
`

const StyledRating = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & p {
    margin: 0;
    padding: 5px;
    text-align: center;
  }
`