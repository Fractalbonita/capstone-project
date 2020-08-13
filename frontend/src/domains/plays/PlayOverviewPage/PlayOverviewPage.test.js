import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter, MemoryRouter, Route, Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { fireEvent, getByText, queryByText, render, screen, wait } from '@testing-library/react'
import axios from 'axios'

import PlayOverviewPage from './PlayOverviewPage'

// includes word Ranking as h2 
// includes word Details as h2 
// arrowbackicon exits
// link works to="/log"

// fetch playdetails from api
// includes gametitle as h1 from play
// editicon exits twice 
// renders playDetails play={play}
// renders playRanking play={play}

jest.mock('axios')

describe.skip('PlayOverviewPage', () => {
  test('should render the page', async () => {
    const history = createMemoryHistory()
    const route = '/log/1'
    history.push(route)
    const renderedPlayOverviewPage = render(<MemoryRouter initialEntries={['log/1']}><Route path="/log/:id"></Route></MemoryRouter>)
    await wait(() => {
      expect(renderedPlayOverviewPage).toBeTruthy()
    })
  })

  test.skip('should render ArrowBackIcon', async () => {
    const history = createMemoryHistory()
    const route = '/log/1'
    history.push(route)
    const { container } = render(<MemoryRouter initialEntries={['log/1']}><Route path="/log/:id" component={PlayOverviewPage}></Route></MemoryRouter>)
    await wait(() => {
      expect(getByText(container, 'arrow_back')).toBeInTheDocument()
    })
  })
    
  test.skip('should redirect to Plays page when button is clicked', async () => {
    const history = createMemoryHistory()
    const route = '/log/1'
    history.push(route)
    history.push = jest.fn()
    const { container } = render(<Router history={history}><PlayOverviewPage /></Router>)
    expect(container.innerHTML).toMatch('Details')
    fireEvent.click(screen.getByText('arrow_back'))
    expect(history.push).toHaveBeenCalledWith('/log')
  })

  test.skip('should render PlayOverviewPage with the heading "Details"', async () => {
    const history = createMemoryHistory()
    const route = '/log/1'
    history.push(route)
    const { container } = render(<MemoryRouter initialEntries={['log/1']}><Route path="/log/:id"><PlayOverviewPage /></Route></MemoryRouter>)
    await wait(() => {
      expect(queryByText(container, 'Details').tagName).toBe('H2')
    })
  })

  test.skip('should render PlayOverviewPage with the heading "Ranking"', async () => {
    const play = { 
      _id: '1',
      imageURL: '',
      gameTitle: 'Die Siedler von Catan',
      playDate: '16.8.2020',
      players: [{ name: 'Foo' }],
      playingTime: 20,
      playRating: 20,
    }
    const history = createMemoryHistory()
    const route = '/log/1'
    history.push(route)
    const { container } = render(<MemoryRouter initialEntries={['log/1']}><Route path="/log/:id"><PlayOverviewPage play={play}/></Route></MemoryRouter>)
    await wait(() => {
      expect(getByText(container, 'Ranking')).toBeInTheDocument()
    })
  })
})