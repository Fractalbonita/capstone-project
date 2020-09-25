import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { getByLabelText, render } from '@testing-library/react'
import { Formik } from 'formik'

import PlayDateField from './PlayDateField'

describe('PlayDateField', () => {
  test('should render the label "Date *"', () => {
    const { container } = render(
      <Formik>
        <PlayDateField name={name} />
      </Formik>
    )
    expect(getByLabelText(container, 'Date *')).toBeInTheDocument()
  })

  test('should render the input field of type text', () => {
    const { container } = render(
      <Formik>
        <PlayDateField name={name} />
      </Formik>
    )
    expect(getByLabelText(container, 'Date *').tagName).toBe('INPUT')
  })
})
