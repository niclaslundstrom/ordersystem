import mongoose from 'mongoose'

const PorductsSchema = new mongoose.Schema(
  {
    PruductName: {
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

const Porducts = mongoose.model('Porducts', PorductsSchema)

export default Porducts
