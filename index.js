require('dotenv').config()
const express = require('express')
const cors = require('cors')
const phonesController = require('./controllers/phones')
const port = process.env.PORT

const app = express()

app.get('/phones', phonesController)
app.use(cors())
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`app listening in port ${port}`)
})
