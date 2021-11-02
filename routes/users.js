import express from 'express'
import userModel from "../model.js"
const appUser = express.Router()


appUser
  .get("/", async (req, res) => {
    const users = await userModel.find({});

    try {
      res.send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  })

  .post("/", async (req, res) => {

    const user = new userModel(req.body);

    try {
      await user.save();
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }

  })
  .delete('/:id', (req, res) => {
    res.send('delete /user/id')
  })



export default appUser



