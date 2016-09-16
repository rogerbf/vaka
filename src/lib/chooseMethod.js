const productVersion = require('./productVersion.js')

const chooseMethod = () => {
  return (
  productVersion()
    .then(
      version => {
        if (version.major >= 10) {
          if (version.minor >= 2 && version.minor < 8) {
            return Promise.resolve('pmset')
          }
          else if (version.minor >= 8) {
            return Promise.resolve('caffeinate')
          }
          else {
            return Promise.reject('unsupported macOS version')
          }
        }
      }
    )
  )
}

module.exports = chooseMethod
