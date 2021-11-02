import express from 'express'
const orders = express.Router()

orders
  .get("/order", (req, res) => {
    res.send("Hello order\n")
  })

  .get("/order/:id", (req, res) => {
    const id = req.params.id
    res.send(`/gregger/id ${id}`)
  })

  .post("/order", (req, res) => {
    res.send(`post /order/id ${req.params}`)
  })

  .delete("/order", (req, res) => {
    res.send("delete /order/id")
  })
export default orders