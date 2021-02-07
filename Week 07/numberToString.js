const assert = require('assert').strict

function numberToString(number) {
  return number + ''
}

assert.equal(numberToString(123), '123')
