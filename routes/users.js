import express from 'express'
const router = express.router()


router
  .get((req, res) => {
    res.send('välkommen till user')
  })

  .get('/:id', (req, res) => {
    const id = req.params.id
    res.send(`/gregger/id ${id}`)
  })

  .post('/:id', (req, res) => {
    res.send(`post /user/id ${req.params}`)
  })

  .delete('/:id', (req, res) => {
    res.send('delete /User/id')
  })


module.exports = router



