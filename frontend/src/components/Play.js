import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { apiBaseURL } from '../services/playDataRestClient'
import Star from './Star'

export default function Play({ play }) {
  return (
    <li>
     <StyledLink to={`/log/${play._id}`} >
      <StyledImage>
        <img src={apiBaseURL + play.imageURL} alt="No image available" />
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
  text-decoration: none;
  display: grid;
  grid-template-columns: 90px 1fr auto;
  grid-auto-rows: minmax(100px, auto);
  margin: 20px 0px;
  align-items: center;
  grid-gap: 10px;
`

const StyledImage = styled.div`
  width: 90px;
  height: 90px;
  background: var(--inner-shadow-dark);

  & img {
    margin: 0;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    font-family: var(--caption-font);
    color: var(--text-color);
    font-size: 12px;
    text-align: center;
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
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