const { resolve } = require('path');

const webpackConfig = require('./webpack.config.test');

/**
 * @typedef KarmaConfig
 */

/**
 * @type KarmaConfig
 */
module.exports = config => {
  config.set({
    basePath: __dirname,
    // urlRoot: webpackConfig.output.path,
    frameworks: ['webpack', 'source-map-support', 'mocha'],
    // frameworks: ['mocha', 'webpack'],
    plugins: [
      'karma-coverage',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-source-map-support',
      'karma-sourcemap-loader',
      'karma-webpack',

      // browsers
      'karma-chrome-launcher',
      'karma-edge-launcher',
      'karma-jsdom-launcher',
      'karma-firefox-launcher',
      'karma-safari-launcher'
    ],
    files: [
      // include bundle of tests and sources (via webpack)
      { pattern: 'test/bundle.js', watched: false },
      {
        // fixes issue with mocha's source map requested via source-map-support getting a 404
        pattern: require.resolve('mocha/mocha.js.map'),
        included: false,
        served: true,
        watched: false
      }
    ],
    preprocessors: {
      'test/bundle.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,

    browsers: ['ChromeHeadless'],

    client: {
      // mocha: {
      //   // change Karma's debug.html to the mocha web reporter
      //   reporter: 'html'
      // },
      clearContext: false
    },

    coverageReporter: {
      dir: resolve(__dirname, '.coverage'),
      type: ['lcov', 'text-summary'],
      reporters: [{ type: 'html', subdir: './html' }],

      // ensures that files not directly referenced by unit tests are still included in the coverage report
      includeAllSources: true,

      instrumenterOptions: {
        istanbul: { noCompact: true }
      }
    },

    // reporters: ['mocha'],
    reporters: ['mocha', 'coverage'],
    singleRun: true // override via CLI with --single-run false
  });
};
