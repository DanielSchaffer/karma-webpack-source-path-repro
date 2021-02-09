const { ProvidePlugin } = require('webpack');
const { merge } = require('webpack-merge');

/**
 * @typedef {webpack.Configuration} WebpackTestConfig
 */

/**
 * @type {WebpackTestConfig}
 */
module.exports = merge(require('./webpack.config.common'), {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: 'inline-source-map', // MUST use inline-source-map for coverage to show the correct source
  module: {
    rules: [
      {
        // ignore [S]CSS files
        test: /\.s?css$/,
        use: ['null-loader']
      },
      {
        test: /\.(js|ts)$/,
        // exclude files that should not be instrumented for coverage
        //   - libraries (node_modules)
        //   - any "test" files (test bundle, fixtures, etc)
        //   - barrel modules (index.js)
        //   - spec files
        exclude: /test|node_modules|index\.(js|ts)$|\.spec\.(js|ts)$/,
        use: [
          {
            loader: '@jsdevtools/coverage-istanbul-loader',
            options: {
              esModules: true,
              produceSourceMap: true
            }
          }
        ],
        enforce: 'post'
      }
    ]
  },
  plugins: [
    // expose global variables
    new ProvidePlugin({
      expect: ['chai', 'expect'],
    }),
  ],
});
