import React, { useState } from 'react'

import AddPlayForm from './AddPlayForm'
import AddPlayIcon from './AddPlayIcon'
import PlayCollection from './PlayCollection'

export default function PlayTimelinePage({ addToPlayCollection, plays }) {
  const [isVisible, setIsVisible] = useState(false)

  return isVisible 
    ? <AddPlayForm addToPlayCollection={addToPlayCollection}
      hideForm={() => setIsVisible(false)} />
    : <>
      <PlayCollection plays={plays} />
      <AddPlayIcon showForm={() => setIsVisible(true)} />
      </>
}