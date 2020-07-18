import React from 'react'
import styled from 'styled-components'

import { apiBaseURL } from '../environment/playDataRestClient'
import ShowPlayDetailsIcon from './ShowPlayDetailsIcon'
import Star from './Star'

export default function Play({ play }) {
  return (
    <StyledPlay>
      <StyledImage src={apiBaseURL + play.imageURL} alt="No image available" />
      <div>
        <h4>{play.play_date}</h4>
        <h3>{play.game_title}</h3>
      </div>
      <div>
        <Star isSelected={true} />
        <p>{play.play_rating}</p>
      </div>
      <ShowPlayDetailsIcon />
      </StyledPlay>
  )
}

const StyledPlay = styled.li`
  display: grid;
  grid-template-columns: 100px auto 30px 25px;
  grid-auto-rows: minmax(100px, auto);
  margin: 0;
  padding: calc(0px + 2vw);
  align-items: center;

  & div {
    margin: 0;
  }

  & h3, & h4 {
    margin: 0;
    padding: 5px 10px;
    width: 100%;
    align-self: flex-start;
  } 

  & p {
    margin: 0;
    padding: 5px;
    text-align: center;
  }
`

const StyledImage = styled.img`
  margin: 0;
  max-width: 100px;
  max-height: 100px;
  object-fit: contain;

  &[alt] {
      font-family: 'Karla', sans-serif;
      font-size: 12px;
      text-align: center;
    }
` 