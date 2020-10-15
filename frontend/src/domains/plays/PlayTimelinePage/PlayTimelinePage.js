import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ascending, descending } from '../../../utilities/compare'
import { fetchPlays } from '../../../services/playsClient'
import AddPlayIcon from '../../../components/icons/AddPlayIcon'
import PlayCollection from '../PlayCollection/PlayCollection'
import DropDownSort from '../../../components/DropDownSort'

export default function PlayTimelinePage() {
  const sortingCriteria = {
    'Title: A-Z': ascending(play => play.gameTitle.toLowerCase()),
    'Title: Z-A': descending(play => play.gameTitle.toLowerCase()),
    Date: descending(play => play.playDate),
    Rating: descending(play => play.playRating),
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
