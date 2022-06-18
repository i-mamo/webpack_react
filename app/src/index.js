import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './ss/style.min.css'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/serviceworker.js')
      .then((reg) => console.log('Success: ', reg.scope))
      .catch((err) => console.log('Failure: ', err));
  })
}

const target = document.getElementById('root')

ReactDOM.render(
  <App/>,target
)
