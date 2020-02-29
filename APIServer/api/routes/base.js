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

  var git = shell.exec('git fetch && git pull')
  var npm = shell.exec('npm i');

  res.status(200).json({
    git: git,
    npm: npm,
  })
  
});

module.exports = router
