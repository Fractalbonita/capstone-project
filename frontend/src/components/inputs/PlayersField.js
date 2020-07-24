import React from 'react'
import * as Yup from 'yup'
import { FieldArray } from 'formik'
import styled from 'styled-components'

import AddAdditionalPlayerIcon from '../icons/AddAdditionalPlayerIcon'
import AddPlayerIcon from '../icons/AddPlayerIcon'
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
          {players && players.length > 0
            ? (
            <>
              {players.map((player, index) => (
                <StyledContainer key={index}>
                  <StyledField name={`${name}.${index}.name`} />
                  <Icon type="clear" onClick={() => remove(index)} />
                </StyledContainer>
              ))}
              <AddAdditionalPlayerIcon onClick={() => push({ name: '' })} />
            </>
            )
            : <AddPlayerIcon onClick={() => push({ name: '' })} />
          }
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
    color: var(--text-color-opaque);
    position: absolute;
    right: 10px;
  }

  & input {
    margin: 10px 0;
    padding-right: 40px;
  }
`