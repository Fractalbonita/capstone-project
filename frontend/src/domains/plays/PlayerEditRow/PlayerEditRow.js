import React from 'react'

import PlayerEditCell from '../../../components/inputs/Input'

export default ({ player, onChange }) => {
  return (
    <tr>
      <td>
        <PlayerEditCell 
          id="name"
          name="name"
          type="text"
          value={player.name}
          onChange={name => onChange({ ...player, name })} />
      </td>
        <td>
        <PlayerEditCell
          id="fraction"
          name="fraction"
          type="text"
          value={player.fraction}
          onChange={fraction => onChange({ ...player, fraction })} />
        </td>
      <td>
        <PlayerEditCell
          id="score"
          name="score"
          type="text"
          value={player.score}
          onChange={score => onChange({ ...player, score })} />
      </td>
      <td>
        <PlayerEditCell
          id="rank"
          name="rank"
          type="text"
          value={player.rank}
          onChange={rank => onChange({ ...player, rank })} />
      </td>
    </tr>
  )
}