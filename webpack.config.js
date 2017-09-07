const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = options => {
  return {
    entry: './src/views/index.js',
    output: {
      filename: './src/public/bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: '/node_modules/',
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['es2015', 'react'],
                plugins: ["transform-decorators-legacy", "transform-object-rest-spread"],
              },
            },
          ],
        },
        {
          test: /\.css/,
          use: [
            'style-loader'
          ]
        }
      ],
    },
    plugins: [
      new WebpackNotifierPlugin(),
    ],
  }
};
