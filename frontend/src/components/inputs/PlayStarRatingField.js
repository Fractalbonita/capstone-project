import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Field } from 'formik'
import StyledLabel from '../../styles/StyledLabel'
import StarRating from '../StarRating/StarRating'

PlayStarRatingField.propTypes = {
  name: PropTypes.string,
}

export default function PlayStarRatingField({ name }) {
  return (
    <>
      <StyledLabel htmlFor={name}>Rate the Play</StyledLabel>
      <Field name={name} id={name} type="number">
        {({ field: { value }, form: { setFieldValue } }) => (
          <>
            <StarRating
              selectedStars={value}
              handleRating={number => setFieldValue(name, number)}
            />
            <StyledNumber>{value}</StyledNumber>
          </>
        )}
      </Field>
    </>
  )
}

const StyledNumber = styled.span`
  font-family: 'Karla', sans-serif;
  font-size: 16px;
  font-weight: bold;
  padding-top: 6px;
  padding-bottom: 1.2rem;
`
