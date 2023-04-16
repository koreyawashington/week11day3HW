
const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.send(`<h1>Page 1</h1>`)
})
app.get('/2', (req, res) => {
    res.send(`<h1>Page 2</h1>`)
  })
  app.get('/3', (req, res) => {
    res.send(`<h1>Page 3</h1>`)
  })
  app.get('/4', (req, res) => {
    res.send(`<h1>Page 4</h1>`)
  })
  app.get('/5', (req, res) => {
    res.send(`<h1>Page 5</h1>`)
  })
  app.get('/6', (req, res) => {
    res.send(`<h1>Page 6</h1>`)
  })
  app.get('/7', (req, res) => {
    res.send(`<h1>Page 7</h1>`)
  })
  app.get('/8', (req, res) => {
    res.send(`<h1>Page 8</h1>`)
  })
  app.get('/9', (req, res) => {
    res.send(`<h1>Page 9</h1>`)
  })
  app.get('/10', (req, res) => {
    res.send(`<h1>Page 10</h1>`)
  })

