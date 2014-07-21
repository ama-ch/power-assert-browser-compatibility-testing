module.exports = function(grunt) {

  var customLaunchers1 = {
    'SL_Chrome': {
      base: 'SauceLabs',
      browserName: 'chrome'
    },
    'SL_Firefox': {
      base: 'SauceLabs',
      browserName: 'firefox'
    },
    'SL_Opera': {
      base: 'SauceLabs',
      browserName: 'opera'
    },
    'SL_Safari': {
      base: 'SauceLabs',
      browserName: 'safari',
      platform: 'OS X 10.9',
      version: '7'
    }
  };
  var customLaunchers2 = {
    // Now karma doesn't work on IE6.
    // @see https://github.com/karma-runner/karma/issues/983
    // 'SL_IE_6': {
    //   base: 'SauceLabs',
    //   browserName: 'internet explorer',
    //   platform: 'Windows XP',
    //   version: '6'
    // },
    'SL_IE_7': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows XP',
      version: '7'
    },
    'SL_IE_8': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows XP',
      version: '8'
    }
  };
  var customLaunchers3 = {
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

  grunt.initConfig({
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        options: {
          singleRun: true
        }
      },
      ci1: {
        configFile: 'karma.conf-ci.js',
        options: {
          customLaunchers: customLaunchers1,
          browsers: Object.keys(customLaunchers1)
        }
      },
      ci2: {
        configFile: 'karma.conf-ci.js',
        options: {
          customLaunchers: customLaunchers2,
          browsers: Object.keys(customLaunchers2)
        }
      },
      ci3: {
        configFile: 'karma.conf-ci.js',
        options: {
          customLaunchers: customLaunchers3,
          browsers: Object.keys(customLaunchers3)
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('test', ['karma:unit']);
  grunt.registerTask('ci', ['karma:ci1', 'karma:ci2', 'karma:ci3']);
};
