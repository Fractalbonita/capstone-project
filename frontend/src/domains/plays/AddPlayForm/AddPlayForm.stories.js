import React from 'react'
import { storiesOf } from '@storybook/react'
import withFormik from 'storybook-formik'
import * as Yup from 'yup'

import PlayImageField, { PlayImageFieldValidator } from '../../../components/inputs/PlayImageField.js'
import GameTitleField, { GameTitleFieldValidator } from '../../../components/inputs/GameTitleField'
import PlayDateField, { PlayDateFieldValidator } from '../../../components/inputs/PlayDateField'
import PlayersField, { PlayersFieldValidator } from '../../../components/inputs/PlayersField'
import PlayingTimeField, { PlayingTimeFieldValidator } from '../../../components/inputs/PlayingTimeField'
import PlayStarRatingField from '../../../components/inputs/PlayStarRatingField'
import { PrimaryButton } from '../../../components/Button'

storiesOf('AddPlayForm', module)
  .addDecorator(withFormik)
  .add('PlayImageField', () => <PlayImageField name="playImage" />, {
    formik: {
      initialValues: {
        playImage: '',
      },
      validationSchema: Yup.object().shape({
        playImage: PlayImageFieldValidator
      })
    }
  })
  .add('GameTitleField', () => <GameTitleField name="gameTitle" />, {
    formik: {
      initialValues: {
        gameTitle: '',
      },
      validationSchema: Yup.object().shape({
        gameTitle: GameTitleFieldValidator
      })
    }
  })
  .add('PlayDateField', () => <PlayDateField name="playDate" />, {
    formik: {
      initialValues: {
        playDate: '',
      },
      validationSchema: Yup.object().shape({
        playDate: PlayDateFieldValidator
      })
    }
  })
  .add('PlayersField', () => <PlayersField name="players" players={values.players} />, {
    formik: {
      initialValues: {
        players: [''],
      },
      validationSchema: Yup.object().shape({
        players: PlayersFieldValidator
      })
    }
  })
  .add('PlayingTimeField', () => <PlayingTimeField name="playingTime" />, {
    formik: {
      initialValues: {
        playingTime: '',
      },
      validationSchema: Yup.object().shape({
        playingTime: PlayingTimeFieldValidator
      })
    }
  })
  .add('PlayStarRatingField', () => <PlayStarRatingField name="playRating" />, {
    formik: {
      initialValues: {
        playRating: '',
      },
    }
  })
  .add('PrimaryButton', () => <PrimaryButton type="submit">Add Play</PrimaryButton>)