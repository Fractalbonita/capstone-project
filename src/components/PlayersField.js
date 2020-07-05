import React from 'react'
import { Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default ({ name }) => (
  <>
    <label htmlFor={name}>Players</label>
    <Field name={name}
      as="textarea"
      placeholder="e.g. Kim, Tom"
      rows="3" />
    <ErrorMessage name={name} component="div" />
  </>
)

export const PlayersFieldValidator = Yup
    .string()
    .matches(/,/, `Please mention at least two players separated by comma.`)
    .required(`Required`)