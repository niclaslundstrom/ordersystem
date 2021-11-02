//const express = require('express')
const app = express()
const port = 3000
import express from 'express'
import user from './routes/users.js'
import product from './routes/product.js'
import orders from './routes/orders.js'
import mongoose from "mongoose"



app.get("/", (req, res) => {
  res.send("hej")
})

app.use("/user", user)


mongoose.connect(
  "mongodb+srv://order:order123@cluster0.q5oir.mongodb.net/cluster0?retryWrites=true&w=majority",
  () => console.log("connected to db maybe")
)

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(port, () => {
  console.log(`tjenare hejsan http://localhost:${port}`)
})

