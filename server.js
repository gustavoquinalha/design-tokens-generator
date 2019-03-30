const express = require('express')
const app = express()
const path = require('path')

app.use('/conf', express.static(path.join(__dirname, '/dist')))
app.all('/', (req, res, next) => {
  res.redirect('/design-tokens-generator')
  next()
})

app.listen(process.env.PORT || 3000, () => console.log(`Listening on port ${process.env.PORT || 3000}`))
