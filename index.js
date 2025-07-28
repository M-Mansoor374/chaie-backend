require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('chaie or code')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})
app.get('/login', (req, res) => {
  res.send('<h1>plz login</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

