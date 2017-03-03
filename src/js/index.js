import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import App from './components/App'
import mapApp from './reducers'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'

const logger = createLogger()
let store = createStore(mapApp, applyMiddleware(thunk, promise, logger))

// Add service worker
if ('serviceWorker' in navigator) {
 navigator.serviceWorker
          .register('service-worker.js')
          .then(function() { console.log('Service Worker Registered'); }).catch(function(error){console.log(error)});
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
