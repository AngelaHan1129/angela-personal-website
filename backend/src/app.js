const express = require('express')
const cors = require('cors')
require('dotenv').config()

const profileRoutes = require('./routes/profile')
const projectRoutes = require('./routes/projects')
const contactRoutes = require('./routes/contact')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Portfolio API is running'
  })
})

app.use('/api/profile', profileRoutes)
app.use('/api/projects', projectRoutes)
app.use('/api/contact', contactRoutes)

module.exports = app