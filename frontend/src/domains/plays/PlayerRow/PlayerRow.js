import React from 'react'

export default ({ player }) => {
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
