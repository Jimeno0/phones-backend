require('dotenv').config()
const express = require('express')

const app = express()

app.get('/phones', (req, res) => {
  res.json('ok')
})

app.listen(3000, () => {
  console.log('app listening in port 3000')
})
