const phonesData = require('./phonesData.js')

const phones = (req, res) => {
  try {
    res.json(phonesData)
  } catch (error) {
    res.status(500).send('Something happend!')
  }
}

module.exports = phones
