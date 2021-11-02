import express from 'express'
import userModel from "../model.js"
const appUser = express.Router()

appUser.use(express.urlencoded({ extended: true }));
appUser.use(express.json());

appUser
  .get("/", async (req, res) => {
    const users = await userModel.find({});

    try {
      res.send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  })

  .get('/:id', async (req, res) => {
    const id = req.params.id
    try {
      const user = await userModel.findOne({ "_id": (id) })
      res.send(user)
    } catch (err) {
      console.error("Error GET /user/id", err)
      res.status(501).send(SERVER_ERROR)
    }
  })

  .post("/", async (req, res) => {
    console.log(req.body)
    const user = new userModel(req.body);

    try {
      await user.save();
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }

  })

  .delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
      const deleteUser = await userModel.deleteOne({ "_id": (id) })
      res.send(deleteUser)
      res.status(200).send({ deleted: true })
    } catch (err) {
      console.error("Error DELETE /user", err)
      res.status(501).send(SERVER_ERROR)
    }
  })



export default appUser



