import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import GlobalStyles from './styles/GlobalStyles'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
