const express = require('express')
const app = express()

// API Routes
const product = require('./api/routes/products')

app.use('/products', product)

module.exports = app
