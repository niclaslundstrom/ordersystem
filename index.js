const express = require("express")
const app = express()
const port = 3000

app.get("/user", (req, res) => {
  res.send("Hello User\n")
})

app.get("/user/:id", (req, res) => {
  const id = req.params.id
  res.send(`/gregger/id ${id}`)
})

app.post("/user", (req, res) => {
  res.send(`post /user/id ${req.params}`)
})

app.delete("/user", (req, res) => {
  res.send("delete /User/id")
})

app.listen(port, () => {
  console.log(`tjenare hejsan http://localhost:${port}`)
})
