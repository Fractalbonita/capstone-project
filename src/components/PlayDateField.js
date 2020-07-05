import React from 'react'
import { Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default ({ name }) => (
  <>
    <label htmlFor={name}>Date</label>
    <Field name={name} type="date"/>
    <ErrorMessage name={name} component="div" />
  </>
)

export const PlayDateFieldValidator = Yup
  .date()
  .min(new Date(1900, 0, 1))
  .required(`Required`)