import { ErrorMessage } from 'formik'
import styled from 'styled-components'

const StyledErrorMessage = styled(ErrorMessage)`
color: var(--text-decoration-color);
font-family: 'Karla', sans-serif;
font-size: 12px;
font-weight: bold;
text-align: center;
margin-top: 0.4rem;
width: 100%;
`

export default StyledErrorMessage