import React from 'react'
import styled from 'styled-components'

export default ( { play }) => (
  <>
  <h2>Ranking</h2>
      <StyledTable>
        <thead>
          <tr>
            <th>Player</th>
            <th>Fraction</th>
            <th>Score</th>
            <th>Rank</th>
          </tr>
        </thead>
      <tbody>
        {play.players && play.players.map((player) => (
          <tr key={play._id + player.name}>
            <td>{player.name}</td>
            <td>{player.fraction != null ? player.fraction : '-/-'}</td>
            <td className="number">{player.score != null ? player.score : '-/-'}</td>
            <td className="number">{player.rank != null ? player.rank : '-/-'}</td>
            
          </tr>
          ))}
        </tbody>
    </StyledTable>
  </>
)

const StyledTable = styled.table`
  font-family: var(--body-font);
  font-size: 16px;
  margin-bottom: 1rem;
  text-align: left;
  width: 100%;

  & thead {
    color: var(--primary);
    font-weight: bold;
    padding: 10px;
  }

  & th {
    padding-bottom: 10px;
  }

  & td {
    padding: 5px;
    vertical-align: top;
    word-break: normal;

    &.number {
      text-align: center;
    }
  }
`