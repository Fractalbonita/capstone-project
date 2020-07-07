import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import ReactDOM from 'react-dom'

import App from '../App'

describe('Form', () => {
  it('submits correct values', async () => {
    const { container } = render(<App />)

    /*
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    */
    
    const gameTitleInput = container.querySelector('input[name="gameTitle"]')
    const playDateInput = container.querySelector('input[name="playDate"]')
    const playersInput = container.querySelector('[name="players"]')
    const playingTimeInput = container.querySelector('input[name="playingTime"]')
    const AddPlayButton = container.querySelector('button[type="submit"]')
    const results = container.querySelector("ul");

    await wait(() => {
      fireEvent.change(gameTitleInput, {
        target: {
          value: "Die Siedler von Catan"
        }
      })
    })
    
    await wait(() => {
      fireEvent.change(playDateInput, {
        target: {
          value: "dd-mm-jjj"
        }
      })
    })
  
    await wait(() => {
      fireEvent.change(playersInput, {
        target: {
          value: "Mia, Lene, Lars, Tobi"
        }
      })
    })
  
    await wait(() => {
      fireEvent.change(playingTimeInput, {
        target: {
          value: "50"
        }
      })
    })

    await wait(() => {
      fireEvent.click(AddPlayButton)
    })
  
    await wait(() => 
    expect(results.innerHTML).toBe("Mia, Lars, Lene, Tobi"), 5)
  //    '{"gameTitle":"Die Siedler von Catan","playDate":"mm-dd-jjjj","players":"Mia, Lene, Lars, Tobi", "playingTime":"50"}'
  //  )    
  })
})