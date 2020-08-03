import React from 'react'

import PlayerEditRow from '../PlayerEditRow/PlayerEditRow'

export default {
  title: 'PlayerEditRow',
  component: PlayerEditRow,
}

export const playerEditRow = () => <PlayerEditRow player={player} onChange={onChange} />


