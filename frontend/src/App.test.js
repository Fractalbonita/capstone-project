import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter, Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { fireEvent, getByText, render } from '@testing-library/react'

import App from './App'

describe.skip('App', () => {
  test('should render without crashing', () => {
    const history = createMemoryHistory()
    const renderedApp = render(
      <Router history={history}>
        <App />
      </Router>
    )
    expect(renderedApp).toBeTruthy()
  })

  test('should render AddPlayForm', () => {
    const history = createMemoryHistory()
    const { container } = render(
      <Router history={history}>
        <App />
      </Router>
    )
    // const AddPlayForm = getByText(/Add a New Play/i)
    expect(container.innerHTML).toMatch('Plays')
    fireEvent.click
    fireEvent.click(screen.getByText('arrow_back'))
    //expect(history.push).toHaveBeenCalledWith('/log')

    //expect(container.getByText('AddPlayForm')).toBeInTheDocument()
  })

  test('should render PlayTimelinePage', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Switch>
          <App />
        </Switch>
      </BrowserRouter>
    )
    const PlayTimelinePage = getByText(/Plays/i)
    expect(PlayTimelinePage).toBeInTheDocument()
  })

  test('should render PlayOverviewPage', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Switch>
          <App />
        </Switch>
      </BrowserRouter>
    )
    const PlayDetails = getByText(/Details/i)
    expect(PlayDetails).toBeInTheDocument()
  })
})
