// Karma configuration
// Generated on Sun Jul 20 2014 16:36:51 GMT+0900 (JST)

module.exports = function(config) {
  // Use ENV vars on Travis and sauce.json locally to get credentials
  if (!process.env.SAUCE_USERNAME) {
    console.error('SAUCE_USERNAME is not set.');
    process.exit(1);
  }

  // Browsers to run on Sauce Labs
  var customLaunchers = {
    // 'SL_Chrome': {
    //   base: 'SauceLabs',
    //   browserName: 'chrome'
    // },
    // 'SL_Firefox': {
    //   base: 'SauceLabs',
    //   browserName: 'firefox',
    //   version: '26'
    // },
    // 'SL_Safari': {
    //   base: 'SauceLabs',
    //   browserName: 'safari',
    //   platform: 'OS X 10.9',
    //   version: '7'
    // },
    'SL_IE_8': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows XP',
      version: '8'
    },
    'SL_IE_9': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 2008',
      version: '9'
    },
    'SL_IE_10': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 2012',
      version: '10'
    },
    'SL_IE_11': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 8.1',
      version: '11'
    }
  };

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/es5-shim/es5-shim.js',
      'node_modules/power-assert/build/power-assert.js'
    ],


    // list of files to browserify
    browserify: {
      debug: true,
      files: [
        'test/**/*.js'
      ],
      transform: [
        'espowerify'
      ]
    },


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '/**/*.browserify': 'browserify'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'saucelabs'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    sauceLabs: {
      testName: 'power-assert-borser-compatibility'
    },
    captureTimeout: 120000,
    customLaunchers: customLaunchers,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: Object.keys(customLaunchers),


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
