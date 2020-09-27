import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import GlobalStyles from './styles/GlobalStyles'
import ReactDOM from 'react-dom'
import ScrollToTop from './utilities/ScrollToTop'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
