import express from "express"
import orderModel from "../models/orderModel.js"

const appOrder = express.Router()

appOrder.use(express.urlencoded({ extended: true }))
appOrder.use(express.json())

appOrder
  .get("/", async (req, res) => {
    const orders = await orderModel.find({})

    try {
      res.send(orders)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  .get("/:id", async (req, res) => {
    const id = req.params.id
    try {
      const order = await orderModel.findOne({ _id: id })
      res.send(order)
    } catch (err) {
      console.error("Error GET /order/id", err)
      res.status(501).send(SERVER_ERROR)
    }
  })

  .post("/", async (req, res) => {
    console.log(req.body)
    const order = new orderModel(req.body)

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
      const deleteOrder = await orderModel.deleteOne({ _id: id })
      res.send(deleteOrder)
      res.status(200).send({ deleted: true })
    } catch (err) {
      console.error("Error DELETE /order", err)
      res.status(501).send(SERVER_ERROR)
    }
  })

export default appOrder
