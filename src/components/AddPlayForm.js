import React from 'react' 
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import styled from 'styled-components'

import GameTitleField, { GameTitleFieldValidator } from './GameTitleField'
import PlayDateField, { PlayDateFieldValidator } from './PlayDateField'
import PlayersField, { PlayersFieldValidator } from './PlayersField'

const AddPlaySchema = Yup.object().shape({
  gameTitle: GameTitleFieldValidator,
  playDate: PlayDateFieldValidator,
  players: PlayersFieldValidator,
  playingTime: Yup
    .number()
    .typeError('Please mind that only numbers are allowed.')
    .integer(`The playing time must be an integer number.`)
    .positive(`The playing time must be a positive number.`)
    .max(720, `You played too many hours. The maximum is 720.`)
    .nullable()
    .notRequired()
})

export default function AddPlayForm() {
  return <div>
    <h1>Add a new play to your timeline</h1>
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
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <GameTitleField name="gameTitle" />
          <PlayDateField name="playDate" />
          <PlayersField name="players" />
          <label htmlFor="playingTime">Playing time (min)</label>
          <Field name="playingTime"
            inputmode="numeric"
            pattern="[0-9]*" />
          <ErrorStyles name="playingTime" component="div" />
          <label htmlFor="playRating">Rate the play</label>
          <Field name="playRating"
            type="range"
            min="1"
            max="10"
            step="1" />
          <span>{values.playRating}</span>
          <button type="submit" disabled={isSubmitting}>
            Add play
          </button>
        </Form>
      )}
    </Formik>
  </div>  
}

const ErrorStyles = styled(ErrorMessage)`
color: green;
`
