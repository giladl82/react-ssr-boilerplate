import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import ejs from 'ejs'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import MasterPage from '../client/MasterPage'

import configureStore from '../client/store'

const ejsExpress = ejs.__express

const app = express()

app.use(express.static(path.join(__dirname, '../public')))
app.set('view engine', 'ejs')
app.engine('.ejs', ejsExpress)
app.set('views', path.join(__dirname, '../public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// demo for async function
const _getPageContent = (pageName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (pageName.toLowerCase()) {
        case 'homepage':
          resolve('Home page content')
          break
        case 'subpage':
          resolve('Sub page content')
          break
        case 'subpage2':
          resolve('Second sub page content')
          break
        default:
          resolve('Page not found')
      }
    }, 500)
  })
}

app.get('/api/getPageContent/:pageName', (req, res) => {
  const { pageName } = req.params
  _getPageContent(pageName).then((response) => res.send(response))
})

app.get('/**', (req, res) => {
  _getPageContent('homepage').then(content => {
    const context = {}
    const preloadedState = {
      app: {
        pages: {
          'homepage': content.toString()
        }
      }
    }

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
