import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import AddPlayForm from './AddPlayForm'
import AddPlayIcon from './AddPlayIcon'
import PlayCollection from './PlayCollection'

export default function PlayTimelinePage({ plays }) {

  return  (
    <>
      <PlayCollection plays={plays} />
      <Link to="/log/addplay">
        <AddPlayIcon />
      </Link>
    </>
  )
}