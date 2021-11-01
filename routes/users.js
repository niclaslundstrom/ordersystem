import express from 'express'
const user = express.Router()


user
  .get('/', (req, res) => {
    console.log(req.body)
    res.send('välkommen till user')
  })

  .get(':id', (req, res) => {
    const id = req.params.id
    res.send(`/gregger/id ${id}`)
  })

  .post('/', (req, res) => {
    res.send(`post /user/ ${req.params}`)
  })

  .delete(':id', (req, res) => {
    res.send('delete /User/id')
  })


export default user



