const http = require('http')
const app = require('./app')

require('dotenv').config()

const port = process.env.port

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
