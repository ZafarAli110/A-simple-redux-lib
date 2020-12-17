const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// change this to './src', if you want to see that implementation
const sourcePath = './src_v2';

module.exports = {
  mode: 'development',
  entry: `${sourcePath}/app.js`, 
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    port: 8080,
    open: true,
    compress: true,
    contentBase: path.resolve(__dirname, 'public'),
  },
  devtool: 'eval-cheap-source-map',
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_module/,
        use:{
          loader: 'babel-loader',
        }
      },
      {
        test: /\.html$/,
        use:{
          loader: 'html-loader',
          options: { minimize: true}
        }
      },
    ]
  },
  plugins:[
      new HtmlWebpackPlugin({
        template: `${sourcePath}/index.html`,
      })
  ]
}