import React, { useState } from 'react' 
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import styled from 'styled-components'

import GameTitleField, { GameTitleFieldValidator } from './GameTitleField'
import PlayDateField, { PlayDateFieldValidator } from './PlayDateField'
import PlayersField, { PlayersFieldValidator } from './PlayersField'
import PlayingTimeField, { PlayingTimeFieldValidator } from './PlayingTimeField'
import PlayRatingField from './PlayRatingField'
import { PrimaryButton } from './Button'
import PlayImageField, { PlayImageFieldValidator } from './PlayImageField.js'
import { uploadImage, uploadGameData } from '../environment/playDataRestClient'

const AddPlaySchema = Yup.object().shape({
  playImage: PlayImageFieldValidator,
  gameTitle: GameTitleFieldValidator,
  playDate: PlayDateFieldValidator,
  players: PlayersFieldValidator,
  playingTime: PlayingTimeFieldValidator,
})

export default function AddPlayForm({ addToPlayCollection }) {
  return <div>
    <h1>Add a New Play to your Timeline</h1>
    <p>* Rquired</p>
    <Formik
      initialValues={{
        playImage: '',
        gameTitle: '',
        playDate: '',
        players: '',
        playingTime: '',
        playRating: 5
      }}
      validateOnChange={true}
      validationSchema={AddPlaySchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        uploadImage(values.playImage)
          .then(imageURL => uploadGameData(values, imageURL))
          .then(savedPlayValues => addToPlayCollection(savedPlayValues))
          .then(() => setSubmitting(false))
          .finally(() => resetForm())
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
          <PlayRatingField name="playRating" />
          <PrimaryButton type="submit" disabled={isSubmitting}>Add Play</PrimaryButton>
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