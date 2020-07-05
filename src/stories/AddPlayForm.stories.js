import React from 'react'
import { storiesOf } from '@storybook/react'
import withFormik from 'storybook-formik'
import * as Yup from 'yup'

import GameTitleField, { GameTitleFieldValidator } from '../components/GameTitleField'
import PlayDateField, { PlayDateFieldValidator } from '../components/PlayDateField'
import PlayersField, { PlayersFieldValidator } from '../components/PlayersField'

storiesOf('AddPlayForm', module)
  .addDecorator(withFormik)
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
  .add('PlayersField', () => <PlayersField name="players" />, {
    formik: {
      initialValues: {
        players: '',
      },
      validationSchema: Yup.object().shape({
        players: PlayersFieldValidator
      })
    }
  })
