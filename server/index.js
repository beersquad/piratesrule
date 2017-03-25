const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const app = express ()

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
const port = process.env.PORT || 8000

app.use(express.static(path.join(__dirname, '/../client')))
app.listen(port, () => {
  console.log("Listening on port: ", port)
})