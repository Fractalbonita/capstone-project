import React from 'react'
import { render } from '@testing-library/react'
import ReactDOM from 'react-dom'

import App from './App'

describe('App is properly loaded and', () => {
  test('should render AddPlayForm', () => {
    const { getByText } = render(<App />)
    const AddPlayForm = getByText(/Add Play/i)
    expect(AddPlayForm).toBeInTheDocument()
  })

  test('should render PlayCollection', () => {
    const { getByText } = render(<App />)
    const PlayCollection = getByText(/Plays/i)
    expect(PlayCollection).toBeInTheDocument()
  })

  test('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })
})

