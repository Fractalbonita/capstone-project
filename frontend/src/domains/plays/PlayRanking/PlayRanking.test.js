import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { queryByText, render } from '@testing-library/react'

import PlayRanking from '../PlayRanking/PlayRanking'

describe('PLayRanking', () => {
  test('should render StyledTable', () => {
    const play = { players: [] }
    const renderedStyledTable = render(<PlayRanking play={play} />)
    expect(renderedStyledTable).toBeTruthy()
  })

  test('should render table with relevant headers', () => {
    const play = { players: [] }
    const { container } = render(<PlayRanking play={play} />)
    expect(queryByText(container, 'Player').tagName).toBe('TH')
    expect(queryByText(container, 'Fraction').tagName).toBe('TH')
    expect(queryByText(container, 'Score').tagName).toBe('TH')
    expect(queryByText(container, 'Rank').tagName).toBe('TH')
  })

  test('should render table with a row for each player', () => {
    const play = {
      players: [
        { name: 'Foo' + Math.random() },
        { name: 'Bar' },
        { name: 'Buzz' },
      ],
    }
    const { container } = render(<PlayRanking play={play} />)
    expect(container.querySelectorAll('tbody tr').length).toBe(
      play.players.length
    )
    play.players.forEach(player => {
      expect(queryByText(container, player.name).tagName).toBe('TD')
    })
  })

  test('should render given fractions or placeholders', () => {
    const expectedOutput = [
      ['Smarling', 'Smarling'],
      ['Halfling', 'Halfling'],
      [null, '-/-'],
      [undefined, '-/-'],
      ['', ''],
    ]
    const play = {
      players: expectedOutput.map(([fraction, output]) => ({ fraction })),
    }
    const { container } = render(<PlayRanking play={play} />)
    expectedOutput.forEach(([fraction, output], index) => {
      const fractionCell = container.querySelector(
        `tbody tr:nth-of-type(${index + 1}) td:nth-child(2)`
      )
      expect(fractionCell.textContent).toBe(output)
    })
  })

  test('should render given scores or placeholders', () => {
    const expectedOutput = [
      [115, '115'],
      [86, '86'],
      [null, '-/-'],
      [undefined, '-/-'],
      ['', ''],
    ]
    const play = {
      players: expectedOutput.map(([score, output]) => ({ score })),
    }
    const { container } = render(<PlayRanking play={play} />)
    expectedOutput.forEach(([score, output], index) => {
      const scoreCell = container.querySelector(
        `tbody tr:nth-of-type(${index + 1}) td:nth-child(3)`
      )
      expect(scoreCell.textContent).toBe(output)
    })
  })

  test('should render given ranks or placeholders', () => {
    const expectedOutput = [
      [1, '1'],
      [2, '2'],
      [null, '-/-'],
      [undefined, '-/-'],
      ['', ''],
    ]
    const play = {
      players: expectedOutput.map(([rank, output]) => ({ rank })),
    }
    const { container } = render(<PlayRanking play={play} />)
    expectedOutput.forEach(([rank, output], index) => {
      const rankCell = container.querySelector(
        `tbody tr:nth-of-type(${index + 1}) td:nth-child(4)`
      )
      expect(rankCell.textContent).toBe(output)
    })
  })
})
