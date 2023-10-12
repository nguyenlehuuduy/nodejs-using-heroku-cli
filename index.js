const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.send({ message: "Exercise 8.2 : Deploying to Node.js to using Heroku CLI " })
})

app.listen(port, () => {
  console.log(`Example app listening at Port: ${port}`)
})