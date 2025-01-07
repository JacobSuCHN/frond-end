const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const FileListPlugin = require('./plugins/fileList')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './dist'),
  },
  resolveLoader: {
    modules: ['node_modules', './loaders'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              // 产生的 worker 的数量，默认是 (cpu 核心数 - 1)，或者，
              // 在 require('os').cpus() 是 undefined 时回退至 1
              workers: require('os').cpus() - 1,

              // 一个 worker 进程中并行执行工作的数量
              // 默认为 20
              workerParallelJobs: 50,

              // 额外的 node.js 参数
              workerNodeArgs: ['--max-old-space-size=1024'],

              // 允许重新生成一个僵死的 work 池
              // 这个过程会降低整体编译速度
              // 并且开发环境应该设置为 false
              poolRespawn: false,

              // 闲置时定时删除 worker 进程
              // 默认为 500（ms）
              // 可以设置为无穷大，这样在监视模式(--watch)下可以保持 worker 持续存在
              poolTimeout: 2000,

              // 池分配给 worker 的工作数量
              // 默认为 200
              // 降低这个数值会降低总体的效率，但是会提升工作分布更均一
              poolParallelJobs: 50,

              // 池的名称
              // 可以修改名称来创建其余选项都一样的池
              name: 'my-pool',
            },
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          //   {
          //     loader: 'test-babel-loader',
          //     options: {
          //       presets: ['@babel/preset-env'],
          //     },
          //   },
          //   {
          //     loader: 'test-babel-loader2',
          //   },
        ],
      },
      {
        test: /\.md$/,
        use: ['html-loader', 'markdown-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    // new BundleAnalyzerPlugin(),
    new FileListPlugin({}),
  ],
  //   cache: {
  //     type: 'filesystem',
  //     // allowCollectingMemory: true,
  //     buildDependencies: {
  //       config: [__filename],
  //     },
  //   },
}

// 数据支撑
// 性能优化
// webpack
// 当前现状的数据 分析问题点 对症下药
// module chunk
// 比对文件内容hash或者时间戳 没有变化 直接使用缓存副本 减少重复计算
