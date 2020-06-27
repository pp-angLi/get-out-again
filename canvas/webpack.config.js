const webapck = require('webpack')

module.exports = {
  mode: 'development',
  devServer: {
    port: '8989',
    hot: true,
    contentBase: './public',
    inline: true,
  },

  entry: `${__dirname}/public/js/index.js`,
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js',
  },

  module: {
    // {
    //   test: /\.js$/,
    //   use: ['babel-loader'],
    // }, 
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.html$/,
      use: ['raw-loader']
    }, {
      test: /\.(png|jpg|jpeg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 50000
        }
      }
    }]
  },
  plugins: [
    new webapck.HotModuleReplacementPlugin()
  ]
}