const express = require('express')
const path = require('path')

const port = 8080

const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.listen(
  port, // eslint-disable-next-line no-console
  console.log.bind(console, ' listening on port ' + port)
)
