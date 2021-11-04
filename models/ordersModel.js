import mongoose from 'mongoose'

const OrdersSchema = new mongoose.Schema(
  {
    Product: {
      type: String,
      required: true
    },
    LastName: {
      type: String,
      required: true
    },
    Adress: {
      type: String,
      required: true
    }
  },
  { versionKey: false }
)

const Orders = mongoose.model('Orders', OrdersSchema)

export default Orders
