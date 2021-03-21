学习笔记

## 盒

- 标签、元素、盒
- 盒是最小绘制单元
- 盒模型：margin, border, padding, content

## 正常流

- 三代排版技术
  - 基于正常流
  - 基于flex技术的排版gh
  - 基于grid技术的排版
- 正常流排版
  - 收集盒进行
  - 计算盒在行中的排布
  - 计算行的排布
- float 和 clear

## 设立BFC

- floats
- absolutely positioned elements
- block containers (such as inline-blocks, table-cells, and table-captions) that are not block boxes,
  - flex items
  - grid cell
  - ...
- and block boxes with `overflow` other than 'visible'

## BFC 合并

- block box && overflow: visible
  - BFC 合并与float
  - BFC 合并与边距折叠

## Flex 排版

- 收集盒进行
- 计算盒在主轴方向的排布
- 计算盒在交叉轴方向的排布

## 动画

- @keyframes: 定义
- animation: 使用
  - animation-name 时间曲线
  - animation-duration 动画的时长
  - animation-timing-function 动画的时间曲线
  - animation-delay 动画开始前的延迟
  - animation-iteration-count 动画的播放次数
  - animation-direction 动画的方向

## transition

- transition-property 要变换的属性
- transition-duration 变换的时长
- transition-timing-function 时间曲线
- transition-delay 延迟

``` js
function generateCubicBezier(v, g, t) {
  let a = v / g
  let b = t + v / g

  return [[(a / 3 + (a + b) / 3 - a) / (b - a), (a * a / 3 + a * b *2 / 3 - a * a) / (b * b - a * a)],
          [(b / 3 + (a + b) / 3 - a) / (b - a), (b * b / 3 + a * b * 2 / 3 - a * a) / (b * b - a * a)]]
}

function createBall() {
  console.log('createBall')
  let ball = document.createElement('div')
  let t = Number(document.getElementById('t').value)
  let vx = Number(document.getElementById('vx').value)
  let vy = Number(document.getElementById('vy').value)
  let g = Number(document.getElementById('g').value)
  ball.className = 'ball'
  document.body.appendChild(ball)
  ball.style.transition = `left linear ${t}s, top cubic-bezier(${generateCubicBezier(vy, g, t)}) ${t}s`
  setTimeout(function () {
    ball.style.left = `${t * vx}px`
    ball.style.top = `${(vy + g * t) * t / 2}px`
  }, 0)
}
```

## 绘制

- 几何图形
  - border
  - box-shadow
  - border-radius
- 文字
  - font
  - text-decoration
- 位图
  - background-image

- data uri + svg
- data:image/svg+xml,<svg with="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"><ellipse cx="300" cy="150" rx="200" ry="80" style="fill:rgb(255, 255, 0); stroke:rgb(0,0,100); stroke-width:2" /></svg>
