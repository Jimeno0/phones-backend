require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const phonesController = require('./controllers/phones')
const port = process.env.PORT
const url = process.env.DB_URL
const app = express()

app.use(cors())
app.use(express.static('public'))

mongoose.connect(url, { useNewUrlParser: true })

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})

app.get('/phones', phonesController)

app.listen(port, () => {
  console.log(`app listening in port ${port}`)
})
