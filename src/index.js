const chooseMethod = require('./lib/chooseMethod.js')

const methods = {
  caffeinate: require('caffeinate'),
  pmset: require('noidle')
}

const execute = (pid = null) => chooseMethod()
  .then(method => methods[method](pid))

const vaka = (...args) => {
  const callback = typeof(args[args.length - 1]) === 'function'
  ? args[args.length - 1]
  : null

  const pid = typeof(args[0]) === 'number'
  ? args[0]
  : null

  if (callback) {
    execute(pid)
      .then(responsibleProcess => callback(null, responsibleProcess))
      .catch(e => callback(e))
  } else {
    return execute(pid)
  }
}

module.exports = vaka
