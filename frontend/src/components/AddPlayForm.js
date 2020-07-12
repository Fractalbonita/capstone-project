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
import PlayImageField from './PlayImageField.js'
import { uploadImage, uploadGameData } from '../environment/playDataRestClient'

const AddPlaySchema = Yup.object().shape({
  gameTitle: GameTitleFieldValidator,
  playDate: PlayDateFieldValidator,
  players: PlayersFieldValidator,
  playingTime: PlayingTimeFieldValidator,
})

export default function AddPlayForm({ addToPlayCollection }) {
  const [imageFile, setImageFile] = useState(null)
  return <div>
    <h1>Add a New Play to your Timeline</h1>
    <Formik
      initialValues={{
        playImage: '',
        gameTitle: '',
        playDate: '',
        players: '',
        playingTime: '',
        playRating: 5
      }}
      validationSchema={AddPlaySchema}
      onSubmit={(values, { setSubmitting }) => {
        uploadImage(imageFile)
          .then((imageURL) => uploadGameData(values, imageURL))
          .then((savedPlayValues) => addToPlayCollection(savedPlayValues))
          .finally(() => setSubmitting(false))
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <StyledForm>
          <PlayImageField name="playImage" updateImageHandler={file => {
            setFieldValue('playImage', file.name)
            setImageFile(file)
          }} />
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