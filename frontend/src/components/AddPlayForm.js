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
import PlayImageField, { PlayImageFieldValidator } from './PlayImageField'
import { uploadImage, uploadGameData } from '../environment/playDataRestClient'
import AddPlayIcon from './AddPlayIcon'

const AddPlaySchema = Yup.object().shape({
  playImage: PlayImageFieldValidator,
  gameTitle: GameTitleFieldValidator,
  playDate: PlayDateFieldValidator,
  players: PlayersFieldValidator,
  playingTime: PlayingTimeFieldValidator,
})

export default function AddPlayForm({ addToPlayCollection }) {
  const [isVisible, setIsVisible] = useState(false)
  
  return <>
    {isVisible ? 
    <div>
    <h1> Add a New Play to your Timeline</h1>
    <p>* Required</p>

    <Formik
      initialValues={{
        playImage: '',
        gameTitle: '',
        playDate: '',
        players: '',
        playingTime: '',
        playRating: 5
      }}
      validateOnChange
      validationSchema={AddPlaySchema}
      onSubmit={(values, { setSubmitting }) => {
        uploadImage(values.playImage)
          .then(imageURL => uploadGameData(values, imageURL))
          .then(savedPlayValues => addToPlayCollection(savedPlayValues))
          .then(() => setSubmitting(false))
          .finally(() => setIsVisible(false))
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
        </div>
      : <div onClick={() => setIsVisible(true)}>
          <AddPlayIcon />
        </div>
        }
   </> 
}

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`