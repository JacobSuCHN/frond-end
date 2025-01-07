// 需求：
// 获取当前静态资源
// 输出文件名到fileList.md

class FileListPlugin {
  constructor(options = {}) {
    this.options = options
    this.filename = this.options.filename || 'fileList.md'
  }
  apply(compiler) {
    compiler.hooks.emit.tap('FileListPlugin', (compilation) => {
      const { filename } = this

      const { assets } = compilation
      //   console.log(assets, 'fileList')
      const fileCount = Object.keys(assets).length

      let content = `# 本次打包工生成${fileCount}个文件 \n`

      for (let filename in assets) {
        content += `- ${filename}\n`
      }

      compilation.assets[filename] = {
        source: function () {
          return content
        },
        size: function () {
          return content.length
        },
      }

      //   chunks
      compilation.chunks.forEach(function (chunk) {
        // console.log('chunk', chunk)
        chunk.getModules().forEach((module) => {
          console.log('====module====', module)
        })
      })
    })
  }
}

exports = module.exports = FileListPlugin
