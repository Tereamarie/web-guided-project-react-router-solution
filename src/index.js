import React from 'react'
import { render } from 'react-dom'

// Importing the top-level component
import App from './components/App'

// Importing the styles
import './styles.less'

// 👉 STEP 1 - Import React Router's Router
/*
  INSTRUCTOR: you could explain there's a hashRouter that uses the URL hash for routing
*/
import { BrowserRouter as Router } from 'react-router-dom'

render(
  <Router>
    <App />
  </Router>
  , document.querySelector('#root')
)
