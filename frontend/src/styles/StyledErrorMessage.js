import { ErrorMessage } from 'formik'
import styled from 'styled-components'

const StyledErrorMessage = styled(ErrorMessage)`
color: var(--text-decoration-color);
font-family: var(--caption-font);
font-size: 12px;
font-weight: bold;
margin-top: 0.4rem;
text-align: center;
width: 100%;
`

export default StyledErrorMessage