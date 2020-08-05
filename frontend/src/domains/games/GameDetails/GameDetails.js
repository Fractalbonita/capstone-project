import React from 'react'
// import styled from 'styled-components'

import Icon from '../../../utilities/Icon'

export default ({ game }) => {
  return (
    <>
      <img src={game.imageURL} alt="Board game cover" />
      <Icon type="favorite_border" title="Wishlist" />
      <Icon type="outlined_flag" title="Played" />
      <p>{game.averageRating}</p>
      <h1>{game.gameTitle}</h1>
      <h2>{game.year}</h2>
      <KeyFeature icon="group" title="Players" feature={game.players} />
      <KeyFeature icon="psychology" title="Age" feature={game.age} />
      <KeyFeature icon="access_time" title="Playing Time" feature={game.playingTime} />
      <h3>Publisher</h3>
      <p>{game.publisher}</p>
      <h3>Designer</h3>
      <p>{game.designer}</p>
      <FeatureList title="Type" list={game.type}/>
      <FeatureList title="Category" list={game.category} />
      <FeatureList title="Mechanisms" list={game.mechanisms} />
      <p>{game.description}</p>
    </>
  )
}

const KeyFeature = ({ icon, title, feature }) => (
  <div>
    <Icon type={icon} alt="" />
    <p>{title}</p>
    <p>{feature}</p>
  </div>
)

const FeatureList = ({ title, list }) => (
  <>
    <h3>{title}</h3>
    <ul>
      {list && list.map((field, index) => (
        <li key={index}>{field}</li>
      ))}
    </ul>
  </>
)