import React from 'react'
import ReactDOM from 'react-dom/client'

import {HashRouter } from 'react-router-dom'
import UserProvider from './context/UserProvider'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </HashRouter>,
)
