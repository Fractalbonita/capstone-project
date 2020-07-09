import React from 'react' 
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import styled from 'styled-components'
import axios from 'axios'

import GameTitleField, { GameTitleFieldValidator } from './GameTitleField'
import PlayDateField, { PlayDateFieldValidator } from './PlayDateField'
import PlayersField, { PlayersFieldValidator } from './PlayersField'
import PlayingTimeField, { PlayingTimeFieldValidator } from './PlayingTimeField'
import PlayRatingField from './PlayRatingField'
import { PrimaryButton } from './Button'
import UploadGameBoardImage from './UploadGameBoardImage'

const AddPlaySchema = Yup.object().shape({
  gameTitle: GameTitleFieldValidator,
  playDate: PlayDateFieldValidator,
  players: PlayersFieldValidator,
  playingTime: PlayingTimeFieldValidator,
})

export default function AddPlayForm( { addToPlayCollection }) {
  return <div>
    <h1>Add a New Play to your Timeline</h1>
    <Formik
      initialValues={{
        gameTitle: '',
        playDate: '',
        players: '',
        playingTime: '',
        playRating: 5
      }}
      validationSchema={AddPlaySchema}
      onSubmit={(values, { setSubmitting }) => {
        const savedPlayValues = {
          play_id: values.playId,
          imageURL: '',
          game_title: values.gameTitle,
          play_date: values.playDate,
          players: values.players,
          playing_time: values.playingTime,
          play_rating: values.playRating,
        }
        addToPlayCollection(savedPlayValues)
        axios
          .post('http://localhost:3001/plays', savedPlayValues)
          .then(res => console.log(res))
          .catch((error) => console.log(error))
          .finally(() => setSubmitting(false))
      }}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <UploadGameBoardImage name="playImage" />
          <GameTitleField name="gameTitle" />
          <PlayDateField name="playDate" />
          <PlayersField name="players" />
          <PlayingTimeField name="playingTime" />
          <PlayRatingField name="playRating" />
          <PrimaryButton disabled={isSubmitting}>Add Play</PrimaryButton>
        </StyledForm>
      )}
    </Formik>
  </div >  
}

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`