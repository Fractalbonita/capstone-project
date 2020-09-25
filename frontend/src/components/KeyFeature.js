import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Icon from '../utilities/Icon'

KeyFeature.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  feature: PropTypes.string,
}

export default function KeyFeature({ icon, title, feature }) {
  return (
    <StyledContainer>
      <Icon type={icon} alt="" />
      <p>{title}</p>
      <p>{feature}</p>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  justify-self: stretch;
  display: grid;
  grid-template-rows: 30px 45px auto;

  span {
    align-self: center;
    color: var(--primary);
  }

  p {
    align-self: stretch;
    font-family: var(--caption-font);
    margin: 0;
    padding: 10px 0;
    text-align: center;
  }

  p:first-of-type {
    color: var(--primary);
    font-family: var(--caption-font);
    font-size: 12px;
    padding: 10px 0;
    text-transform: uppercase;
  }
`
