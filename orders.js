const express = require("express")
const app = express()
const port = 3000

app.get("/order", (req, res) => {
  res.send("Hello order\n")
})

app.get("/order/:id", (req, res) => {
  const id = req.params.id
  res.send(`/gregger/id ${id}`)
})

app.post("/order", (req, res) => {
  res.send(`post /order/id ${req.params}`)
})

app.delete("/order", (req, res) => {
  res.send("delete /order/id")
})
