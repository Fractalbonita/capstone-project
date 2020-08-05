import React from 'react'
import styled from 'styled-components'

import Icon from '../../../utilities/Icon'
import FeatureList from '../../../components/FeatureList'
import KeyFeature from '../../../components/KeyFeature'

export default ({ game }) => {
  return (
    <>
      <img src={game.imageURL} alt="Board game cover" />
      <Icon type="favorite_border" title="Wishlist" />
      <Icon type="outlined_flag" title="Played" />
      <p>{game.averageRating}</p>
      <h1>{game.gameTitle}</h1>
      <h3>{game.year}</h3>
      <StyledKeyFeatureContainer>
        <KeyFeature icon="group" title="Players" feature={game.players} />
        <KeyFeature icon="psychology" title="Age" feature={game.age} />
        <KeyFeature icon="access_time" title="Playing Time (min)" feature={game.playingTime} />
      </StyledKeyFeatureContainer>
      <h2>Publisher</h2>
      <p>{game.publisher}</p>
      <h2>Designer</h2>
      <p>{game.designer}</p>
      <FeatureList title="Type" list={game.type} />
      <FeatureList title="Category" list={game.category} />
      <FeatureList title="Mechanisms" list={game.mechanisms} />
      <h2>Description</h2>
      <StyledDescription>{game.description}</StyledDescription>
    </>
  )
}

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