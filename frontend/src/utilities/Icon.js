import React from 'react'
import PropTypes from 'prop-types'

Icon.propTypes = {
  type: PropTypes.string,
}

export default function Icon({ type, ...props }) {
  return (
    <span className="material-icons" {...props}>
      {type}
    </span>
  )
}
