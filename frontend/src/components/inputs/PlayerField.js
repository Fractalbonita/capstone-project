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
  enableClearing: PropTypes.bool,
}

export default function PlayerField({ name, index, remove, enableClearing }) {
  return (
    <div id={`${name}-${index}-name`} style={{ width: '100%' }}>
      <StyledContainer>
        <StyledField
          name={`${name}.${index}.name`}
          type="text"
          placeholder="e.g. Kim"
        />
        {enableClearing && <Icon type="clear" onClick={() => remove(index)} />}
      </StyledContainer>
      <ErrorMessage name={`${name}.${index}.name`} component="div" />
    </div>
  )
}

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  position: relative;

  span {
    color: var(--text-color-opaque);
    cursor: pointer;
    font-size: 24px;
    position: absolute;
    right: 10px;
  }

  input {
    margin: 5px 0;
    padding-right: 40px;
  }
`
