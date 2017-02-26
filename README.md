<img src="https://raw.githubusercontent.com/rogerbf/vaka/master/vaka-400x400.png" width="200px" height="200px">

# vaka

Prevent a system running macOS from going to sleep. Picks the preferred method (`pmset`/`caffeinate`) depending on system version.

## usage

``` javascript
const vaka = require(`vaka`)

// Prevent sleep indefinitely
vaka()
.then(console.log.bind(null, `caffeinate/pmset pid:`))
.catch(console.log)

// Prevent sleep until process exits
vaka({ pid: process.pid })
.then(console.log.bind(null, `caffeinate/pmset pid:`))
.catch(console.log)

// Prevent sleep for 10 seconds
vaka({ timeout: 10 })
.then(console.log.bind(null, `caffeinate/pmset pid:`))
.catch(console.log)
```

## api

### `vaka([options])`

Returns a Promise which resolves to the pid belonging to the underlying `pmset` or `caffeinate` instance.
