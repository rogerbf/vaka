module.exports = versions => (
  versions.major > 10 ? `caffeinate` : (
    versions.major < 10 ? null : (
      versions.minor < 2 ? null : (
        versions.minor < 8 ? `pmset` : `caffeinate`
      )
    )
  )
)
