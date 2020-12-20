const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 Info:
  This project has following three different source folders.
  1. src (contains simple redux implementation of createStore and reducer)
  2. src_v2 (enhance version, redux implementation with combineReducers and multiple components)
  3. src_v3 (enhance version, redux implementation with middlewares and async actions).

 Note:
  If you have made any changes to this config file then you will need to restart 
  your application in order to see the changes. 
*/

// change this source path to src or src_v2 if you wanted to see that implementation,
const sourcePath = './src_v3';   

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