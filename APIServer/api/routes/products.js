const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Worked',
    products: [
      {
        name: 'A new pair of shoes'
      },
      {
        name: 'Product #2',
      },
      { 
        name: 'A gun'
      }
    ]
  })
})

module.exports = router
