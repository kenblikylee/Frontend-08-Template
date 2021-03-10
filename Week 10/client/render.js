const images = require('images')

module.exports = function render(viewport, element) {
  if (element.style) {
    let img = images(element.style.width, element.style.height)

    if (element.style['background-color']) {
      let color = element.style['background-color'] || 'rgb(0,0,0)'
      color.match(/rgb\((\d+), (\d+), (\d+)\)/)
      let r = RegExp.$1
      let g = RegExp.$2
      let b = RegExp.$3
      img.fill(+r, +g, +b, 1)
      viewport.draw(img, element.style.left || 0, element.style.top || 0)
    }
  }
  if (element.children) {
    for (let child of element.children) {
      render(viewport, child)
    }
  }
}
