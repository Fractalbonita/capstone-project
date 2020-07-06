import { Field } from 'formik'
import styled from 'styled-components'

const StyledField = styled(Field)`
appearance: none;
-webkit-appearance: none;
-moz-appearance: none;
width: 90%;
padding: 13px 15px;
font-size: 16px;
font-family: 'Karla', sans-serif;
color: var(--text-color-opaque);
background-color: var(--surface);
outline: none;
border: none;
border-radius: 20px;
box-shadow: inset 5px 5px 10px var(--inner-shadow-dark), inset -8px -8px 20px var(--inner-shadow-light);
transition: all 0.2s ease-in-out;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    border-radius: 50%;
    height: 25px;
    width: 25px;
    background-color: var(--primary);
    box-shadow: -1px -1px 5px #fff, 2px 2px 6px var(--shadow);
    
    &:active {
      box-shadow: inset -2px -2px 5px 0px var(--inner-shadow-light-opaque), inset 2px 2px 5px var(--inner-shadow-dark-opaque);
    }
  }

  &::-moz-range-thumb {
    border: none;
    border-radius: 50%;
    height: 25px;
    width: 25px;
    background-color: var(--primary);
    box-shadow: -5px -5px 20px #fff, 5px 5px 20px var(--shadow);

    &:active {
      box-shadow: inset -2px -2px 5px 0px var(--inner-shadow-light-opaque), inset 2px 2px 5px var(--inner-shadow-dark-opaque);
    }
  }

  &::-webkit-slider-runnable-track {
    appearance: none;
    cursor: pointer;
  }

  &::-moz-range-track {
    appearance: none;
    cursor: pointer;
  }

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: inset 1px 1px 2px var(--inner-shadow-dark), inset -1px -1px 2px #fff;
  }

  &:-moz-focusring {
    outline: none;
    box-shadow: inset 1px 1px 2px var(--inner-shadow-dark), inset -1px -1px 2px #fff;
  }  
`

export default StyledField