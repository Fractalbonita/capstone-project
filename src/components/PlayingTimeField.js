import React from 'react'
import { Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default ({ name }) => (
  <>
    <label htmlFor={name}>Playing time (min)</label>
    <Field name={name}
      inputmode="numeric"
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