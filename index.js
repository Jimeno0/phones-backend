require('dotenv').config()
const express = require('express')
const phonesController = require('./controllers/phones')

const app = express()

app.get('/phones', phonesController)

app.listen(3000, () => {
  console.log('app listening in port 3000')
})
