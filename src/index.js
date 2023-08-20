import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Theme } from './Themes/Webpage/Theme';

const globalStyles = `
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <style>{ globalStyles }</style>
    <App/>
  </React.StrictMode>
);