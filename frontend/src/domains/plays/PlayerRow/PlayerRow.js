import React from 'react'

export default ({ player }) => {
  return (
    <tr>
      <td>{player.name}</td>
      <td>{player.fraction != null
        ? player.fraction
        : '-/-'}
      </td>
      <td className="number">{player.score != null
        ? player.score
        : '-/-'}
      </td>
      <td className="number">{player.rank != null
        ? player.rank
        : '-/-'}
      </td>
    </tr>
  )
}