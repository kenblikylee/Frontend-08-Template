const assert = require('assert').strict

function stringToNumber(number) {
  return +number
}

assert.equal(stringToNumber('-123'), -123)
