const express = require('express')
const router = express.Router()
const shell = require('shelljs')

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Base Endpoint'
  })
})

router.get('/git-update', (req, res, next) => {
  if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git')
    shell.exit(1)
  }

  var update = shell.exec('git fetch && git pull')

  res.status(200).json({
    message: update,
  })
  
});

module.exports = router
