import { Field } from 'formik'
import styled from 'styled-components'

const StyledField = styled(Field)`
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
background-color: var(--surface);
border: none;
border-radius: 20px;
box-shadow: inset 5px 5px 10px var(--inner-shadow-dark), inset -8px -8px 20px var(--inner-shadow-light);
color: var(--text-color-opaque);
font-family: 'Karla', sans-serif;
font-size: 16px;
font-weight: bold;
outline: none;
padding: 13px 15px;
transition: all 0.2s ease-in-out;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: var(--primary);
    border: none;
    border-radius: 50%;
    box-shadow: -1px -1px 5px #fff, 2px 2px 6px var(--shadow);
    height: 25px;
    width: 25px;

    &:active {
      box-shadow: inset -2px -2px 5px var(--inner-shadow-light-opaque), inset 2px 2px 5px var(--inner-shadow-dark-opaque);
    }
  }

  &::-moz-range-thumb {
    background-color: var(--primary);
    border: none;
    border-radius: 50%;
    box-shadow: -5px -5px 20px #fff, 5px 5px 20px var(--shadow);
    height: 25px;
    width: 25px;
    
    &:active {
      box-shadow: inset -2px -2px 5px var(--inner-shadow-light-opaque), inset 2px 2px 5px var(--inner-shadow-dark-opaque);
    }
  }

  &::-webkit-slider-runnable-track {
    appearance: none;
  }

  &::-moz-range-track {
    appearance: none;
    background-color: transparent;
  }

  &:focus {
    box-shadow: inset 1px 1px 2px var(--inner-shadow-dark), inset -1px -1px 2px #fff;
    outline: none;
  }

  &:-moz-focusring {
    box-shadow: inset 1px 1px 2px var(--inner-shadow-dark), inset -1px -1px 2px #fff;
    outline: none;
  }  
`

export default StyledField