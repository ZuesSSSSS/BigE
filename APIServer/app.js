const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser');
const passport = require('passport')

const app = express()

// Middleware that adds some nice headers to responses
app.use(helmet());

// Enable all CORS requests
app.use(cors())

// Access Logger
app.use(morgan('tiny'));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(passport.initialize());
app.use(passport.session());

// API Routes
const product = require('./api/routes/products')
app.use('/api/products', product)

// Auth routes
const auth = require('./api/routes/auth')
app.use('/api/auth', auth)

const base = require('./api/routes/base')
app.use('/api', base)

module.exports = app
