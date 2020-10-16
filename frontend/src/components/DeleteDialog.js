import React from 'react'
import PropTypes from 'prop-types'

DeleteDialog.propTypes = {
  title: PropTypes.string,
  onCancel: PropTypes.func,
  onDelete: PropTypes.func,
}

export default function DeleteDialog({ title, onCancel, onDelete }) {
  return (
    <>
      <h3>Delete?</h3>
      <p>Are you sure you want to delete {title} play permanently?</p>
      <button type="button" name="cancel" onClick={onCancel}>
        Cancel
      </button>
      <button type="button" name="delete" onClick={onDelete}>
        Delete
      </button>
    </>
  )
}
