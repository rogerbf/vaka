const execFile = require('child_process').execFile

const productVersion = () => {
  return new Promise((resolve, reject) => {

    execFile('sw_vers', ['-productVersion'], (err, stdout, stderr) => {
      if (err) reject('are you running macOS?')
      const versions = stdout.trim().split('.').map(n => parseInt(n, 10))
      resolve({ major: versions[0], minor: versions[1], patch: versions[2] })
    })

  })
}

module.exports = productVersion
