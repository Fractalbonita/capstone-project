import React from 'react'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

import ErrorMessage from '../../styles/StyledErrorMessage'
import StyledField from '../../styles/StyledField'
import StyledLabel from '../../styles/StyledLabel'

CommentField.propTypes = {
  name: PropTypes.string,
}

export default function CommentField({ name }) {
  return (
    <>
      <StyledLabel htmlFor={name}>Add a comment</StyledLabel>
      <StyledField
        name={name}
        id={name}
        component="textarea"
        placeholder="e.g. notes on strategy ..."
        rows="4"
      />
      <ErrorMessage name={name} component="div" />
    </>
  )
}

export const CommentFieldValidator = Yup.string()
  .max(400, 'Keep your note short.')
  .notRequired()
