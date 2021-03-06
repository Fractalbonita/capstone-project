import React from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'

import { PrimaryButton } from '../../../components/Button'
import { uploadImage, uploadGameData } from '../../../services/playsClient'

import ArrowBackIcon from '../../../components/icons/ArrowBackIcon'
import GameTitleField, {
  GameTitleFieldValidator,
} from '../../../components/inputs/GameTitleField'
import PlayDateField, {
  PlayDateFieldValidator,
} from '../../../components/inputs/PlayDateField'
import PlayersField, {
  PlayersFieldValidator,
} from '../../../components/inputs/PlayersField'
import PlayImageField, {
  PlayImageFieldValidator,
} from '../../../components/inputs/PlayImageField'
import PlayStarRatingField from '../../../components/inputs/PlayStarRatingField'
import PlayingTimeField, {
  PlayingTimeFieldValidator,
} from '../../../components/inputs/PlayingTimeField'
import CommentField, {
  CommentFieldValidator,
} from '../../../components/inputs/CommentField'

const AddPlayFormValidationSchema = Yup.object().shape({
  imageURL: PlayImageFieldValidator,
  gameTitle: GameTitleFieldValidator,
  playDate: PlayDateFieldValidator,
  players: PlayersFieldValidator,
  comment: CommentFieldValidator,
  playingTime: PlayingTimeFieldValidator,
})

export default function AddPlayForm() {
  let isSubmitted = false
  let id = ''

  return (
    <div>
      <StyledLink to="/log">
        <ArrowBackIcon />
      </StyledLink>
      <h1>Add a New Play to your Timeline</h1>
      <p>* Required</p>
      <Formik
        initialValues={{
          imageURL: '',
          gameTitle: '',
          playDate: '',
          players: [{ name: '' }],
          comment: '',
          playingTime: '',
          playRating: '',
        }}
        initialTouched={{
          'players[0]name': true,
        }}
        validateOnChange
        validationSchema={AddPlayFormValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          uploadImage(values.imageURL)
            .then(imageURL => uploadGameData({ ...values, imageURL }))
            .then(play => (id = play._id))
            .finally(() => {
              isSubmitted = true
              setSubmitting(false)
            })
        }}
      >
        {({ isSubmitting, setFieldValue, values }) =>
          isSubmitted ? (
            <Redirect to={`/log/${id}`} />
          ) : (
            <StyledForm>
              <PlayImageField
                name="imageURL"
                updateImageHandler={file => setFieldValue('imageURL', file)}
              />
              <GameTitleField name="gameTitle" />
              <PlayDateField name="playDate" />
              <PlayersField name="players" players={values.players} />
              <CommentField name="comment" />
              <PlayingTimeField name="playingTime" />
              <PlayStarRatingField name="playRating" />
              <PrimaryButton type="submit" disabled={isSubmitting}>
                Add Play
              </PrimaryButton>
            </StyledForm>
          )
        }
      </Formik>
    </div>
  )
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
