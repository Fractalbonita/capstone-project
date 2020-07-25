import React from 'react' 
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'

import { PrimaryButton } from '../../../components/Button'
import { uploadImage, uploadGameData } from '../../../services/playsRestClient'

import ArrowBackIcon from '../../../components/icons/ArrowBackIcon'
import GameTitleField, { GameTitleFieldValidator } from '../../../components/inputs/GameTitleField'
import PlayDateField, { PlayDateFieldValidator } from '../../../components/inputs/PlayDateField'
import PlayersField, { PlayersFieldValidator } from '../../../components/inputs/PlayersField'
import PlayImageField, { PlayImageFieldValidator } from '../../../components/inputs/PlayImageField'
import PlayStarRatingField from '../../../components/inputs/PlayStarRatingField'
import PlayingTimeField, { PlayingTimeFieldValidator } from '../../../components/inputs/PlayingTimeField'

const AddPlaySchema = Yup.object().shape({
  playImage: PlayImageFieldValidator,
  gameTitle: GameTitleFieldValidator,
  playDate: PlayDateFieldValidator,
  players: PlayersFieldValidator,
  playingTime: PlayingTimeFieldValidator,
})

export default function AddPlayForm() {
  let isSubmitted = false 

  return <div>
    <StyledLink to="/log">
      <ArrowBackIcon />
    </StyledLink>
    <h1>Add a New Play to your Timeline</h1>
    <p>* Required</p>

    <Formik
      initialValues={{
        playImage: '',
        gameTitle: '',
        playDate: '',
        players: [''],
        playingTime: '',
        playRating: ''
      }}
      validateOnChange
      validationSchema={AddPlaySchema}
      onSubmit={(values, { setSubmitting }) => {
        uploadImage(values.playImage)
          .then(imageURL => uploadGameData(values, imageURL))
          .finally(() => {
            isSubmitted = true
            setSubmitting(false)
          })
      }}
    >
      {({ isSubmitting, setFieldValue, values }) => isSubmitted
        ? <Redirect to="/log" />
        : (
        <StyledForm>
          <PlayImageField name="playImage"
            updateImageHandler={file => setFieldValue('playImage', file)} />
          <GameTitleField name="gameTitle" />
          <PlayDateField name="playDate" />
          <PlayersField name="players" players={values.players} />
          <PlayingTimeField name="playingTime" />
          <PlayStarRatingField name="playRating" />
          <PrimaryButton type="submit" disabled={isSubmitting}>Add Play</PrimaryButton>
        </StyledForm>
      )}
        </Formik>
  </div>
}

const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledForm = styled(Form)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: calc(10px + 5vw);
`