import React from 'react'

import PlayerEditCell from '../PlayerEditCell/PlayerEditCell'

export default ({ player, onChange }) => {
  return (
    <tr>
      <PlayerEditCell 
        value={player.name}
        onChange={name => onChange({ ...player, name })} />
      <PlayerEditCell
        value={player.fraction}
        onChange={fraction => onChange({ ...player, fraction })} />
      <PlayerEditCell
        value={player.score}
        onChange={score => onChange({ ...player, score })} />
      <PlayerEditCell
        value={player.rank}
        onChange={rank => onChange({ ...player, rank })} />
    </tr>
  )
}