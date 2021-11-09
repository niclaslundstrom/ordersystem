import mongoose from 'mongoose'

const ProductsSchema = new mongoose.Schema(
  {
    ProductName: {
      type: String,
      required: true
    },
    Cost: {
      type: Number,
      required: true
    },
    Amount: {
      type: Number,
      required: true
    }
  },
  { versionKey: false }
)

const Products = mongoose.model('Products', ProductsSchema)

export default Products
