import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { queryByText, render } from '@testing-library/react'

import PlayCollection from '../PlayCollection/PlayCollection'
  
describe('PlayCollection', () => {
  test('should render page', async () => {
    const plays = []
    const renderedPlayCollection = render(<PlayCollection plays={plays} />)
    expect(renderedPlayCollection).toBeTruthy()
  })

  test('should render heading "Plays"', async () => {
    const plays = []
    const { container } = render(<PlayCollection plays={plays} />)
    expect(queryByText(container, 'Plays').tagName).toBe('H1')
  })

  test('should render PlayCollection with plays', async () => {
    const plays = [
      {
        _id: '1',
        imageURL: '',
        gameTitle: 'Die Siedler von Catan',
        playDate: '16.8.2020',
        playRating: '5'
      },
      {
        _id: '2',
        imageURL: '',
        gameTitle: 'Gaja Project',
        playDate: '18.6.2020',
        playRating: '10'
      },
      {
        _id: '3',
        imageURL: '',
        gameTitle: 'Dungeon Lords',
        playDate: '12.4.2020',
        playRating: '8'
      }
    ]
    const { container } = render(<BrowserRouter>
      <PlayCollection plays={plays} />
    </BrowserRouter>)
    plays.forEach(play => {
      expect(queryByText(container, play.gameTitle)).toBeInTheDocument()
    })
  })

  test('should render plays in correct order', async () => {
    const plays = [
      {
        _id: '1',
        imageURL: '',
        gameTitle: 'Die Siedler von Catan',
        playDate: '16.8.2020',
        playRating: '5'
      },
      {
        _id: '2',
        imageURL: '',
        gameTitle: 'Gaja Project',
        playDate: '18.6.2020',
        playRating: '10'
      },
      {
        _id: '3',
        imageURL: '',
        gameTitle: 'Dungeon Lords',
        playDate: '12.4.2020',
        playRating: '8'
      }
    ]
    const reversedPlays = plays.slice().reverse()
    const { container } = render(<BrowserRouter>
      <PlayCollection plays={plays} />
    </BrowserRouter>)
    const renderedGameTitles = container.querySelectorAll('h3')
    reversedPlays.forEach((play, index) => {
      expect(renderedGameTitles[index].textContent)
        .toBe(play.gameTitle)
    })
  })
})