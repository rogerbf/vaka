<img src="https://raw.githubusercontent.com/rogerbf/vaka/master/vaka-400x400.png" width="200px" height="200px">

# vaka
Prevents a macOS computer from going to sleep. Uses either `caffeinate` or `pmset` depending on system version. If a process identifier is supplied, the computer will not sleep until that process exits.

## usage

``` javascript
const vaka = require('vaka')

// promises
vaka(process.pid)
  .then(pid => console.log(`caffeinate/pmset pid: ${pid}`))
  .catch(e => console.log(e))

// callback
vaka(process.pid, (e, pid) => console.log(`caffeinate/pmset pid: ${pid}`))
```
