const path = require('path');

module.exports = {
  entry: './server.js',
  mode: 'production',
  stats: {
    errorDetails: false,
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, '.'),
    filename: 'server.bundle.js'
  },
  //下記でserver側のbuild時のERRORはなくなるがbuild後にexpressが無いと言われる。
  // externals: {
  //   express: 'express'
  // }
};