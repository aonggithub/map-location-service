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

render(
  <Provider store={store}>
    
  </Provider>,
  document.getElementById('root')
)
