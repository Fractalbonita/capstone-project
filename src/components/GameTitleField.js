import React from 'react'
import { Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default ({ name }) => (
  <>
    <label htmlFor={name}>Game title</label>
    <Field name={name}
    type="text"
    placeholder="e.g. Terra Mystica" />
    <ErrorMessage name={name} component="div" />
  </>
)

export const GameTitleFieldValidator = Yup
  .string()
  .max(100, `The title of the game is too long.`)
  .required(`Required`)