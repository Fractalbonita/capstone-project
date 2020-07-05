import React from 'react'
import { storiesOf } from '@storybook/react';
import withFormik from 'storybook-formik';
import * as Yup from 'yup'

import GameTitleField, {GameTitleFieldValidator} from '../components/GameTitleField'

storiesOf('AddPlayForm', module)
  .addDecorator(withFormik)
  .add('GameTitleField', () =>
    <>
      <GameTitleField name="gameTitle" />
    </>, {
    formik: {
      initialValues: {
        gameTitle: '',
      },
      validationSchema: Yup.object().shape({
        gameTitle: GameTitleFieldValidator,
      }),
    },
  })
  
