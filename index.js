require('dotenv').config()
const express = require('express')
const cors = require('cors')
const phonesController = require('./controllers/phones')

const app = express()

app.get('/phones', phonesController)
app.use(cors())
app.use(express.static('public'))

app.listen(3000, () => {
  console.log('app listening in port 3000')
})
