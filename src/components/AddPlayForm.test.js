import React from 'react'
import { render, fireEvent, wait, getByText, getAllByText } from '@testing-library/react'

import App from '../App'

describe('Form', () => {
  test('should prohibit submit when no data is present', async () => {
    const { container } = render(<App />)
    await wait(() => {
      fireEvent.click(container.querySelector('button[type="submit"]'))
    })
    expect(getAllByText(container, 'Required').length).toBe(3) 
  })

  test('should prohibit submit when game title is too long', async () => {
    const { container } = render(<App />)
    await wait(() => {
      fireEvent.change(container.querySelector('[name=gameTitle]'), {
        target: {
          value: 'a'.repeat(101)
        }
      })
    })
    await wait(() => {
      fireEvent.click(container.querySelector('button[type="submit"]'))
    })
    expect(getByText(container, 'The title of the game is too long.')).toBeTruthy()
  })

  test('should prohibit submit when players are not separated by comma', async () => {
    const { container } = render(<App />)
    await wait(() => {
      fireEvent.change(container.querySelector('[name=players]'), {
        target: {
          value: 'Max Tom Linus'
        }
      })
    })
    await wait(() => {
      fireEvent.click(container.querySelector('button[type="submit"]'))
    })
    expect(getByText(container, 'Please mention at least two players separated by comma.')).toBeTruthy()
  })

  test('should prohibit submit when playing time is written with alphabetic characters', async () => {
    const { container } = render(<App />)
    await wait(() => {
      fireEvent.change(container.querySelector('[name=playingTime]'), {
        target: {
          value: 'foo'
        }
      })
    })
    await wait(() => {
      fireEvent.click(container.querySelector('button[type="submit"]'))
    })
    expect(getByText(container, 'Please mind that only numbers are allowed.')).toBeTruthy()
  })

  test('should prohibit submit when playing time is a floating number', async () => {
    const { container } = render(<App />)
    await wait(() => {
      fireEvent.change(container.querySelector('[name=playingTime]'), {
        target: {
          value: '90.5'
        }
      })
    })
    await wait(() => {
      fireEvent.click(container.querySelector('button[type="submit"]'))
    })
    expect(getByText(container, 'The playing time must be an integer number.')).toBeTruthy()
  })

  test('should prohibit submit when playing time is a negative number', async () => {
    const { container } = render(<App />)
    await wait(() => {
      fireEvent.change(container.querySelector('[name=playingTime]'), {
        target: {
          value: '-30'
        }
      })
    })
    await wait(() => {
      fireEvent.click(container.querySelector('button[type="submit"]'))
    })
    expect(getByText(container, 'The playing time must be a positive number.')).toBeTruthy()
  })

  test('should prohibit submit when playing time is a negative number', async () => {
    const { container } = render(<App />)
    await wait(() => {
      fireEvent.change(container.querySelector('[name=playingTime]'), {
        target: {
          value: '1000'
        }
      })
    })
    await wait(() => {
      fireEvent.click(container.querySelector('button[type="submit"]'))
    })
    expect(getByText(container, 'You played too many hours. The maximum is 720.')).toBeTruthy()
  })

  test('should submit correct values', async () => {
    const { container } = render(<App />)

    const insertGameTitle = 'Die Siedler von Catan'
    const insertPlayDate = '1989-02-20'
    const insertPlayers = 'Mia, Lene'
    const insertPlayTime = '50'
    const insertPlayRating = '3'

    await wait(() => {
      fireEvent.change(container.querySelector('input[name="gameTitle"]'), {
        target: {
          value: insertGameTitle
        }
      })
    })
    
    await wait(() => {
      fireEvent.change(container.querySelector('input[name="playDate"]'), {
        target: {
          value: insertPlayDate
        }
      })
    })
  
    await wait(() => {
      fireEvent.change(container.querySelector('textarea'), {
        target: {
          value: insertPlayers
        }
      })
    })
  
    await wait(() => {
      fireEvent.change(container.querySelector('input[name="playingTime"]'), {
        target: {
          value: insertPlayTime
        }
      })
    })

    await wait(() => {
      fireEvent.change(container.querySelector('input[name="playRating"]'), {
        target: {
          value: insertPlayRating
        }
      })
    })

    await wait(() => {
      fireEvent.click(container.querySelector('button[type="submit"]'))
    })

    const insertedPlays = container.querySelectorAll("ul li");
    expect(insertedPlays.length).toBe(1)

    const insertedPlayValues = insertedPlays[0].querySelectorAll("p")
    expect(insertedPlayValues[0].textContent).toBe(insertGameTitle)
    expect(insertedPlayValues[1].textContent).toBe(insertPlayDate)
    expect(insertedPlayValues[2].textContent).toBe(insertPlayers)
    expect(insertedPlayValues[3].textContent).toBe(insertPlayTime)
    expect(insertedPlayValues[4].textContent).toBe(insertPlayRating)
  })
})