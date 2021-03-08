const images = require('images')

module.exports = function render(viewport, element) {
  if (element.style) {
    let img = images(element.style.widht, element.style.height)

    if (element.style['background-color']) {
      let color = element.style['background-color'] || 'rgb(0,0,0)'
      color.match(/rgb\((\d+), (\d+), (\d+)\)/)
      let r = '0x' + Number(RegExp.$1).toString(16)
      let g = '0x' + Number(RegExp.$2).toString(16)
      let b = '0x' + Number(RegExp.$3).toString(16)
      img.fill(r, g, b, 1)
      viewport.draw(img, element.style.left || 0, element.style.top || 0)
    }
  }
}
