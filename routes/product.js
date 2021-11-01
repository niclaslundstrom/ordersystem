const express = require('express')
const product = express.Router()

product
  .get('/product', (req, res) => {
    res.send('Hello User\n')
  })

  .get('/product/:id', (req, res) => {
    const id = req.params.id
    res.send(`/gregger/id ${id}`)
  })

  .post('/product', (req, res) => {
    res.send(`post /product/id ${req.params}`)
  })

  .delete('/product', (req, res) => {
    res.send('delete /product/id')
  })
export default product