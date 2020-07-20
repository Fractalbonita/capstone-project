import React from 'react'
import * as Yup from 'yup'

import ErrorMessage from '../../styles/StyledErrorMessage'
import StyledField from '../../styles/StyledField'
import StyledLabel from '../../styles/StyledLabel'

export default ({ name }) => (
  <>
    <StyledLabel htmlFor={name}>Game Title *</StyledLabel>
    <StyledField name={name}
      type="text"
      placeholder="e.g. Terra Mystica" />
    <ErrorMessage name={name} component="div" />
  </>
)

export const GameTitleFieldValidator = Yup
  .string()
  .max(100, `The title of the game is too long.`)
  .required(`Required`)