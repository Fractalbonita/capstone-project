import React, { useState } from 'react' 
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

const API_PORT = ':3001'
export const apiBaseURL = `${window.location.protocol}//${window.location.hostname}${API_PORT}`

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
        const formData = new FormData()
        formData.append('image', imageFile)
        axios.post(`${apiBaseURL}/upload`, formData, {
          headers: { 
            "Content-Type": 'multipart/form-data'
          }
        })
          .then(({ data }) => {
            const savedPlayValues = {
              play_id: values.playId,
              imageURL: data,
              game_title: values.gameTitle,
              play_date: values.playDate,
              players: values.players,
              playing_time: values.playingTime,
              play_rating: values.playRating,
            }
            addToPlayCollection(savedPlayValues)
            axios
              .post(`${apiBaseURL}/plays`, savedPlayValues)
              .then(res => console.log(res))
              .catch((error) => console.log(error))
              .finally(() => setSubmitting(false))
          })
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <StyledForm>
          <UploadGameBoardImage name="playImage" updateImageHandler={file => {
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