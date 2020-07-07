import React from 'react'
// import styled from 'styled-components'

import Play from './Play'

export default function PlayCollection({ plays }) {

  return (
  <>
  <h1>Plays</h1>
    <ul>
      {plays && plays.map((play) => (
        <Play play={play} key={play.id} />
      ))}
    </ul>
  </>
  )
}