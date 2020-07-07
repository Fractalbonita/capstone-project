import React from 'react'
import { action } from '@storybook/addon-actions'

import { PrimaryButton } from './Button'

export default {
  title: 'PrimaryButton',
  component: PrimaryButton,
}

export const PrimaryButton = () => <PrimaryButton onClick={action('clicked')}>Add play</PrimaryButton>


