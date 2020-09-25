import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { getLocaleDate } from '../../../utilities/getLocaleDate'
import { imageOf } from '../../../services/playsClient'
import Star from '../../../components/icons/StarIcon'

export default function Play({ play }) {
  return (
    <li>
      <StyledLink to={`/log/${play._id}`}>
        <StyledImage>
          {play.imageURL ? (
            <img src={imageOf(play)} alt="Your board game session" />
          ) : (
            <p>No photo available</p>
          )}
        </StyledImage>
        <StyledDescription>
          <h4>{getLocaleDate(play.playDate)}</h4>
          <h3>{play.gameTitle}</h3>
        </StyledDescription>
        <StyledRating>
          <Star isSelected={play.playRating} />
          <p>{play.playRating}</p>
        </StyledRating>
      </StyledLink>
    </li>
  )
}

const StyledLink = styled(Link)`
  align-items: center;
  display: grid;
  grid-auto-rows: minmax(120px, auto);
  grid-gap: 10px;
  grid-template-columns: 90px 1fr auto;
  margin: 20px 0;
  text-decoration: none;
`

const StyledImage = styled.div`
  align-items: center;
  background: var(--inner-shadow-dark);
  border-radius: 5px;
  display: flex;
  height: 90px;
  justify-content: center;
  width: 90px;

  img {
    align-items: center;
    border-radius: 5px;
    color: var(--text-color);
    display: flex;
    font-family: var(--caption-font);
    font-size: 12px;
    height: 90px;
    justify-content: center;
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
    text-align: center;
    width: 90px;
  }

  p {
    color: var(--text-color);
    font-family: var(--caption-font);
    font-size: 12px;
    font-weight: 400;
    text-align: center;
  }
`

const StyledDescription = styled.div`
  h3,
  h4 {
    margin: 0;
    padding: 5px 10px;
    word-break: normal;
  }
`

const StyledRating = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  p {
    margin: 0;
    padding: 5px;
    text-align: center;
  }
`
