const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send(process.env.ENV_NAME)
// })

app.get('/', (req, res) => {
  res.json(process.env.ENV_VAR)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})