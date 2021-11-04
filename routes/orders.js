import express from "express"
import Orders from "../models/ordersModel.js"

const appOrder = express.Router()

appOrder.use(express.urlencoded({ extended: true }))
appOrder.use(express.json())

appOrder
  .get("/", async (req, res) => {
    const orders = await Orders.find({})

    try {
      res.send(orders)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  .get("/:id", async (req, res) => {
    const id = req.params.id
    try {
      const order = await Orders.findOne({ _id: id })
      res.send(order)
    } catch (err) {
      console.error("Error GET /order/id", err)
      res.status(501).send(SERVER_ERROR)
    }
  })


  .post("/", async (req, res) => {
    console.log(req.body)
    const order = new Orders(req.body)

    try {
      await order.save()
      res.send(order)
    } catch (error) {
      res.status(500).send(error)
    }
  })


  .delete("/:id", async (req, res) => {
    const id = req.params.id
    try {
      const deleteOrder = await Orders.deleteOne({ _id: id })
      res.send(deleteOrder)
      res.status(200).send({ deleted: true })
    } catch (err) {
      console.error("Error DELETE /order", err)
      res.status(501).send(SERVER_ERROR)
    }
  })

// /orders/usersid
// /orders/usersid/productid

export default appOrder
