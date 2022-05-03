const app = require('express')()

app.get('/what-is-my-name/:name', (req, res) => {
  res.json({ name: req.params.name, age: 12 })
})

module.exports = app
