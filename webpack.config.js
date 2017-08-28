const WebpackNotifierPlugin = require('webpack-notifier')
module.exports = {
  entry: './src/views/index.html',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use:[{
          loader:'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }]
      }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin()
  ]
}
