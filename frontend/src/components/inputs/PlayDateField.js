import React from 'react'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

import ErrorMessage from '../../styles/StyledErrorMessage'
import StyledField from '../../styles/StyledField'
import StyledLabel from '../../styles/StyledLabel'

PlayDateField.propTypes = {
  name: PropTypes.string,
}

export default function PlayDateField({ name }) {
  return (
    <>
      <StyledLabel htmlFor={name}>Date *</StyledLabel>
      <StyledField name={name} id={name} type="date" />
      <ErrorMessage name={name} component="div" />
    </>
  )
}

export const PlayDateFieldValidator = Yup.date()
  .min(new Date(1900, 0, 1))
  .required(`Required`)
