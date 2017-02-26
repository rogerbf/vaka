module.exports = (
  {
    productVersion,
    selectMethod,
    methods
  },
  options
) => (
  productVersion()
  .then(selectMethod)
  .then(method =>
    method === null
    ? Promise.reject(`Your version of macOS is not supported`)
    : Promise.resolve(method)
  )
  .then(method => options ? methods[method](options) : methods[method]())
)
