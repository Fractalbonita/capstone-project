import React from 'react'

import PlayCollection from '../components/PlayCollection'

export default {
  title: 'PlayCollection',
  component: PlayCollection,
}

export const PlayCollection = () => <StyledPlayCollection></StyledPlayCollection>

/*
<>
  <h1>Plays</h1>
    <StyledPlayCollection>
      {plays && plays.map((play) => (
        <Play play={play} key={play.id} />
      ))}
    </StyledPlayCollection>
  </>
  */
