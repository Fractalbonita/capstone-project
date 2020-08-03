import React from 'react'

import PlayRanking from './PlayRanking'

export default {
  title: 'PlayRanking',
  component: PlayRanking,
}

export const playRanking = () => <PlayRanking play={play} isEditing={isEditing} onChange={onChange} />