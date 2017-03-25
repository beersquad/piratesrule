const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const routes = require('./routes.js')
const app = express ()

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
const port = process.env.PORT || 8000
routes(app, express)
app.use(express.static(path.join(__dirname, '/../client')))
app.listen(port, () => {
  console.log("Listening on port: ", port)
})