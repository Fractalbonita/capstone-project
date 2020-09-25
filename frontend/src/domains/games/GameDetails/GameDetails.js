import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import {
  isOnWishlist,
  isAlreadyPlayed,
  toggleOnWishlist,
  toggleOnPlayedGamesList,
} from '../../../services/userClient'
import Icon from '../../../utilities/Icon'
import FeatureList from '../../../components/FeatureList'
import KeyFeature from '../../../components/KeyFeature'

export default ({ game }) => {
  const [onWishlist, setOnWishlist] = useState(false)
  const [alreadyPlayed, setAlreadyPlayed] = useState(false)

  useEffect(() => {
    isAlreadyPlayed(game._id).then(setAlreadyPlayed)
    isOnWishlist(game._id).then(setOnWishlist)
  }, [game._id])

  return (
    <>
      <StyledIcons>
        <Icon
          id="wishlist-icon"
          type={onWishlist ? 'favorite' : 'favorite_border'}
          onClick={() => toggleOnWishlist(game._id).then(setOnWishlist)}
        />
        <Icon
          id="played-icon"
          type={alreadyPlayed ? 'flag' : 'outlined_flag'}
          onClick={() =>
            toggleOnPlayedGamesList(game._id).then(setAlreadyPlayed)
          }
        />
      </StyledIcons>
      <StyledImage>
        <img src={game.imageURL} alt="Board game cover" />
        <BggRatingStar rating={game.averageRating} />
      </StyledImage>
      <StyledHeader>
        <h3>{game.year}</h3>
        <h1>{game.gameTitle}</h1>
      </StyledHeader>
      <StyledKeyFeatureContainer>
        <KeyFeature icon="group" title="Players" feature={game.players} />
        <KeyFeature icon="psychology" title="Age" feature={game.age} />
        <KeyFeature
          icon="access_time"
          title="Playing Time (min)"
          feature={game.playingTime}
        />
      </StyledKeyFeatureContainer>
      <h2>Publisher</h2>
      <p>{game.publisher}</p>
      <h2>Designer</h2>
      <p>{game.designer}</p>
      <FeatureList title="Type" list={game.type} />
      <FeatureList title="Category" list={game.category} />
      <FeatureList title="Mechanism" list={game.mechanisms} />
      <h2>Description</h2>
      {game.description.split('\n').map((paragraph, index) => (
        <StyledDescription key={index}>{paragraph}</StyledDescription>
      ))}
    </>
  )
}

const BggRatingStar = ({ rating, size = 64 }) => (
  <StyledBggRatingStar
    style={{
      width: size + 'px',
      height: size + 'px',
      marginTop: (-5 / 8) * size + 'px',
    }}
  >
    <Icon type="star" style={{ fontSize: size }} />
    <span>{rating}</span>
  </StyledBggRatingStar>
)

const StyledIcons = styled.div`
  position: relative;

  span {
    color: var(--surface);
    font-size: 32px;
    position: absolute;
    text-shadow: 1px 1px 2px var(--inner-shadow-dark-opaque);
    top: 10px;
    z-index: 1;

    &#wishlist-icon {
      left: 18px;
    }

    &#played-icon {
      right: 18px;
    }
  }
`

const StyledBggRatingStar = styled.div`
  align-items: center;
  display: flex;
  float: right;
  justify-content: center;
  margin-right: 4px;
  position: relative;
  z-index: 1;

  span:first-child {
    color: var(--primary);
    position: absolute;
    z-index: -1;
  }

  span:last-child {
    color: var(--surface);
    font-size: 13px;
  }
`

const StyledImage = styled.div`
  margin-top: 50px;
  max-width: 100vw;

  img {
    width: 100%;
  }
`

const StyledHeader = styled.div`
  h1,
  h3 {
    text-align: center;
  }

  h1 {
    margin-bottom: 1.5rem;
    margin-top: 1rem;
  }
`

const StyledKeyFeatureContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  margin: 25px 0;
  text-align: center;
`

const StyledDescription = styled.p`
  font-display: block;
  line-height: 1.5;
  word-break: normal;
`
