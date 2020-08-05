import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    --headline-font: 'Lato', sans-serif;
    --subtitle-font: 'Karla', sans-serif;
    --body-font: 'Karla', sans-serif;
    --button-font: 'Lato', sans-serif;
    --caption-font: 'Karla', sans-serif;
    --overline-font: 'Lato', sans-serif;
    --surface: #F4F3EC;
    --primary: #a82e33;
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
    background-color: var(--surface);
    font-family: var(--body-font);
    margin: 0 auto;
    padding: calc(20px + 3vw);
  }

  body, 
  html {
    height: 100vh;
  }

  h1, 
  h2, 
  h3, 
  h4 {
    color: var(--text-color);
    font-family: var(--headline-font);
    font-weight: bold;
    line-height: 1.5;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
    text-align: left;
  }

  h1 {
    font-size: 24px;
    margin-top: 3rem;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 16px;
  }

  h4 {
    font-size: 14px;
  }

  p {
    color: var(--text-color);
    font-family: var(--body-font);
    font-size: 16px;
    font-weight: bold;
    text-align: left;
  }

  input, 
  textarea {
    display: block;
    width: 100%;

    &:hover {
      cursor: text;
    }
  }
`