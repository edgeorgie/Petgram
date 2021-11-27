const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    filename: 'app.bundle.js',
  },
  plugins: [
    new HTMLWebpackPlugin()
  ],
}