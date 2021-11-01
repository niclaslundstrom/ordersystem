//const express = require('express')
const app = express()
const port = 3000
import express from 'express'
import router from './routes/users.js'


app.get("/", (req, res) => {
  res.send("hej")
})

app.use("/user", router);
app.post("/user", (req, res) => {
  res.send('postar')
})
app.listen(port, () => {
  console.log(`tjenare hejsan http://localhost:${port}`)
})
