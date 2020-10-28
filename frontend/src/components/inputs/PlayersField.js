import React from 'react'
import * as Yup from 'yup'
import { FieldArray } from 'formik'
import PropTypes from 'prop-types'

import AddPlayerIcon from '../icons/AddPlayerIcon'
import StyledLabel from '../../styles/StyledLabel'
import PlayerField from '../inputs/PlayerField'

PlayersField.propTypes = {
  name: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object),
}

export default function PlayersField({ name, players }) {
  return (
    <>
      <StyledLabel htmlFor={name}>Players *</StyledLabel>
      <FieldArray
        name={name}
        render={({ remove, push }) => (
          <>
            {players.map((player, index) => (
              <PlayerField
                key={index}
                name={name}
                index={index}
                remove={remove}
                enableClearing={players.length > 1}
              />
            ))}
            <AddPlayerIcon onClick={() => push({ name: '' })} />
          </>
        )}
      />
    </>
  )
}

export const PlayersFieldValidator = Yup.array().of(
  Yup.object().shape({
    name: Yup.string()
      .ensure()
      .required('Required')
      .min(2, 'The name should be at least 2 characters.')
      .max(20, 'The name should be maximum 20 characters.'),
  })
)
