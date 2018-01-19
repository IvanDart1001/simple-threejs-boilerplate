/**
 * Created by lenovo on 2018/1/19.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'My first three.js app'
    })
  ],
  devtool: 'inline-source-map',
  devServer:{
    contentBase: './dist',
    port: 7777
  },
  module: {
    rules:[
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use:[
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use:[
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use:[
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use:[
          'xml-loader'
        ]
      }
    ]
  }
};