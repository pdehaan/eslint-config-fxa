'use strict'

module.exports = {
  extends: 'fxa/index',

  env: {
    amd: true, // defines require() and define() as global variables as per the amd spec
    browser: true, // browser global variables
    mocha: true // adds all of the Mocha testing global variables
  },

  rules: {
    'camelcase': 'error',
    'consistent-this': ['error', 'self'],
    'strict': ['error', 'function']
  }
}
