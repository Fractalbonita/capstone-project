import React from 'react'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

import ErrorMessage from '../../styles/StyledErrorMessage'
import StyledField from '../../styles/StyledField'
import StyledLabel from '../../styles/StyledLabel'

GameTitleField.propTypes = {
  name: PropTypes.string,
}

export default function GameTitleField({ name }) {
  return (
    <>
      <StyledLabel htmlFor={name}>Game Title *</StyledLabel>
      <StyledField
        name={name}
        id={name}
        type="text"
        placeholder="e.g. Terra Mystica"
      />
      <ErrorMessage name={name} component="div" />
    </>
  )
}

export const GameTitleFieldValidator = Yup.string()
  .max(100, `The title of the game is too long.`)
  .required(`Required`)
