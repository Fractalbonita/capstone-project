import React from 'react'
import * as Yup from 'yup'

import ErrorMessage from '../../styles/StyledErrorMessage'
import StyledField from '../../styles/StyledField'
import StyledLabel from '../../styles/StyledLabel'

export default ({ name }) => (
  <>
    <StyledLabel htmlFor={name}>Players *</StyledLabel>
    <StyledField name={name}
      component="textarea"
      placeholder="e.g. Kim, Tom"
      rows="3" />
    <ErrorMessage name={name} component="div" />
  </>
)

export const PlayersFieldValidator = Yup
  .string()
  .matches(/,/, `Please mention at least two players separated by comma.`)
  .required(`Required`)