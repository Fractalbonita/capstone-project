import React, {useState} from 'react'
import * as Yup from 'yup'
import styled from 'styled-components'

import ErrorMessage from '../styled-components/StyledErrorMessage'
import StyledLabel from '../styled-components/StyledLabel'
import ImageUploadIcon from './ImageUploadIcon'

export default ({ name, updateImageHandler }) => {
  const [filename, setFilename] = useState('')
  const [imageURL, setImageURL] = useState('')

  return (
    <>
      <StyledLabel>
      <ImageUploadIcon name="imageUploadIcon" />
      <StyledHiddenFileInput name={name}
        type="file"
        onChange={event => {
          const file = event.target.files && event.target.files[0]
          const isValid = file && file.type === 'image/jpeg'
          updateImageHandler(isValid ? file : undefined)
          setFilename(isValid ? file.name : '')
          if (isValid) {
            const reader = new FileReader()
            reader.addEventListener('load', () => setImageURL(reader.result))
            reader.readAsDataURL(file)
          } else {
            setImageURL('')
          }
        }}
      />
        {imageURL !== '' && <StyledImage src={imageURL} />}
      </StyledLabel>
      <ErrorMessage name={name} component="div" />
    </>
  )
}

export const GameBoardImageValidator = Yup
  .mixed()
  .notRequired()

const StyledImage = styled.img`
  max-width: 50%;
  margin-top: 1rem;
`

const StyledHiddenFileInput = styled.input`
  position: absolute;
  top: -1000%;
  left: -1000%;
`
