import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Icon from '../../utilities/Icon'

export default function WelcomePage() {
  return (
    <>
      <h1>Place your Plays</h1> 
      <h2>The Board Game Log</h2>
      <StyledDiv className="infinity"></StyledDiv>
      <Link to="/log">Begin your Board Game Journey <Icon type="east" /></Link>
    </>
  )
}