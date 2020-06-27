const webpack = require('webpack')
module.exports = {
  mode: 'development',
  devServer: {
    'port': 8080,
    hot: true,
    inline: true,
    contentBase: './public',
  },
  entry: `${__dirname}/public/index.js`,
  output: {
    path: `${__dirname}/public`,
    filename: `bundle.js`
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.html$/,
      use: ['raw-loader']
    }, {
      test: /\.js$/,
      use: ['babel-loader']
    }, {
      test: /\.(png|jsp|gif|jpeg)/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 500000
        }
      }]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}