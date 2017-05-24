import express from 'express'
import path from 'path'
import ejs from 'ejs'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'

import MasterPage from '../client/MasterPage'

const ejsExpress = ejs.__express

const app = express()

app.use(express.static(path.join(__dirname, '../public')))
app.set('view engine', 'ejs')
app.engine('.ejs', ejsExpress)
app.set('views', path.join(__dirname, '../public'))

app.get('/', (req, res) => {
  const context = {}
  const appBody = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
      >
      <MasterPage />
    </StaticRouter>
  )

  res.render('index.ejs', { appBody })
})

app.listen(8000, () => {
  console.log('App is running on PORT 8000')
})
