power-assert-browser-compatibility-testing
==========================================

[![Build Status](https://travis-ci.org/ama-ch/power-assert-browser-compatibility-testing.svg?branch=master)](https://travis-ci.org/ama-ch/power-assert-browser-compatibility-testing)
[![Sauce Test Status](https://saucelabs.com/buildstatus/ama-ch_power-assert)](https://saucelabs.com/u/ama-ch_power-assert)
[![devDependency Status](https://david-dm.org/ama-ch/power-assert-browser-compatibility-testing/dev-status.svg)](https://david-dm.org/ama-ch/power-assert-browser-compatibility-testing#info=devDependencies)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/ama-ch_power-assert.svg)](https://saucelabs.com/u/ama-ch_power-assert)

## About

Browser compatibility testing of [power-assert](https://github.com/twada/power-assert).

## Test environment

* Using [Karma](http://karma-runner.github.io/) test runner.
* Testing framework is [Mocha](http://mochajs.org/).
* Based on [power-assert-karma-seed](https://github.com/azu/power-assert-karma-seed) and [karma-sauce-example](https://github.com/saucelabs/karma-sauce-example).

## Tips

To run power-assert in IE <= 8, [es5-shim](https://github.com/es-shims/es5-shim) is required.

## Limitation

Karma [doesn't work with IE6](https://github.com/karma-runner/karma/issues/983) at this time.
