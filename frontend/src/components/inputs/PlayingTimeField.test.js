import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {
  getByPlaceholderText,
  getByRole,
  getByLabelText,
  render,
} from '@testing-library/react'
import { Formik } from 'formik'

import PlayingTimeField from './PlayingTimeField'

describe('PlayingTimeField', () => {
  test('should render the label "Playing Time (min)"', () => {
    const { container } = render(
      <Formik>
        <PlayingTimeField name={name} />
      </Formik>
    )
    expect(getByLabelText(container, 'Playing Time (min)')).toBeInTheDocument()
  })

  test('should render the input field of type text', () => {
    const { container } = render(
      <Formik>
        <PlayingTimeField name={name} />
      </Formik>
    )
    expect(getByLabelText(container, 'Playing Time (min)').tagName).toBe(
      'INPUT'
    )
    expect(getByRole(container, 'textbox')).toBeInTheDocument()
  })

  test('should render the placeholder "e.g. 30"', () => {
    const { container } = render(
      <Formik>
        <PlayingTimeField name={name} />
      </Formik>
    )
    expect(getByPlaceholderText(container, 'e.g. 30')).toBeInTheDocument()
  })
})
