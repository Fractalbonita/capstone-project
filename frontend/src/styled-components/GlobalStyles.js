import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0 auto;
  }

  :root {
    --headline-font: 'Lato', sans-serif;
    --subtitle-font: 'Karla', sans-serif;
    --body-font: 'Karla', sans-serif;
    --button-font: 'Lato', sans-serif;
    --caption-font: 'Karla', sans-serif;
    --overline-font: 'Lato', sans-serif;
    --surface: #F4F3EC;
    --primary: #00806A;
    --text-color: #151514;
    --text-color-opaque: rgba(21,21,20, 0.8);
    --text-decoration-color: #C3090A;
    --shadow: #BABECC;
    --inner-shadow-dark: #DBDAD4;
    --inner-shadow-dark-opaque: rgba(0 ,0 ,0 , 0.4);
    --inner-shadow-light: #FAFAF7;
    --inner-shadow-light-opaque: rgba(255,255,255, 0.4);
  }

  body {
    padding: calc(20px + 3vw);
    font-family: var(--body-font);
    background-color: var(--surface);
  }

  body, 
  html {
    height: 100vh;
    font-family: var(--body-font);
  }

  h1, 
  h2, 
  h3, 
  h4 {
    font-family: var(--headline-font);
    color: var(--text-color);
    font-weight: bold;
    text-align: left;
    line-height: 1.5;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    width: 100%;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 18px;
  }

  h4 {
    font-size: 14px;
  }

  p {
    font-family: var(--body-font);
    color: var(--text-color);
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    width: 90%;
  }

  input, 
  textarea {
    display: block;
    width: 100%;
  }
`