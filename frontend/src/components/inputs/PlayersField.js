import React from 'react'
import * as Yup from 'yup'
import { FieldArray } from 'formik'
import styled from 'styled-components'

import Icon from '../../utilities/Icon'
import StyledField from '../../styles/StyledField'
import StyledLabel from '../../styles/StyledLabel'

export default ({ name, players }) => (
  <>
    <StyledLabel htmlFor={name}>Players *</StyledLabel>
    <FieldArray 
      name={name}
      render={({remove, push}) => (
        <>
          {players.map((player, index) => (
            <StyledContainer key={index}>
              <StyledField name={`${name}.${index}.name`} />
              <Icon type="delete" onClick={() => remove(index)} />
            </StyledContainer>
          ))}
          <Icon type="add" onClick={() => push({name:''})}></Icon> 
        </>
      )}
    />
    
    
  </>
)

export const PlayersFieldValidator = Yup
  .string()
  .matches(/,/, `Please mention at least two players separated by comma.`)
  .required(`Required`)

const StyledContainer = styled.div`
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  & span {
    position: absolute;
    right: 10px;
  }

  & input {
    padding-right: 40px;
  }
`