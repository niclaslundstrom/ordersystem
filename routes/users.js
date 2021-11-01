import express from 'express'
const router = express.
  Router()


router
  .get('all', (req, res) => {
    res.send('välkommen till user')
  })

  .get(':id', (req, res) => {
    const id = req.params.id
    res.send(`/gregger/id ${id}`)
  })

  .post(':id', (req, res) => {
    res.send(`post /user/ ${req.params}`)
  })

  .delete(':id', (req, res) => {
    res.send('delete /User/id')
  })


export default router



