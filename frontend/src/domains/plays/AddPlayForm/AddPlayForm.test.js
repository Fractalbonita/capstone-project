import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { fireEvent, getByText, getAllByText, render, wait } from '@testing-library/react'

import AddPlayForm from './AddPlayForm'

describe('Form', () => {
  test('should render heading', async () => {
    const { queryByText } = render(<BrowserRouter><AddPlayForm /></BrowserRouter>)
    expect(queryByText('Add a New Play to your Timeline')).toBeTruthy()
  })

  test('should prohibit submit when no data is present', async () => {
    const { container } = render(<BrowserRouter><AddPlayForm /></BrowserRouter>)
    await wait(() => {
      fireEvent.click(container.querySelector('button[type="submit"]'))
    })
    expect(getAllByText(container, 'Required').length).toBe(3) 
  })

  test('should prohibit submit when uploaded file is not of type JPEG', async () => {
    const { container } = render(<BrowserRouter><AddPlayForm /></BrowserRouter>)
    await wait(() => {
      fireEvent.change(container.querySelector('[name=playImage]'), {
        target: {
          files: ['.gif']
        }
      })
    })
    await wait(() => {
      fireEvent.click(container.querySelector('button[type="submit"]'))
    })
    expect(getAllByText(container, 'Only JPEG files are allowed.')).toBeTruthy()
  })

  test('should prohibit submit when game title is too long', async () => {
    const { container } = render(<BrowserRouter><AddPlayForm /></BrowserRouter>)
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

  test('should prohibit submit when no player is entered', async () => {
    const { container } = render(<BrowserRouter><AddPlayForm /></BrowserRouter>)
    await wait(() => {
      fireEvent.click(container.querySelector('button[type="submit"]'))
    })
    expect(getByText(container.querySelector('[id="players-0-name"]'), 'Required')).toBeTruthy()
  })

  test('should prohibit submit when the name of the player is too short', async () => {
    const { container } = render(<BrowserRouter><AddPlayForm /></BrowserRouter>)
    await wait(() => {
      fireEvent.change(container.querySelector('[name="players.0.name"]'), {
        target: {
          value: 'a'
        }
      })
    })
    await wait(() => {
      fireEvent.click(container.querySelector('button[type="submit"]'))
    })
    expect(getByText(container, 'The name should be at least 2 characters.')).toBeTruthy()
  })

  test('should prohibit submit when the name of the player is too long', async () => {
    const { container } = render(<BrowserRouter><AddPlayForm /></BrowserRouter>)
    await wait(() => {
      fireEvent.change(container.querySelector('[name="players.0.name"]'), {
        target: {
          value: 'a'.repeat(21)
        }
      })
    })
    await wait(() => {
      fireEvent.click(container.querySelector('button[type="submit"]'))
    })
    expect(getByText(container, 'The name should be maximum 20 characters.')).toBeTruthy()
  })

  test('should prohibit submit when playing time is written with alphabetic characters', async () => {
    const { container } = render(<BrowserRouter><AddPlayForm /></BrowserRouter>)
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
    const { container } = render(<BrowserRouter><AddPlayForm /></BrowserRouter>)
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
    const { container } = render(<BrowserRouter><AddPlayForm /></BrowserRouter>)
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
    const { container } = render(<BrowserRouter><AddPlayForm /></BrowserRouter>)
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
    expect(getByText(container, 'Congrats! You played so many hours. The maximum is 720.')).toBeTruthy()
  })

  test('should submit correct values', async () => {
    const { container } = render(<BrowserRouter><AddPlayForm /></BrowserRouter>)

    const insertPlayImage = '.jpg'
    const insertGameTitle = 'Die Siedler von Catan'
    const insertPlayDate = '1989-02-20'
    const insertPlayers = 'Mia'
    const insertPlayTime = '50'
    const insertPlayRating = '3'

    await wait(() => {
      fireEvent.change(container.querySelector('input[name="playImage"]'), {
        target: {
          files: [insertPlayImage]
        }
      })
    })

    await wait(() => {
      fireEvent.change(container.querySelector('input[name="gameTitle"]'), {
        target: {
          value: insertGameTitle
        }
      })
    })
    
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
      fireEvent.change(container.querySelector('[name="players.0.name"]'), {
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
      fireEvent.click(container.querySelector(`.material-icons.star:nth-of-type(${insertPlayRating})`))
    })

    await wait(() => {
      fireEvent.click(container.querySelector('button[type="submit"]'))
    })
  })
})