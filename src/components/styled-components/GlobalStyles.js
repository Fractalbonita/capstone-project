import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
  box-sizing: border-box;
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

  html body {
    margin: 0 auto;
    padding: 10px;
    background-color: var(--surface);
    line-height: 1.5;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
      
  }

  h1 {
    color: var(--text-color);
    font-size: 21px;
    font-weight: bold;
    line-height: 1;
  }
`