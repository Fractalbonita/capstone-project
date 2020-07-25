import React from 'react'
import * as Yup from 'yup'
import { FieldArray } from 'formik'
import styled from 'styled-components'

import ErrorMessage from '../../styles/StyledErrorMessage'
import AddPlayerIcon from '../icons/AddPlayerIcon'
import Icon from '../../utilities/Icon'
import StyledField from '../../styles/StyledField'
import StyledLabel from '../../styles/StyledLabel'

export default ({ name, players }) => {  
  return (
  <>
    <StyledLabel htmlFor={name}>Players *</StyledLabel>
    <FieldArray
      name={name}
      render={({ remove, push }) => (
        <>
          {players.map((player, index) => (
            <>
            <StyledContainer key={index}>
              <StyledField name={`${name}.${index}.name`}
                  type="text" 
                  placeholder="e.g. Kim"
              /> 
              {index > 0 && (
                <Icon type="clear" onClick={() => remove(index)} />
              )}
            </StyledContainer>
            <ErrorMessage name={`${name}.${index}.name`} component="div" />
            </>
          ))}
          <AddPlayerIcon onClick={() => push({ name: '' })} />
        </>
      )}
    />
  </>
  )
}

export const PlayersFieldValidator = Yup
  .array()
  .of(
    Yup.object().shape({
      name: Yup
        .string()
        .min(2, 'The name should be at least 2 characters.')
        .max(21, 'The name should be maximum 20 characters.'),
    })
  )
  .required('Required')

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