import React, {useState} from 'react'
import * as Yup from 'yup'
import styled from 'styled-components'

import ErrorMessage from '../styled-components/StyledErrorMessage'
import StyledLabel from '../styled-components/StyledLabel'
import StyledField from '../styled-components/StyledField'

export default ({ name, updateImageHandler }) => {
  const [fileName, setFilename] = useState('')
  const [imageURL, setImageURL] = useState('')

  return (
    <>
      <StyledLabel>Add a Photo of the Play
      <StyledHiddenFileInput name={name}
        type="file"
        onChange={event => {
          const file = event.target.files && event.target.files[0]
          updateImageHandler(file)
          setFilename(file.name)
          if (file) {
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
    </>
  )
}

export const GameBoardImageValidator = Yup
  .mixed()
  .notRequired()

const StyledImage = styled.img`
  max-width: 90%;
`

const StyledHiddenFileInput = styled.input`
  position: absolute;
  top: -1000%;
  left: -1000%;
`
