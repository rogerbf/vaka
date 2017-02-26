module.exports = execFile => new Promise((resolve, reject) => {
  execFile(`sw_vers`, [`-productVersion`], (error, stdout, stderr) => {
    error && reject(`Could not read macOS version`)
    const versions = stdout.trim().split(`.`).map(n => parseInt(n, 10))
    resolve({ major: versions[0], minor: versions[1], patch: versions[2] })
  })
})
