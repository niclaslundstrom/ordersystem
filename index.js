//const express = require('express')
const app = express()
const port = process.env.PORT ||
import express from 'express'
import User from './routes/users.js'
import Product from './routes/products.js'
import Order from './routes/orders.js'
import mongoose from 'mongoose'

app.get('/', (req, res) => {
  res.send('hej')
})

app.use('/users', User)
app.use('/products', Product)
app.use('/orders', Order)
//
const dbconn = process.env.DBCONN || 'mongodb+srv://order:order123@cluster0.q5oir.mongodb.net/ordersystem?retryWrites=true&w=majority'

mongoose.connect(dbconn, () => console.log('connected to db maybe'))

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function () {
  console.log('Connected successfully')
})

app.listen(port, () => {
  console.log(`tjenare hejsan http://localhost:${port}`)
})
