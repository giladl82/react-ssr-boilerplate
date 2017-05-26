import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from './store'
import MasterPage from './MasterPage'

const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MasterPage />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('app'))
