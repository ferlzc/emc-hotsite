const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: { index: path.resolve(__dirname, "src", "index.js") },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {

        test: /\.(png|svg|jpg|jpeg|gif|json)$/i,
        loader: 'file-loader',
        options: {
          name: '/assets/[name].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        type: 'javascript/auto'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "src", "index.html")
  })]
};