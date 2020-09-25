import React from 'react'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

import ErrorMessage from '../../styles/StyledErrorMessage'
import StyledField from '../../styles/StyledField'
import StyledLabel from '../../styles/StyledLabel'

PlayingTimeField.propTypes = {
  name: PropTypes.string,
}

export default function PlayingTimeField({ name }) {
  return (
    <>
      <StyledLabel htmlFor={name}>Playing Time (min)</StyledLabel>
      <StyledField
        name={name}
        id={name}
        inputMode="numeric"
        pattern="[0-9]*"
        placeholder="e.g. 30"
      />
      <ErrorMessage name={name} component="div" />
    </>
  )
}

export const PlayingTimeFieldValidator = Yup.number()
  .typeError('Please mind that only numbers are allowed.')
  .integer(`The playing time must be an integer number.`)
  .positive(`The playing time must be a positive number.`)
  .max(720, `Congrats! You played so many hours. The maximum is 720.`)
  .nullable()
  .notRequired()
