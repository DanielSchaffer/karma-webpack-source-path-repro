const { resolve } = require('path');

const babelLoader = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
          corejs: 3
        }
      ]
    ]
  }
};

/**
 * @typedef {webpack.Configuration} WebpackCommonConfig
 */

/** *
 * @type {WebpackCommonConfig}
 */
module.exports = {
  context: resolve(__dirname),

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [babelLoader]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [babelLoader, 'ts-loader']
      }
    ]
  },
};
