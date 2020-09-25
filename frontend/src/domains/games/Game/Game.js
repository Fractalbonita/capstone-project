import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

Game.propTypes = {
  game: PropTypes.objectOf(
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.string)
  ),
}

export default function Game({ game }) {
  return (
    <StyledLi>
      <StyledLink to={`/games/${game._id}`}>
        <img src={game.imageURL} alt="Board game cover" />
        <h4>Players: {game.players}</h4>
        <div>
          <h3>{game.gameTitle}</h3>
        </div>
      </StyledLink>
    </StyledLi>
  )
}

const StyledLink = styled(Link)`
  align-items: center;
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 148px;
  position: relative;
  text-decoration: none;
`

const StyledLi = styled.li`
  align-items: center;
  display: flex;
  flex-basis: 148px;
  flex-direction: column;
  flex-grow: 1;
  max-width: 148px;
  padding: 15px 0;

  img {
    border: 2px solid var(--surface);
    border-radius: 5px;
    box-shadow: 6px 6px 16px rgba(55, 84, 170, 0.15),
      -6px -6px 16px rgba(255, 255, 255, 1);
    display: flex;
    font-family: var(--caption-font);
    font-size: 12px;
    height: 120px;
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
    position: relative;
    text-align: center;
    width: 120px;
  }

  h3,
  h4 {
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
`
