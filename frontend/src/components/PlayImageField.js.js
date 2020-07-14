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
        onChange={event => handleFileChange(event.target)}
        data-testid="image-upload"
      />
        {imageURL !== '' ? <StyledImage src={imageURL} /> : filename}
      </StyledLabel>
      <ErrorMessage name={name} component="div" />
    </>
  )

  function handleFileChange(target) {
    const file = target.files && target.files[0]
    setFilename(file.name)
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

export const PlayImageFieldValidator = Yup
  .mixed()
  .required('Required')
  .test(
    'Type-Check',
    'Only JPEG files are allowed.',
    file => file && file.type === 'image/jpeg')
    
const StyledImage = styled.img`
  max-width: 50%;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`

const StyledHiddenFileInput = styled.input`
  position: absolute;
  top: -1000%;
  left: -1000%;
`
