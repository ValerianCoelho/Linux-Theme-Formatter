import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Theme } from './Themes/Theme.js'

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  html {
    background-color: ${Theme.primaryColor}
  }
  button {
    border: none;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <style>{ globalStyles }</style>
    <App />
  </React.StrictMode>,
)
