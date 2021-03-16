学习笔记

## CSS 规则分类

- 普通规则
- @规则

## At-rules

- @charset : https://www.w3.org/TR/css-syntax-3/
- @import :https://www.w3.org/TR/css-cascade-4/
- **@media** :https://www.w3.org/TR/css3-conditional/
- @page : https://www.w3.org/TR/css-page-3/
- @counter-style :https://www.w3.org/TR/css-counter-styles-3
- **@keyframes** :https://www.w3.org/TR/css-animations-1/
- **@fontface** :https://www.w3.org/TR/css-fonts-3/
- @supports :https://www.w3.org/TR/css3-conditional/
- @namespace :https://www.w3.org/TR/css-namespaces-3/

## CSS规则的结构

语法：
``` css
selector {
  key: value;
}
```

- 选择器
- 声明
  - key
  - Value

- Selector
  - https://www.w3.org/TR/selectors-3/
  - https://www.w3.org/TR/selectors-4/
- Key
  - Properties
  - Variables: https://www.w3.org/TR/css-variables/
- Value
  - https://www.w3.org/TR/css-values-4/

## 收集标准

https://www.w3.org/TR/?tag=css

``` js
let list = Array.prototype.slice.call(document.querySelector('#container').children).filter(e => e.getAttribute('data-tag').match(/css/)).map(e => ({ name: e.children[1].innerText, url: e.children[1].children[0].href }))

JSON.stringify(list, null, '  ')
```

## 选择器语法

- 简单选择器
  - *
  - div svg|a MathML
  - .cls
  - #id
  - [attr=value]
  - 伪类：`:hover`
  - 伪元素：`::before`
- 复合选择器
  - <简单选择器><简单选择器><简单选择器>
  - * 或者 div 必须写在最前面
- 复杂选择器
  - <复合选择器><sp><复合选择器>
  - <复合选择器>">"<复合选择器>
  - <复合选择器>"~"<复合选择器>
  - <复合选择器>"+"<复合选择器>
  - <复合选择器>"||"<复合选择器>

## 选择器优先级

对简单选择器进行计数

``` css
S = 0 * N^3 + 2 * N^2 + 1 * N^1 + 1
```

### 计算 specificity

计算方法：https://www.w3.org/TR/selectors-3/#specificity

- 对ID选择器计数
- 对类、属性和伪类选择器计数
- 对类型和伪元素选择器计数
- 忽略通配符 *
- :not(selector) 中 selector 计算方法和普通选择器一样，但 :not 本身不算作伪类

- div#a.b .c[id=x]
  - [1, 3, 1]
- #a:not(#b)
  - [2, 0, 0]
- *.a
  - [0, 1, 0]
- div.a
  - [0, 1, 1]

## 伪类

- 链接/行为
  - :any-link
  - :link :visited
  - :hover
  - :active
  - :focus
  - :target
- 树结构
  - :empty
  - :nth-child()
  - :nth-last-child()
  - :first-child :last-child :only-child
- 逻辑型
  - :not 伪类
  - :where :has

## 伪元素

- ::before
- ::after
- ::first-line
  - font
  - color
  - background
  - word-spacing
  - letter-spacing
  - text-decoration
  - text-transform
  - line-height
- ::first-letter
  - font
  - color
  - background
  - text-decoration
  - text-transform
  - letter-spacing
  - word-spacing 
  - line-height
  - float
  - vertical-align
  - magin, padding, border

## 思考题

**为什么`first-letter` 可以设置 `float` 之类的，而 `first-line` 不行呢？**

参考链接：![https://www.w3.org/TR/selectors-3/#pseudo-elements](https://www.w3.org/TR/selectors-3/#pseudo-elements)

答：`first-line` 伪元素描述的是元素第一个格式化行，首行的长度由很多因素决定，包括页面的宽带、字体大小等。当插入`first-line`伪元素，普通HTML段落会被客户机重写，增加一对虚构的标签对表示对应的`::first-line`伪元素。在CSS中，只有添加到类块(block-like)容器中，`first-line`伪元素才会生效。元素的第一个格式化行出现在同一个文档流的块级子孙元素内，这个块级子元素不是一个具有 float 和 position 属性而脱离文档流的元素。客户代理表现就像将表示`first-line` 伪元素虚构开始标签嵌入到最内层的块级元素内。例如：

``` html
<DIV>
  <P>First paragraph</P>
  <P>Second paragraph</P>
</DIV>
```

会被处理成：

``` html
<DIV>
  <P><DIV::first-line><P::first-line>First paragraph</P::first-line></DIV::first-line></P>
  <P><P::first-line>Second paragraph</P::first-line></P>
</DIV>
```

由于前面讲了，`first-line` 伪元素对应的虚构标签不能插入`float`和`position` 导致脱离文档流的容器内，因此其自身也不能设置`float`相关属性。
