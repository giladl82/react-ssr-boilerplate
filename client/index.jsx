import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import MasterPage from './MasterPage'

const App = () => (
  <BrowserRouter>
    <MasterPage />
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('app'))
