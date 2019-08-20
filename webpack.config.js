const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const postcssNormalize = require('postcss-normalize')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  devServer: {
    open: true,
    port: 8080,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.png|svg?$/,
        use: { loader: 'file-loader' }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.css|scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoader: 1,
              modules: true,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              parser: 'postcss-scss',
              plugins: () => {
                postcssNormalize()
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.js?$/,
        loader: 'standard-loader',
        exclude: /(node_modules)/,
        options: { parser: 'babel-eslint' }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
