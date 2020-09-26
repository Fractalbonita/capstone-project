import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Play from '../Play/Play'

PlayCollection.propTypes = {
  plays: PropTypes.array,
}

export default function PlayCollection({ plays }) {
  return (
    <>
      <h1>Plays</h1>
      <StyledPlayCollection>
        {plays &&
          plays.map(play => <Play play={play} key={play._id} />).reverse()}
      </StyledPlayCollection>
    </>
  )
}

const StyledPlayCollection = styled.ul`
  list-style: none;
  margin: 0;
  margin-bottom: 50px;
  padding: 0;
`
