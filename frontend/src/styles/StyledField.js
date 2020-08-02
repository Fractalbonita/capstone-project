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
font-family: var(--body-font);
font-size: 16px;
font-weight: bold;
outline: none;
padding: 13px 15px;
transition: all 0.2s ease-in-out;

&:hover {
  cursor: text;
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