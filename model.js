import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    // required: true,
  },
  LastName: {
    type: String,
    // required: true,
  },
  Adress: {
    type: String,
    // required: true,
  },
}, { versionKey: false });

const userModel = mongoose.model("userModel", UserSchema);

export default userModel;