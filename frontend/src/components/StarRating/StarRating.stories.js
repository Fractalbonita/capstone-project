import React from 'react'

import StarRating from './StarRating'

export default {
  title: 'StarRating',
  component: StarRating,
}

export const starRating = () => (
  <StarRating
    numberOfStars={10}
    selectedStars={selectedStars}
    handleRating={handleRating}
  />
)
