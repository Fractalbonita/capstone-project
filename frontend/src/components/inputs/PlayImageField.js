import React, { useState } from 'react'
import * as Yup from 'yup'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ErrorMessage from '../../styles/StyledErrorMessage'
import ImageUploadIcon from '../icons/ImageUploadIcon'
import StyledLabel from '../../styles/StyledLabel'
import StyledClearIcon from '../../components/icons/ClearIcon'

PlayImageField.propTypes = {
  name: PropTypes.string,
  updateImageHandler: PropTypes.func,
}

export default function PlayImageField({ name, updateImageHandler }) {
  const [filename, setFilename] = useState('')
  const [imageURL, setImageURL] = useState('')

  return (
    <>
      <StyledLabel>
        <ImageUploadIcon name="imageUploadIcon" />
        <StyledHiddenFileInput
          name={name}
          type="file"
          onChange={handleFileChange}
          data-testid="image-upload"
        />
        {imageURL !== '' ? (
          <span>
            <StyledClearIcon
              style={{ display: 'block' }}
              onClick={handleFileChange}
            ></StyledClearIcon>
            <StyledImage src={imageURL} />
          </span>
        ) : (
          filename !== '' && (
            <span>
              {filename}
              <StyledClearIcon onClick={handleFileChange}></StyledClearIcon>
            </span>
          )
        )}
      </StyledLabel>
      <ErrorMessage name={name} component="div" />
    </>
  )

  function handleFileChange(event) {
    event.preventDefault()

    const target = event.target
    const file = target.files && target.files[0]

    setFilename(file ? file.name : '')
    updateImageHandler(file)

    PlayImageFieldValidator.validate(file)
      .then(() => {
        const reader = new FileReader()

        reader.addEventListener('load', () => setImageURL(reader.result))
        reader.readAsDataURL(file)
      })
      .catch(() => setImageURL(''))
  }
}

export const PlayImageFieldValidator = Yup.mixed().test(
  'Type-Check',
  'Only JPEG files are allowed.',
  file => !file || file.type === 'image/jpeg'
)

const StyledImage = styled.img`
  margin: 1rem auto;
  max-width: 50%;
`

const StyledHiddenFileInput = styled.input`
  left: -1000%;
  position: absolute;
  top: -1000%;
`
