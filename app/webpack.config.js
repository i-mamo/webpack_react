const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const workBoxWebpackPlugin = require("workbox-webpack-plugin");
const WebpackPwaManifest = require('webpack-pwa-manifest')
const webpack = require('webpack')

module.exports = {

  mode: 'development',
  watch:false,

  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    // publicPath: '/',
    filename: '[name].bundle.js',
    clean: true,
  },

  devServer: {
    port: '3000',
    hot: true,
    open: true,
    historyApiFallback: true //defaultが単一ページのみの表示なので複数ページにする。
  },

  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [["@babel/preset-env", {
            "targets": {
              "node": "current"
            }
          }], "@babel/preset-react"]
        }
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false }
          }
        ]
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
        options:{
            name:'src/img/[name].[ext]'
        }
    },
    ]
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: './src/index.html'
    }),
    //グローバルで使えるように
    new webpack.ProvidePlugin({
      //   jQuery: "jquery",
      $: "jquery",
    }),
    new WebpackPwaManifest({
      short_name: "webpack test",
      name: "webpack test",
      display: "standalone",
      start_url: ".",
      publicPath: '/' ,
      background_color: "#202124",
      theme_color: "#FF0000",
      icons: [{
        src: path.resolve("src/img/Medicalc_logo-03.png"),
        sizes: [96, 128, 192, 256, 384, 512],
      }],
      filename:'[name].json',
      skipWaiting: true,
      clientsClaim: true,
    }),
    new workBoxWebpackPlugin.GenerateSW({
      swDest: path.resolve(__dirname, 'build') + "/serviceworker.js",
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx']
  }



}
