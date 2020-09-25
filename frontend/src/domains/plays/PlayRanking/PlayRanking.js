import React from 'react'
import styled from 'styled-components'

import PlayerEditRow from '../PlayerEditRow/PlayerEditRow'
import PlayerRow from '../PlayerRow/PlayerRow'

export default ({ play, isEditing, onChange }) => {
  return (
    <StyledTable>
      <colgroup>
        <col />
        <col />
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th>Player</th>
          <th>Fraction</th>
          <th>Score</th>
          <th>Rank</th>
        </tr>
      </thead>
      <tbody>
        {play.players &&
          play.players.map((player, index) =>
            isEditing ? (
              <PlayerEditRow
                key={index}
                player={player}
                onChange={item => {
                  const players = [...play.players]
                  players[index] = item
                  onChange({ ...play, players })
                }}
              />
            ) : (
              <PlayerRow key={index} player={player} />
            )
          )}
      </tbody>
    </StyledTable>
  )
}

const StyledTable = styled.table`
  font-family: var(--body-font);
  font-size: 16px;
  text-align: left;
  width: 100%;

  colgroup {
    col:nth-child(1) {
      width: 10ch;
    }

    col:nth-child(3) {
      width: 6ch;
    }

    col:nth-child(4) {
      width: 6ch;
    }
  }

  thead {
    color: var(--primary);
    font-weight: bold;
    padding: 10px;
  }

  th {
    padding-bottom: 10px;
  }

  td {
    padding: 0 5px 10px 0;
    vertical-align: top;
    word-break: normal;

    &.number {
      text-align: center;
    }
  }
`
