import '@testing-library/jest-dom/extend-expect'

import React from 'react'
import { render } from '@testing-library/react'

import Icon from './Icon'

describe('Icon', () => {
  test('should render an material icon', () => {
    const { container } = render(<Icon type="star" />)
    expect(container.innerHTML).toBe('<span class="material-icons">star</span>')
  })

  test('should render an icon of the given type', () => {
    const { queryByText } = render(
      <>
        <Icon type="star" />
        <Icon type="add" />
      </>
    )
    expect(queryByText('star')).toBeTruthy()
    expect(queryByText('add')).toBeTruthy()
    expect(queryByText('clear')).toBeFalsy()
  })

  test('should propagate events', () => {
    let clicked = false
    const { getByText } = render(
      <Icon type="star" onClick={() => (clicked = true)} />
    )
    getByText('star').click()
    expect(clicked).toBe(true)
  })
})
