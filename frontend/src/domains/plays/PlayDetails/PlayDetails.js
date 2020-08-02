import React from 'react'
import styled from 'styled-components'

import { imageOf } from '../../../services/playsClient'
import { getLocaleDate } from '../../../utilities/getLocaleDate'
import Icon from '../../../utilities/Icon' 
import Star from '../../../components/icons/StarIcon'

export default ({ play } ) => (
  <>
    <StyledPlay>
      <StyledImage>
        {play.imageURL ? <img src={imageOf(play)} alt="Play photo" /> : <p>No photo available</p>}
      </StyledImage>
      <h4>{getLocaleDate(play.playDate)}</h4>
      <StyledSummary>
        <StyledContainer>
          <Icon type="group" alt="" />
          <StyledCaption>Players</StyledCaption>
          <p>{play.players.length}</p>
        </StyledContainer>
        <StyledContainer>
          <Icon type="access_time" alt="" />
          <StyledCaption>Playing time (min)</StyledCaption>
          <p>{play.playingTime != null ? play.playingTime : '-/-' }</p>
        </StyledContainer>
        <StyledContainer>
          <Star isSelected={true} />
          <StyledCaption>Rating</StyledCaption>
          <p>{play.playRating != null ? play.playRating : '-/-'}</p>
        </StyledContainer>
      </StyledSummary>
    </StyledPlay>
  </>
)

const StyledPlay = styled.div`
  & h4, & p {
    text-align: center;
  }
`

const StyledImage = styled.div`
  align-items: center;
  background: var(--inner-shadow-dark);
  display: flex;
  height: 188px;
  justify-content: center;
  margin: calc(25px + 0.2rem) auto;
  width: 300px;

  & img {
    align-items: center;
    color: var(--text-color);
    display: flex;
    font-family: var(--caption-font);
    font-size: 12px;
    height: 188px;
    justify-content: center;
    object-fit: cover;
    text-align: center;
    width: 300px;
  }

  & p {
    color: var(--text-color);
    font-family: var(--caption-font);
    font-size: 12px;
    font-weight: 400;
    text-align: center;
  }
` 

const StyledSummary = styled.div`
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
  padding: 5px 0;
  text-transform: uppercase;
`

const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: 30px 45px auto;

  & span {
    align-self: center;
  }
`