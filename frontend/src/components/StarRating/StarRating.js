import React from 'react'
import PropTypes from 'prop-types'

import Star from '../icons/StarIcon'

StarRating.propTypes = {
  numberOfStars: PropTypes.number,
  selectedStars: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleRating: PropTypes.func,
}

export default function StarRating({
  numberOfStars = 10,
  selectedStars,
  handleRating,
}) {
  return (
    <div>
      {[...Array(numberOfStars).keys()].map(i => (
        <Star
          key={i}
          isSelected={i < selectedStars}
          onClick={() => handleRating(i + 1)}
        />
      ))}
    </div>
  )
}
