学习笔记

## 合法元素

- Element: <tagname>...</tagname>
- Text: text
- Comment: <!-- comments -->
- DocumentType: <!Doctype html>
- ProcessingInstruction: <?a 1?>
- CDATA: <![CDATA[ ]]>

## 字符引用

- &#161;
- &amp;
- &lt;
- &quot;

## 事件API

- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

## DOM API

- 导航类操作
  - parentNode
  - parentElement
  - childNodes
  - children
  - firstChild
  - firstElementChild
  - lastChild
  - lastElementChild
  - nextSibling
  - nextElementSibling
  - previousSibling
  - previousElementSibling
- 修改操作
  - appendChild
  - insertBefore
  - removeChild
  - repalceChild
- 高级操作
  - compareDocumentPosition 比较两个节点中关系的函数
  - contains 检查一个节点是否包含另一个节点的函数
  - isEqualNode 检查两个节点是否完全相同
  - isSameNode 检查两个节点是否是同一个节点，实际在 Javascript 中可以用“===”代替
  - cloneNode 复制一个节点，如果传入参数 true, 则会连同子元素做深拷贝

## Range API

比节点 API 操作更加精确

- 创建
  - var range = new Range()
  - range.setStart(element, 9)
  - renge.setEnd(element, 4)
  - var range = document.getSelection().getRangeAt(0)
- Range API
  - range.setStartBefore
  - range.setEndBefore
  - range.setStartAfter
  - range.setEndAfter
  - range.selectNode
  - range.selectNodeContents
- 增删操作
  - var fragment = range.extractContents()
  - range.insertNode(document.createTextNode('aaaa'))

## CSSOM

- document.styleSheets
- Rules
  - document.styleSheets[0].cssRules
  - document.styleSheets[0].insertRule("p { color: pink; }", 0)
  - document.styleSheets[0].removeRule(0)

- CSSStyleRule
  - selectorText String
  - style K-V结构
- getComputedStyle
  - window.getComputedStyle(elt, pseudoElt)
  - elt 想要获取的元素
  - pseudoElt 可选，伪元素: getComputedStyle(document.querySelector('a', '::after'))

## CSSOM View

Window
- window.innerHeight, window.innerWidth
- window.outerWidth, window.outerHeight
- window.devicePixelRatio
- window.screen
  - window.screen.width
  - window.screen.height
  - window.screen.availWidth
  - window.screen.availHeight

- window.open("about:blank", "_blank", "width=100,height=100,left=100,right=100")
- moveTo(x, y)
- moveBy(x, y)
- resizeBy()

Scroll
- 元素
  - scrollTop
  - scrollLeft
  - scrollWidth
  - scrollHeight
  - scroll(x, y)
  - scrollBy(x, y)
  - scrollIntoView()
- window
  - scrollX
  - scrollY
  - scroll(x, y)
  - scrollBy(x, y)

layout
- getClientRects()
- getBoundingClientRect()

## 所有API

- khronos
  - WebGL
- ECMA
  - ECMAScript
- WHATWG
  - HTML
- W3C
  - webaudio
  - CG/WG
