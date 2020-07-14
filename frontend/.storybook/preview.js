import GlobalStyles from '../src/styled-components/GlobalStyles'
import { addDecorator } from '@storybook/react'
import React from 'react'

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))