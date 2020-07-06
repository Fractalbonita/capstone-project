import React, {useState} from 'react'
import styled from 'styled-components'

import ErrorMessage from './styled-components/StyledErrorMessage'
import StyledLabel from './styled-components/StyledLabel'
import StyledField from './styled-components/StyledField'

export default ({ name }) => {
  const [value, setValue] = useState(5)
  return (
    <>
      <StyledLabel htmlFor={name}>Rate the Play</StyledLabel>
      <StyledField name={name}
        type="range"
        min="1"
        max="10"
        onInput={rating => setValue(rating.target.value)}
        step="1" />
      <ErrorMessage name={name} component="div" />
      <StyledNumber>{value}</StyledNumber>
    </>
  )
}

const StyledNumber = styled.span`
  padding-top: 6px;
  padding-bottom: 16px;
`