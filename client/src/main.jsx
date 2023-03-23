import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//style
import "bootstrap/dist/css/bootstrap.min.css"
import './index.scss'
//Routes
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
