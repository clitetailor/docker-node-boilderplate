const express = require('express')
const path = require('path')

const port = 8080
const host = '0.0.0.0'

const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.listen(
  port,
  host, // eslint-disable-next-line no-console
  console.log.bind(console, 'App listening on port ' + port)
)
