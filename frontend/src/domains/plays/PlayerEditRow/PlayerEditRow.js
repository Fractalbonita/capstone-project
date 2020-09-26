import React from 'react'
import PropTypes from 'prop-types'

import PlayerEditCell from '../../../components/inputs/Input'

PlayEditRow.propTypes = {
  player: PropTypes.objectOf(PropTypes.string),
  onChange: PropTypes.func,
}

export default function PlayEditRow({ player, onChange }) {
  return (
    <tr>
      <td>
        <PlayerEditCell
          name="name"
          type="text"
          value={player.name}
          onChange={name => onChange({ ...player, name })}
        />
      </td>
      <td>
        <PlayerEditCell
          name="fraction"
          type="text"
          value={player.fraction}
          onChange={fraction => onChange({ ...player, fraction })}
        />
      </td>
      <td>
        <PlayerEditCell
          name="score"
          type="text"
          value={player.score}
          onChange={score => onChange({ ...player, score })}
        />
      </td>
      <td>
        <PlayerEditCell
          name="rank"
          type="text"
          value={player.rank}
          onChange={rank => onChange({ ...player, rank })}
        />
      </td>
    </tr>
  )
}
