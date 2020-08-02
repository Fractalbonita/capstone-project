import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter, Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { fireEvent, queryByText, render, screen, waitForElement, wait } from '@testing-library/react'
import axios from 'axios'

import PlayTimelinePage from '../PlayTimelinePage/PlayTimelinePage'

jest.mock('axios')

describe('PlayTimelinePage', () => {
  test('should render the page', async () => {
    axios.get.mockResolvedValue({
      data: [],
    })
    const renderedPlayTimelinePage = render(<BrowserRouter><PlayTimelinePage /></BrowserRouter>)
    await wait(() => {
      expect(renderedPlayTimelinePage).toBeTruthy()
    })
  }) 

  test('should render PlayCollection with the heading "Plays"', async () => {
    axios.get.mockResolvedValue({
      data: [],
    })
    const { container } = render(<BrowserRouter><PlayTimelinePage /></BrowserRouter>)
    await wait(() => {
      expect(queryByText(container, 'Plays').tagName).toBe('H1')
    })
  })

  test('should render AddPlayIcon', async () => {
    axios.get.mockResolvedValue({
      data: [],
    })
    render(<BrowserRouter><PlayTimelinePage /></BrowserRouter>)
    const button = await waitForElement(() => screen.getByText('add'))
    expect(button).toBeInTheDocument()
  })

  test('should link to AddPlayForm when AddPlayIcon is clicked', async () => {
    axios.get.mockResolvedValue({
      data: [],
    })
    const history = createMemoryHistory()
    history.push = jest.fn()
    const { container } = render(<Router history={history}><PlayTimelinePage /></Router>)
    await wait(() => {
      expect(container.innerHTML).toMatch('Plays')
      fireEvent.click(screen.getByText('add'))
      expect(history.push).toHaveBeenCalledWith('/log/addplay')
    })
  })
})