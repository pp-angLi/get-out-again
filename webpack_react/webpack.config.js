const webpack = require('webpack');
module.exports = {
  mode: 'development',
  devServer: {
    contentBase: "./public",
    inline: true,
    hot: true,
    // host: '0.0.0.0',
    port: 8000
  },

  entry: `${__dirname}/public/Hello.js`,
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: ['raw-loader']
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}