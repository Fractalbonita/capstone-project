import React from 'react'
import styled from 'styled-components'

import Icon from '../../../utilities/Icon'

// Add link to each game

export default function Game({ game }) {
  return (
    <StyledLi>
      <img src={game.imageURL} alt="Board game cover" />
      <Icon type="favorite_border" title="Wishlist" />
      <Icon type="outlined_flag" title="Played" />
      <h4>Players: {game.players}</h4>
      <div>
        <h3>{game.gameTitle}</h3>
      </div>
    </StyledLi>
  )
}

const StyledLi = styled.li`
  align-items: center;
  display: flex;
  flex-basis: 148px;
  max-width: 153px;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px 0;
  position: relative;

  img {
    border: 2px solid var(--surface);
    border-radius: 5px;
    box-shadow: 6px 6px 16px rgba(55, 84, 170, .15),
                -6px -6px 16px rgba(255, 255, 255, 1);
    display: flex;
    font-family: var(--caption-font);
    font-size: 12px;
    height: 120px;
    max-height: 100%;
    max-width: 100%;
    opacity: 0.9;
    object-fit: cover;
    position: relative;
    text-align: center;
    width: 120px;
  }

  h3, h4 {
    margin: 0;
    padding: 2px 8px;
    text-align: center;
    word-break: normal;
  } 

  h3 {
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    display: -webkit-box;
    overflow: hidden;
  }

  h4 {
    padding-top: 12px;
  }

  div {
    display: flex;
    height: 50px;
  }

  span[title="Wishlist"] {
    top: 15px;
    color: var(--surface);
    position: absolute;
    left: 20px;
  }

  span[title="Played"] {
    top: 15px;
    color: var(--surface);
    position: absolute;
    right: 20px;
  }
`