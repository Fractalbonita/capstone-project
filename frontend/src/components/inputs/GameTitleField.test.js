import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { getByPlaceholderText, getByRole, getByLabelText, render } from '@testing-library/react'
import { Formik } from 'formik'

import GameTitleField from './GameTitleField'

describe('GameTitleField', () => {
  test('should render the label "Game Title *"', () => {
    const { container } = render(<Formik><GameTitleField name={name} /></Formik>)
    expect(getByLabelText(container, 'Game Title *')).toBeInTheDocument()
  })

  test('should render the input field of type text', () => {
    const { container } = render(<Formik><GameTitleField name={name} /></Formik>)
    expect(getByLabelText(container, 'Game Title *').tagName).toBe('INPUT')
    expect(getByRole(container, 'textbox')).toBeInTheDocument()
  })

  test('should render the placeholder "e.g. Terra Mystica"', () => {
    const { container } = render(<Formik><GameTitleField name={name} /></Formik>)
    expect(getByPlaceholderText(container, 'e.g. Terra Mystica')).toBeInTheDocument()
  })
})