import React from 'react'
import PropTypes from 'prop-types'

PlayerRow.propTypes = {
  player: PropTypes.objectOf(PropTypes.string),
}

export default function PlayerRow({ player }) {
  return (
    <tr>
      <Cell>{player.name}</Cell>
      <Cell>{player.fraction}</Cell>
      <Cell className="number">{player.score}</Cell>
      <Cell className="number">{player.rank}</Cell>
    </tr>
  )
}

const Cell = ({ children, ...props }) => (
  <td {...props}>{children != null ? children : '-/-'}</td>
)
