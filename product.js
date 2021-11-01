const express = require('express')
const app = express()
const port = 3000


app.get('/product', (req, res) => {
  res.send('Hello User\n')
})

app.get('/product/:id', (req, res) => {
  const id = req.params.id
  res.send(`/gregger/id ${id}`)
})

app.post('/product', (req, res) => {
  res.send(`post /product/id ${req.params}`)
})

app.delete('/product', (req, res) => {
  res.send('delete /product/id')
})
