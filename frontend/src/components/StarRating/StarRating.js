import React from 'react'

import Star from '../icons/StarIcon'

export default ({ numberOfStars = 10, selectedStars, handleRating }) => (
  <div>
    {[...Array(numberOfStars).keys()].map(i => (
      <Star key={i}
        isSelected={i < selectedStars}
        onClick={() => handleRating(i + 1)} />
    ))}
  </div>
)