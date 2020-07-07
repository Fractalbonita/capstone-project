import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0 auto;
  }

  :root {
    --surface: #F4F3EC;
    --text-color: #151514;
    --text-color-opaque: rgba(21,21,20, 0.8);
    --text-decoration-color: #C3090A;
    --primary: #00806A;
    --secondary: green;
    --inner-shadow-dark: #DBDAD4;
    --inner-shadow-dark-opaque: rgba(0 ,0 ,0 , 0.4);
    --inner-shadow-light: #FAFAF7;
    --inner-shadow-light-opaque: rgba(255,255,255, 0.4);
    --shadow: #BABECC;
  }

  body {
    padding: 20px;
    background-color: var(--surface);
  }

  h1 {
    font-family: 'Lato', sans-serif;
    color: var(--text-color);
    font-size: 24px;
    font-weight: bold;
    line-height: 1.5;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    width: 90%;
  }

  h2 {
    font-family: 'Lato', sans-serif;
    color: var(--text-color);
    font-size: 12px;
    font-weight: bold;
    text-align: left;
    line-height: 1.5;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    width: 90%;
  }

  p {
    font-family: 'Karla', sans-serif;
    color: var(--text-color);
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    width: 90%;
  }
`