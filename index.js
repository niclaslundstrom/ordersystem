//const express = require('express')
const app = express()
const port = 3000
import express from "express"
import router from "./routes/users.js"
import mongoose from "mongoose"

app.get("/", (req, res) => {
  res.send("hej")
})

app.use("/user", router)
app.post("/user", (req, res) => {
  res.send("postar")
})

mongoose.connect(
  "mongodb+srv://order:order123@cluster0.q5oir.mongodb.net/Cluster0?retryWrites=true&w=majority",
  () => console.log("connected to db maybe")
)
app.listen(port, () => {
  console.log(`tjenare hejsan http://localhost:${port}`)
})
