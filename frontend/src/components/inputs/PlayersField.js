import React from 'react'
import * as Yup from 'yup'
import { FieldArray, getIn } from 'formik'
import styled from 'styled-components'

import AddPlayerIcon from '../icons/AddPlayerIcon'
import ErrorMessage from '../../styles/StyledErrorMessage'
import Icon from '../../utilities/Icon'
import StyledField from '../../styles/StyledField'
import StyledLabel from '../../styles/StyledLabel'

export default ({ name, players }) => {  
  const PlayerArrayErrors = errors =>
    typeof errors.players === 'string' ? <div>{errors.players}</div> : null
  
  return (
  <>
    <StyledLabel htmlFor={name}>Players *</StyledLabel>
    <FieldArray
      name={name}
      render={({ remove, push }) => (
        <>
          {players.map((player, index) => (
            <StyledContainer key={index}>
              <StyledField name={`${name}.${index}.name`}
              /> 
              {index > 0 && (
                <Icon type="clear" onClick={() => remove(index)} />
              )}
            </StyledContainer>
          ))}
          <AddPlayerIcon onClick={() => push({ name: '' })} />
        </>
      )}
    />
    <ErrorMessage name={name} component="div" />

  </>
  )
}

export const PlayersFieldValidator = Yup
    .array()
    .of(
      Yup.object().shape({
        name: Yup
          .string()
          .required('Required')
          .min(3, 'The name should be at least 3 characters.')
          .max(20, 'The name should be less than 21 characters.'),
      })
    )
    .required(`Required`)
    .min(1, 'Please enter at least one player.')

const StyledContainer = styled.div`
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  & span {
    color: var(--text-color-opaque);
    position: absolute;
    right: 10px;
  }

  & input {
    margin: 10px 0;
    padding-right: 40px;
  }
`