import mongoose from 'mongoose'

const OrdersSchema = new mongoose.Schema(
  {
    UsersId: {
      type: String,
      required: true
    },
    ProductsId: {
      type: String,
      required: true
    },
    Date: {
      type: Number,
      required: true
    }
  },
  { versionKey: false }
)

const Orders = mongoose.model('Orders', OrdersSchema)

export default Orders
