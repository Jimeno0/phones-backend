const mongoose = require('mongoose')

const phone = new mongoose.Schema({
  id: String,
  name: String,
  manufacturer: String,
  description: String,
  color: String,
  price: Number,
  imageFileName: String,
  screen: String,
  processor: String,
  ram: Number
})

module.exports = phone
