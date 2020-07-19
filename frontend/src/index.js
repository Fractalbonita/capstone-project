import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import GlobalStyles from './styled-components/GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <GlobalStyles />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)