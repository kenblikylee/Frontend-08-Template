# 学习笔记

## 1、泛用语言分类方法

- 非形式化语言：中文、英文
- 形式化语言（乔姆斯基谱系）
  - 0型 无限制文法
  - 1型 上下文相关文法
  - 2型 上下文无关文法
  - 3型 正则文法

## 2、产生式（BNF）

- 用尖括号扩起来的名称表示语法结构名
- 语法结构分为基础结构和复合结构
  - 基础结构称终结符
  - 复合结构称非终结符
- 引号和中间的字符表示终结符
- 可以有括号
- * 表示重复多次
- | 表示或
- + 表示至少一次

## 3、用产生式理解乔姆斯基分类谱系

- 0型 无限制文法
  - ?::=?
- 1型 上下文相关文法
  - ?<A>?::=?<B>?
- 2型 上下文无关文法
  - <A>::=?
- 3型 正则文法
  - <A>::=<A>? ✅
  - <A>::=?<A>? ❌

Javascript 整体是上下文无关文法，表达式主要是正则文法，部分特性如 `get` 和 `**` 运算属于上下文相关文法。

## 4、现代语言分类

按形式语言用途:
- 数据描述语言
  - JSON
  - HTML
  - XAML
  - SQL
  - CSS
- 编程语言
  - C/C++
  - Java
  - C#
  - Python
  - Ruby
  - Perl
  - Javascript
  - Lisp
  - Clojure
  - Haskell

按形式语言表达方式:
- 声明式语言
  - JSON
  - HTML
  - XAML
  - SQL
  - CSS
  - Lisp
  - Clojure
  - Haskell
- 命令型语言
  - C/C++
  - Java
  - C#
  - Python
  - Ruby
  - Perl
  - Javascript

## 5、编程语言的性质

图灵完备性:
- 命令式——图灵机
  - goto
  - if 和 while
- 声明式——lambda
  递归

动态和静态:
- 动态
  - 在用户的设备/在线服务器上
  - 产品实际运行时
  - Runtime
- 静态
  - 在程序员的设备上
  - 产品开发时
  - Compiletime

## 6、一般命令型语言的设计方式

- Atom
  - Identifier
  - Literal
- Expression
  - Atom
  - Operator
  - Punctuator
- Statement
  - Expression
  - Keyword
  - Punctuator
- Structure
  - Function
  - Class
  - Process
  - Namespace
- Program
  - Program
  - Module
  - Package
  - Library

## 7、Number

Atom：
- Grammar
  - Literal
  - Variable
  - Keywords
  - Whitespace
  - Line Terminator
- Runtime
  - Types
    - Number
    - String
    - Boolean
    - Object
    - Null
    - Undefined
    - Symbol
  - Execution Context

Number
- IEEE 754 Double Float
  - Sign (1)
  - Exponent (11)
  - Fraction (52)
- Grammar
  - DecimalLiteral
    - 0
    - 0.
    - .2
    - 1e3
    - 0.5 .toString(2)
  - BinaryIntegerLiteral
    - 0b111
  - OctalIntegerLiteral
    - 0o10
  - HexIntegerLiteral
    - 0xFF

## 8、String

String
- Character
- Code Point
- Encoding
- ASCII (0~127)
- Unicode
- UCS
- GB
  - GB2312
  - GBK(GB13000)
  - GB18030
- ISO-8859
- BIG5

## 9、其他类型

## 10、对象的基础知识

## 11、JS中的对象
