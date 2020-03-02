const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

// Middleware that adds some nice headers to responses
app.use(helmet());

// Enable all CORS requests
app.use(cors())

// Access Logger
app.use(morgan('tiny'));

// API Routes
const product = require('./api/routes/products')
app.use('/api/products', product)

const base = require('./api/routes/base')
app.use('/api', base)

module.exports = app
