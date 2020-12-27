学习笔记

## Javascript 的三种异步处理机制

- callback
- Promise
- async/await: 基于 Promise 的语法包装

## async generator

``` js
function sleep(t) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, t)
  })
}

async function* counter() {
  let i = 0
  while(true) {
    await sleep(1000)
    yield i++
  }
}

(async function() {
  for await(let v of counter()) {
    console.log(v)
  }
})()
```
