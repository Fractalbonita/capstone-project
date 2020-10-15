import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { fetchPlays } from '../../../services/playsClient'
import AddPlayIcon from '../../../components/icons/AddPlayIcon'
import PlayCollection from '../PlayCollection/PlayCollection'
import DropDownSort from '../../../components/DropDownSort'

export default function PlayTimelinePage() {
  const sortingCriteria = {
    'Name: A-Z': (a, b) =>
      a.gameTitle.toLowerCase() < b.gameTitle.toLowerCase() ? 1 : 0,
    'Name: Z-A': (a, b) =>
      a.gameTitle.toLowerCase() > b.gameTitle.toLowerCase() ? 1 : 0,
    Date: (a, b) => (a.playDate > b.playDate ? 1 : 0),
    Rating: (a, b) => (a.playRating > b.playRating ? 1 : 0),
  }

  const sortingCriteriaNames = Object.keys(sortingCriteria)

  const [selectedCriterion, setSelectedCriterion] = useState('Date')
  const [plays, setPlays] = useState([])

  useEffect(() => {
    fetchPlays().then(setPlays)
  }, [])

  return (
    <>
      <h1>Plays</h1>
      <DropDownSort
        sortingCriteria={sortingCriteriaNames}
        selectedCriterion={selectedCriterion}
        onChange={sorting => setSelectedCriterion(sorting)}
      />
      {plays.length ? (
        <PlayCollection
          plays={[...plays].sort(sortingCriteria[selectedCriterion])}
        />
      ) : (
        <StyledText>
          There are no plays <br /> on your timeline yet. <br />
          Click the plus sign button <br /> to add a play.
        </StyledText>
      )}
      <Link to="/log/addplay">
        <AddPlayIcon />
      </Link>
    </>
  )
}

const StyledText = styled.p`
  line-height: 1.7;
  margin: 5rem 0;
  text-align: center;
`
