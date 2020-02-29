const http = require('http')
const app = require('./app')

const port = process.env.PORT;

app.listen(port, () => {
  console.log('Example app listening on port 8000!')
});
