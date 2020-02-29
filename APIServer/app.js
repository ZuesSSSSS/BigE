const express = require('express')
const helmet = require('helmet');
const morgan = require('morgan')

const app = express()

// Middleware
app.use(helmet());

// Access Logger
app.use(morgan('tiny'));

// API Routes
const product = require('./api/routes/products')
app.use('api/products', product)

const base = require('./api/routes/base')
app.use('api', base)

module.exports = app
