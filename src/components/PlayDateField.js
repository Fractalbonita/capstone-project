import React from 'react'
import * as Yup from 'yup'

import ErrorMessage from '../styled-components/StyledErrorMessage'
import StyledLabel from '../styled-components/StyledLabel'
import StyledField from '../styled-components/StyledField'

export default ({ name }) => (
  <>
    <StyledLabel htmlFor={name}>Date</StyledLabel>
    <StyledField name={name} type="date" /> 
    <ErrorMessage name={name} component="div" />
  </>
)

export const PlayDateFieldValidator = Yup
  .date()
  .min(new Date(1900, 0, 1))
  .required(`Required`)