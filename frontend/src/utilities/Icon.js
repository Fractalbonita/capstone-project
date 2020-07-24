import React from 'react'

export default ({ type, ...props }) => (
  <span className="material-icons" {...props}>{type}</span>
)