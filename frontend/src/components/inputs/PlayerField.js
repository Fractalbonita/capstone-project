import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ErrorMessage from '../../styles/StyledErrorMessage'
import Icon from '../../utilities/Icon'
import StyledField from '../../styles/StyledField'

PlayerField.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
  remove: PropTypes.func,
  enableDeletion: PropTypes.bool,
}

export default function PlayerField({ name, index, remove, enableDeletion }) {
  return (
    <div id={`${name}-${index}-name`} style={{ width: '100%' }}>
      <StyledContainer>
        <StyledField
          name={`${name}.${index}.name`}
          type="text"
          placeholder="e.g. Kim"
        />
        {enableDeletion && <Icon type="clear" onClick={() => remove(index)} />}
      </StyledContainer>
      <ErrorMessage name={`${name}.${index}.name`} component="div" />
    </div>
  )
}

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  span {
    color: var(--text-color-opaque);
    position: absolute;
    right: 10px;
  }

  input {
    margin: 10px 0;
    padding-right: 40px;
  }
`
