const webpack = require('webpack')
module.exports = {
  mode: 'development',
  devServer: {
    inline: true,
    hot: true,
    contentBase: './public',
    port: 3001
  },

  entry: `${__dirname}/public/index.jsx`,
  output: {
    path: `${__dirname}/public`,
    filename: `bundle.js`
  },
  module: {
    rules: [{
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.?css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: ['raw-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

// pm2 start ---- pm2 start npm --run server