// 解析markdown
// marked
const marked = require('marked')

module.exports = function (content) {
  const ret = marked.parse(content)
  console.log(ret)
  return ret
}
