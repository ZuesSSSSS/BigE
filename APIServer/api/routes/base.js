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

  // Reset to head
  shell.exec('git reset --hard origin/master');

  // Pull new changes
  var git = shell.exec('git fetch && git pull')
  
  // Install the (maybe) added npm packages
  var npm = shell.exec('npm i');

  // Restart the process manager ( node server )
  var processManager = shell.exec('pm2 restart index');

  res.status(200).json({
    git: git,
    npm: npm,
    processManager: processManager,
  })
  
});

module.exports = router
