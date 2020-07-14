import React from 'react'
import * as Yup from 'yup'

import ErrorMessage from '../styled-components/StyledErrorMessage'
import StyledLabel from '../styled-components/StyledLabel'
import StyledField from '../styled-components/StyledField'

export default ({ name }) => (
  <>
    <StyledLabel htmlFor={name}>Playing Time (min)</StyledLabel>
    <StyledField name={name}
      inputMode="numeric"
      pattern="[0-9]*"
      placeholder="e.g. 30" />
    <ErrorMessage name={name} component="div" />
  </>
)

export const PlayingTimeFieldValidator = Yup
  .number()
  .typeError('Please mind that only numbers are allowed.')
  .integer(`The playing time must be an integer number.`)
  .positive(`The playing time must be a positive number.`)
  .max(720, `You played too many hours. The maximum is 720.`)
  .nullable()
  .notRequired()