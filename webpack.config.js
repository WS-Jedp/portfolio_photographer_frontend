const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  devServer: {
    publicPath: '/',
    open: true,
    port: 8080,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.ts', '.js', '.jsx', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: 'index.html'
    })
  ]
}