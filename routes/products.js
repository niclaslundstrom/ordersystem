import express from 'express'
import Products from "../models/productsModel.js"
const appProduct = express.Router()

appProduct.use(express.urlencoded({ extended: true }))
appProduct.use(express.json())

appProduct
  .get('/', async (req, res) => {
    const products = await Products.find({})
    try {
      res.send(products)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  .get('/:id', async (req, res) => {
    const id = req.params.id
    try {
      const product = await Products.findOne({
        "_id": (id)
      })
      res.send(product)
    } catch (err) {
      console.error("Error GET /products/id", err)
      res.status(501).send(SERVER_ERROR)
    }
  })

  .post('/', async (req, res) => {
    const product = new Products(req.body)

    try {
      await product.save()
      res.send(product)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  .delete('/:id', async (req, res) => {
    try {
      const deleteProduct = await Products.deleteOne({
        "_id": (id)
      })
      res.send(deleteProduct)
      res.status(200).send({ deleted: true })
    } catch (err) {
      console.error("Error DELETE /product", err)
      res.status(501).send(SERVER_ERROR)
    }
  })
export default appProduct