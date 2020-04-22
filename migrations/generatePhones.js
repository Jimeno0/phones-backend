require('dotenv').config()
const phoneSchema = require('../schemas/phone')
const mongoose = require('mongoose')
const phonesData = require('../public/phonesData')

const url = process.env.DB_URL

mongoose.connect(url, { useNewUrlParser: true })
const db = mongoose.connection
db.once('open', () => {
  console.log('Database connected:', url)
  const Phone = mongoose.model('phones', phoneSchema)
  Phone.collection.insert(phonesData, (err, docs) => {
    if (err) return console.error(err)
    console.log('Multiple phones inserted to Collection')
  })
})
