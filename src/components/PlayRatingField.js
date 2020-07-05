import React, {useState} from 'react'
import { Field, ErrorMessage } from 'formik'

export default ({ name }) => {
  const [value, setValue] = useState(5)
  return (
    <>
      <label htmlFor={name}>Rate the play</label>
      <Field name={name}
        type="range"
        min="1"
        max="10"
        onInput={rating => setValue(rating.target.value)}
        step="1" />
      <ErrorMessage name={name} component="div" />
      <span>{value}</span>
    </>
  )
}
