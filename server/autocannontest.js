'use strict'

const autocannon = require('autocannon');
const instance = autocannon({
  url: 'http://localhost:3000',
  connections: 10, //default
  pipelining: 1, // default
  duration: 10, // default
  workers: 4
}, console.log)
console.log('this is instance')
console.log(instance)
// this is used to kill the instance on CTRL-C
// process.once('SIGINT', () => {
//   instance.stop()
// })

// // just render results
// autocannon.track(instance, {renderProgressBar: false})