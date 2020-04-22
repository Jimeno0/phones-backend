const phoneSchema = require('../schemas/phone')
const mongoose = require('mongoose')

const phones = async (req, res) => {
  const Phone = mongoose.model('phones', phoneSchema)
  try {
    const all = await Phone.find({})
    res.json(all)
  } catch (error) {
    res.status(500).send('Something broke!')
  }
}

module.exports = phones
