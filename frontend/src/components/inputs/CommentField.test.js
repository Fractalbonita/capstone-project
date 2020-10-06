import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {
  getByLabelText,
  getByPlaceholderText,
  render,
} from '@testing-library/react'
import { Formik } from 'formik'

import CommentField from './CommentField'

describe('CommentField', () => {
  test('should render the label "Add a comment"', () => {
    const { container } = render(
      <Formik>
        <CommentField name={name} />
      </Formik>
    )
    expect(getByLabelText(container, 'Add a comment')).toBeInTheDocument()
  })

  test('should render the input field', () => {
    const { container } = render(
      <Formik>
        <CommentField name={name} />
      </Formik>
    )
    expect(getByLabelText(container, 'Add a comment').tagName).toBe('INPUT')
  })

  test('should render the placeholder "e.g. notes on strategy ...', () => {
    const { container } = render(
      <Formik>
        <CommentField name={name} />
      </Formik>
    )
    expect(
      getByPlaceholderText(container, 'e.g. notes on strategy ...')
    ).toBeInTheDocument()
  })
})
