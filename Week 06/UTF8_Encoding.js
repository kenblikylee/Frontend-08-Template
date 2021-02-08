function UTF8_Encoding (string) {
  var buf = []
  for (var i = 0; i < string.length; i++) {
    var code = string.charCodeAt(i)
    var bin = code.toString(2)
    if (bin.length > 16) {
      bin = bin.padStart(22, 0)
      buf.push(parseInt('1111' + bin.substr(0, 4), 2))
      buf.push(parseInt('10' + bin.substr(4, 6), 2))
      buf.push(parseInt('10' + bin.substr(10, 6), 2))
      buf.push(parseInt('10' + bin.substr(16, 6), 2))
    } else if (bin.length > 10) {
      bin = bin.padStart(16, 0)
      buf.push(parseInt('1110' + bin.substr(0, 4), 2))
      buf.push(parseInt('10' + bin.substr(4, 6), 2))
      buf.push(parseInt('10' + bin.substr(10, 6), 2))
    } else {
      bin = bin.padStart(10, 0)
      buf.push(parseInt('1100' + bin.substr(0, 4), 2))
      buf.push(parseInt('10' + bin.substr(4, 6), 2))
    }
  }

  return new Uint8Array(buf)
}