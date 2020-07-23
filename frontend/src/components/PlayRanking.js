import React from 'react'
import styled from 'styled-components'

export default () => (
  <>
  <h2>Ranking</h2>
      <StyledTable>
        <thead>
          <tr>
            <th>Player</th>
            <th>Fraction</th>
            <th>Rank</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Player</td>
            <td>Fraction</td>
            <td>Rank</td>
            <td>Score</td>
          </tr>
          <tr>
            <td>Player</td>
            <td>Fraction</td>
            <td>Rank</td>
            <td>Score</td>
          </tr>
          <tr>
            <td>Player</td>
            <td>Fraction</td>
            <td>Rank</td>
            <td>Score</td>
          </tr>
          <tr>
            <td>Player Player</td>
            <td>Fraction</td>
            <td>Rank</td>
            <td>Score</td>
          </tr>
        </tbody>
    </StyledTable>
  </>
)

const StyledTable = styled.table`
  font-family: var(--body-font);
  margin-bottom: 1rem;
  table-layout: fixed;
  text-align: left;
  width: 100%;

  & thead {
    color: var(--primary);
    font-weight: bold;
    padding: 10px;
  }

  & td {
    vertical-align: top;
    word-break: normal;
  }
`