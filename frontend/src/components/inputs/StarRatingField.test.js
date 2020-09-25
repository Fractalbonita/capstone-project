import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { getByText, render } from '@testing-library/react'
import { Formik } from 'formik'

import PlayStarRatingField from './PlayStarRatingField'

describe('PlayingTimeField', () => {
  test('should render the label "Rate the Play"', () => {
    const { container } = render(
      <Formik>
        <PlayStarRatingField name={name} />
      </Formik>
    )
    expect(getByText(container, 'Rate the Play')).toBeInTheDocument()
    expect(getByText(container, 'Rate the Play', container).tagName).toBe(
      'LABEL'
    )
  })

  test('should render the StarRating component', () => {
    const { container } = render(
      <Formik>
        <PlayStarRatingField name={name} />
      </Formik>
    )
    const rating = container.querySelector('span')
    expect(rating.textContent).toBe('star')
  })
})
