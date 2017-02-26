const caffeinate = require(`caffeinate`)
const pmset = require(`noidle`)
const { execFile } = require(`child_process`)
const productVersion = require(`./lib/productVersion`).bind(null, execFile)
const selectMethod = require(`./lib/selectMethod`)
const vaka = require(`./lib/vaka`)

module.exports = vaka.bind(
  null,
  {
    productVersion,
    selectMethod,
    methods: {
      caffeinate,
      pmset
    }
  }
)
