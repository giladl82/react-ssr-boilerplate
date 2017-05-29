import express from 'express'
import setMiddlewares from './middlewares'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import api from './api'

import MasterPage from '../client/MasterPage'
import configureStore from '../client/store'

import { getPageContent } from './api/page-content/model'
import { getLocaleMessages } from './api/i18n/model'
const app = express()

setMiddlewares(app)

app.use('/api', api)

app.get('/**', (req, res) => {
  const pageName = req.originalUrl.substring(1) || 'homepage'

  const preloadedState = { app: { pages: {}, locale: 'en', messages: {} } }

  getLocaleMessages(preloadedState.app.locale).then(messages => {
    preloadedState.app.messages = messages
    return getPageContent(pageName)
  })
    .then(content => {
      const context = {}

      preloadedState.app.pages[ pageName ] = content.toString()

      const store = configureStore(preloadedState)

      const appBody = ReactDOMServer.renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <MasterPage />
          </StaticRouter>
        </Provider>
      )

      const preloadedStateScript = ` <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
        </script>`
      res.render('index.ejs', { appBody, preloadedStateScript })
    })
})

app.listen(8000, () => {
  console.log('App is running on PORT 8000')
})
