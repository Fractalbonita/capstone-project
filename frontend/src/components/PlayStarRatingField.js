import React from 'react'
import styled from 'styled-components'

import StyledLabel from '../styled-components/StyledLabel'
import StarRating from './StarRating'
import { Field } from 'formik'

export default ({ name }) => (
  <>
    <StyledLabel htmlFor={name}>Rate the Play</StyledLabel>
    <Field name={name}
      id={name}
      type="number">
        {({ field: { value }, form: { setFieldValue } }) => (
          <>
          <StarRating selectedStars={value}
            handleRating={number => setFieldValue(name, number)} />
            <StyledNumber>{value}</StyledNumber>
          </>
        )}
    </Field>
  </>
)

const StyledNumber = styled.span`
  padding-top: 6px;
  padding-bottom: 1.2rem;
  font-family: 'Karla', sans-serif;
  font-size: 16px;
  font-weight: bold;
`