import React from 'react' 
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import styled from 'styled-components'

import PlayImageField, { PlayImageFieldValidator } from './PlayImageField'
import GameTitleField, { GameTitleFieldValidator } from './GameTitleField'
import PlayDateField, { PlayDateFieldValidator } from './PlayDateField'
import PlayersField, { PlayersFieldValidator } from './PlayersField'
import PlayingTimeField, { PlayingTimeFieldValidator } from './PlayingTimeField'
import PlayStarRatingField from './PlayStarRatingField'
import { PrimaryButton } from './Button'

import { uploadImage, uploadGameData } from '../environment/playDataRestClient'

const AddPlaySchema = Yup.object().shape({
  playImage: PlayImageFieldValidator,
  gameTitle: GameTitleFieldValidator,
  playDate: PlayDateFieldValidator,
  players: PlayersFieldValidator,
  playingTime: PlayingTimeFieldValidator,
})

export default function AddPlayForm({ addToPlayCollection, hideForm }) {

  return <div>
    <h1> Add a New Play to your Timeline</h1>
    <p>* Required</p>

    <Formik
      initialValues={{
        playImage: '',
        gameTitle: '',
        playDate: '',
        players: '',
        playingTime: '',
        playRating: ''
      }}
      validateOnChange
      validationSchema={AddPlaySchema}
      onSubmit={(values, { setSubmitting }) => {
        uploadImage(values.playImage)
          .then(imageURL => uploadGameData(values, imageURL))
          .then(savedPlayValues => addToPlayCollection(savedPlayValues))
          .then(() => setSubmitting(false))
          .finally(hideForm)
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <StyledForm>
          <PlayImageField name="playImage"
            updateImageHandler={file => setFieldValue('playImage', file)} />
          <GameTitleField name="gameTitle" />
          <PlayDateField name="playDate" />
          <PlayersField name="players" />
          <PlayingTimeField name="playingTime" />
          <PlayStarRatingField name="playRating" />
          <PrimaryButton type="submit" disabled={isSubmitting}>Add Play</PrimaryButton>
        </StyledForm>
      )}
        </Formik>
  </div>
}

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: calc(10px + 5vw);
`