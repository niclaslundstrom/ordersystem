//const express = require('express')
const app = express()
const port = 3000
import express from 'express'
import user from './routes/users.js'
import product from './routes/product.js'
import orders from './routes/orders.js'




app.get("/", (req, res) => {
  res.send("hej")
})

app.use("/user", user);
app.post("/user", (req, res) => {
  res.send('postar')
})

app.listen(port, () => {
  console.log(`tjenare hejsan http://localhost:${port}`)
})
