import React from 'react'

import PlayDetails from './PlayDetails'

export default {
  title: 'PlayDetails',
  component: PlayDetails,
}

export const playDetails = () => <PlayDetails play={play} isEditing={isEditing} onChange={onChange} />


