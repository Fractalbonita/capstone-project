import React from 'react'

import StyledLabel from '../styled-components/StyledLabel'
// import StyledField from '../styled-components/StyledField'
import StarRating from './StarRating'
import { Field } from 'formik'

export default ({ name }) => (
  <>
    <StyledLabel htmlFor={name}>Rate the Play</StyledLabel>
    <Field name={name}
      id={name}
      type="number">
      {({ field: { value }, form: { setFieldValue } }) => (
        <StarRating selectedStars={value}
          handleRating={number => setFieldValue(name, number)} />
      )}
    </Field>
  </>
)