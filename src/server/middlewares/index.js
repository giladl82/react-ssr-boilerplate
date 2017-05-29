import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import ejs from 'ejs'

module.exports = (app) => {
  const ejsExpress = ejs.__express

  app.use(express.static(path.join(__dirname, '../public')))
  app.set('view engine', 'ejs')
  app.engine('.ejs', ejsExpress)
  app.set('views', path.join(__dirname, '../public'))
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
}
